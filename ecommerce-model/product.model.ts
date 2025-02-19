import mongoose, { Types } from "mongoose";

interface IProduct extends mongoose.Document {
    name: string,
    description: string,
    price: number,
    stock: number,
    category: mongoose.Schema.Types.ObjectId,
    owner: mongoose.Schema.Types.ObjectId
}

const productSchema = new mongoose.Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, {timestamps: true})

export const Product = mongoose.model('Product', productSchema)