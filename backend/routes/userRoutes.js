import express from 'express';
import { loginUser, signupUser } from '../controllers/user/authConroller.js';
import { addAddress, deleteSavedAddress, editSavedAddress, getAddressDetails, setDefaultAddress } from '../controllers/user/addressController.js';
import protectRoute from '../middlewares/protectRoute.js';


const router = express.Router();

router.post('/auth/signup',signupUser);
router.post('/auth/login',loginUser);
router.get('/address',protectRoute,getAddressDetails);
router.post('/address/add-address',protectRoute,addAddress);
router.post('/address/set-default',protectRoute,setDefaultAddress);
router.put('/address/edit-address',protectRoute,editSavedAddress);
router.put('/address/delete-address',protectRoute,deleteSavedAddress);

export default router;