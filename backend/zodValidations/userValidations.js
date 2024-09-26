import {z} from 'zod';

const userSignupSchema = z.object({
    email: z.string().email('invalid email'),
    mobileNumber: z.string().length(10, 'Mobile number must contain 10 digits').regex(/^\d+$/, 'Mobile number should only contain numbers'),
    fullName: z.string().min(3,'invalid full name').regex(/^[a-zA-Z\s]+$/, 'full name should contain only letters and spaces'),
    password: z.string().min(6,'password should contain at least 6 characters'),
});

const userLoginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, { message: 'password should contain at least 6 characters' })
});

const editAddressSchema =  z.object({
    indexOfAddress:z.number().int().nonnegative().lt(3),
    newAddress: z.string().max(80),
});


export {userSignupSchema, userLoginSchema,editAddressSchema};