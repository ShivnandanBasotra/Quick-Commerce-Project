import User from "../../models/user/userModel.js";
import {z} from 'zod';
import { editAddressSchema } from "../../zodValidations/userValidations.js";

export async function getAddressDetails(req, res) {
    const userId = req.user._id;
    try {
        const user = await User.findById(userId, 'address');
        if (!user) return res.status(400).json({ message: "Unauthorized Access" });
        res.status(200).json({ savedAddress: user.address.savedAddress, defaultAddress: user.address.defaultAddress })
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in getAddressDetails", error.message);
    }
}

export async function addAddress(req, res) {
    const userId = req.user._id;
    const address = req.body.address;
    const addAddressSchema = z.string().max(80);
    try {
        const zodValidationResult = addAddressSchema.safeParse(address);
        if (!zodValidationResult.success) {
            const messages = zodValidationResult.error.issues.map(issue => {
                return issue.message;
            });
            return res.status(400).json({ error: messages })
        }
        const user = await User.findById(userId, 'address');
        if (!user) return res.status(400).json({ message: "Unauthorized Access" });
        if(user.address.savedAddress.length >= 3) return res.status(400).json({error:"Can't save more than 3 address, remove any one address"});
        if(user.address.savedAddress.includes(address)) return res.status(400).json({error:"same address already saved"});
        user.address.savedAddress.push(address);
        user.address.defaultAddress = address;
        const savedUser = await user.save();
        res.status(200).json({message: 'New address added successfully', address: savedUser.address})
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in addAddress", error.message);
    }
}

export async function setDefaultAddress (req,res) {
    const {indexOfAddress} = req.body;
    const userId = req.user._id;
    const indexOfAddressSchema = z.number().int().nonnegative().lt(3);; 
    try {
        const zodValidationResult = indexOfAddressSchema.safeParse(indexOfAddress);
        if (!zodValidationResult.success) {
            const messages = zodValidationResult.error.issues.map(issue => {
                return issue.message;
            });
            return res.status(400).json({ error: messages })
        }
        const user = await User.findById(userId,'address');
        if(!(indexOfAddress < user.address.savedAddress.length)) return res.status(400).json({error: "address not found in saved addressed"})
        const addressToSetAsDefault = user.address.savedAddress[indexOfAddress];
        user.address.defaultAddress = addressToSetAsDefault;
        const savedUser = await user.save();
        res.status(200).json({message:"Address successfully set as default.",address: savedUser.address})
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in addAddress", error.message);
    }
}

export async function editSavedAddress (req,res){
    const {indexOfAddress, newAddress} = req.body;
    const userId = req.user._id; 
    try {
        const zodValidationResult = editAddressSchema.safeParse({indexOfAddress,newAddress});
        if (!zodValidationResult.success) {
            const messages = zodValidationResult.error.issues.map(issue => {
                return issue.message;
            });
            return res.status(400).json({ error: messages })
        }
        const user = await User.findById(userId,'address');
        if(!(indexOfAddress < user.address.savedAddress.length)) return res.status(400).json({error: "address not found in saved addressed"})
        user.address.savedAddress[indexOfAddress]= newAddress;
        const savedUser = await user.save();
        res.status(200).json({message:"Address edited successfully.",address: savedUser.address})
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in addAddress", error.message);
    }
}

export async function deleteSavedAddress (req,res) {
    const {indexOfAddress} = req.body;
    const userId = req.user._id;
    const indexOfAddressSchema = z.number().int().nonnegative().lt(3);; 
    try {
        const zodValidationResult = indexOfAddressSchema.safeParse(indexOfAddress);
        if (!zodValidationResult.success) {
            const messages = zodValidationResult.error.issues.map(issue => {
                return issue.message;
            });
            return res.status(400).json({ error: messages })
        }
        const user = await User.findById(userId,'address');
        if(!(indexOfAddress < user.address.savedAddress.length)) return res.status(400).json({error: "address not found in saved addressed"});
        const addressToDelete = user.address.savedAddress[indexOfAddress];
        user.address.savedAddress.splice(indexOfAddress,1);
        if(user.address.defaultAddress === addressToDelete) user.address.defaultAddress = user.address.savedAddress[user.address.savedAddress.length -1];
        const savedUser = await user.save();
        res.status(200).json({message:"Address successfully deleted.",address: savedUser.address})
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log("error occured in addAddress", error.message);
    }
}


