import { connectToDatabase } from "./database"
import Product from "./database/models/product.model";
// import { Product } from "./database/models/models";
import User from "./database/models/user.model";




export const fetchUsers = async (q: any,page: any) => {
    const db = await connectToDatabase();
    const regex = new RegExp(q,'i')

    const  ITEM_PER_PAGE = 2

    try {
        const count = await User.find({username:{$regex:regex}}).countDocuments()
        const users = await User.find({username:{$regex:regex}}).lean().limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1))
        return {count,users}
    } catch (error) {
        console.log(error)
    }
}

export const fetchUser = async ( _id:String) => {
    const db = await connectToDatabase();
    try {
        const user = await User.findById(_id).lean()
        return user
    } catch (error) {
        console.log(error)
    }
}



export const fetchProduct = async (q: any,page: any) => {
    const db = await connectToDatabase();
    const regex = new RegExp(q,'i')

    const  ITEM_PER_PAGE = 2

    try {
        const count = await Product.find({title:{$regex:regex}}).countDocuments()
        const products = await Product.find({title:{$regex:regex}}).lean().limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1))
        return {count,products}
    } catch (error) {
        console.log(error)
    }
}


export const getProduct = async ( id:any) => {
    const db = await connectToDatabase();
    try {
        const product = await Product.findById(id).lean()
        return product
    } catch (error) {
        console.log(error)
    }
}