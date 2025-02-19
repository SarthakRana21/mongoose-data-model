import mongoose from "mongoose";

interface ICategory extends mongoose.Document {
    name: string
}

const categorySchema = new mongoose.Schema<ICategory>({
    name: {
        type: String,
        required: true
    }
}, {timestamps: true}) 

export const Category = mongoose.model('Category', categorySchema)