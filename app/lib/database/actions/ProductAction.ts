'use server'

import { revalidatePath } from "next/cache"
import { connectToDatabase } from ".."
import User from "../models/user.model"
import { redirect } from "next/navigation"
import Product from "../models/product.model"


export const addProduct = async (formData:any) => {
    const {title,cat, price, stock, color, size, desc} =
    Object.fromEntries(formData)

    try {

        await connectToDatabase ()
        
        const newUser = new Product({
            title,
            cat,
            price,
            stock,
            color,
            size,
            desc,
        })

        await newUser.save()
    } catch (error) {
        throw new Error('failed to create user')
    }

    revalidatePath('/dashboard/products/add')
    redirect('/dashboard/products')
}