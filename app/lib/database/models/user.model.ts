import mongoose, { Schema, model, Document, models } from "mongoose";


export interface IUser extends Document {
    _id: string;
    email: string;
    username: string;
    img: string;
    isAdmin:Boolean;
    isActive:Boolean;
    phone: string;
    address: string;
    password: string;
}

const UserSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true ,min:3, max:20},
    password: { type: String, required: true },
    img: { type: String, },
    phone: { type: String, },
    address: { type: String, },
    isAdmin:{type:Boolean, default:false},
    isActive:{type:Boolean, default:false},
    
},
{timestamps:true});

const User = models.User || model('User', UserSchema)


export default User;
