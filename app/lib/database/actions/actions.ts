'use server'

import { revalidatePath } from "next/cache"
import { connectToDatabase } from ".."
import User from "../models/user.model"
import { redirect } from "next/navigation"
import bcrypt from 'bcrypt';


export const addUser = async (formData:any) => {
    const {username,email, password, phone, address, isAdmin, isActive} =
    Object.fromEntries(formData)

    try {

        await connectToDatabase ()

          // Hash the password using bcrypt
          const hashedPassword = await bcrypt.hash(password, 10);

        
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        })

        await newUser.save()
    } catch (error) {
        throw new Error('failed to create user')
    }

    revalidatePath('/dashboard/users/')
    redirect('/dashboard/users')
}




export const updateUser = async (formData: any) => {
    try {
        const { _id, username, email, password, phone, address, isAdmin, isActive } = formData;


        // Ensure connection to database
        await connectToDatabase();

         // Hash the password using bcrypt
         const hashedPassword = await bcrypt.hash(password, 10);

        // Prepare fields to update, removing empty or undefined values
        const updateFields: any = {
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        };

        // // Remove keys with empty string or undefined values
        // Object.keys(updateFields).forEach(
        //     key => (updateFields[key] === "" || updateFields[key] === undefined) && delete updateFields[key]
        // );

        // Use Mongoose's findByIdAndUpdate to update the user
        // const updatedUser = await User.findByIdAndUpdate(_id, updateFields, { new: true });
        const updatedUser = await User.findOneAndUpdate({ _id }, updateFields, { new: true })

        if (!updatedUser) {
            throw new Error('User not found or failed to update');
        }

        return JSON.parse(JSON.stringify(updatedUser))

        revalidatePath('/dashboard/users/'); 
        redirect('/dashboard/users');

    

    } catch (error) {
        console.error('Failed to update user:', error);
        throw new Error('Failed to update user');
    }
};
