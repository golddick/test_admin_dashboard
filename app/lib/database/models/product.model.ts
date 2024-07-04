import mongoose, { Schema, model, Document, models } from "mongoose";


export interface IProduct extends Document {
    _id: string;
    title: string;
    desc: string;
    img: string;
    price:Number;
    stock:Number;
    cat: string;
    color: string;
    size: string;
}

const productSchema = new Schema<IProduct>({
    title:{
        type:String,
        required:true,
        unique:true,
        min:2,
    },
    desc:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:0,
    },
    stock:{
        type:Number,
        required:true,
        min:0,
    },
    img:{
        type:String,
    },
    cat:{
        type:String,
    }, 
    color:{
        type:String,
    },
    size:{
        type:String
    }
    
},
{timestamps:true});

const product = models.Product || model<IProduct>('Product', productSchema)


export default product;
