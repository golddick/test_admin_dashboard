import mongoose, { model, models } from 'mongoose'

// const userSchema = new mongoose.Schema({
//     username:{
//         type:String,
//         required:true,
//         unique:true,
//         min:3,
//         max:20,
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     password:{
//         type:String,
//         required:true,
//     },
//     img:{
//         type:String,
//     },
//     isAdmin: {
//         type:Boolean,
//         default:false
//     },
//     isActive:{
//         type:Boolean,
//         default:true
//     },
//     phone:{
//         type:String,
//     },
//     address:{
//         type:String
//     }
// },
// {timestamps:true}
// )



// const productSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true,
//         unique:true,
//         min:2,
//     },
//     desc:{
//         type:String,
//         required:true,
//     },
//     price:{
//         type:Number,
//         required:true,
//         min:0,
//     },
//     stock:{
//         type:Number,
//         required:true,
//         min:0,
//     },
//     img:{
//         type:String,
//     },
//     cat:{
//         type:String,
//     }, 
//     color:{
//         type:String,
//     },
//     size:{
//         type:String
//     }
// },
// {timestamps:true}
// )


// // export const User = models.User || model('User', userSchema)
// export const Product = models.Product || model('Product', productSchema)
// // export const Product = mongoose.model('product',productSchema)