import mongoose from "mongoose";

interface IHospital {
    name: string,
    addressLine1: string,
    addressLine2?: string,
    city: string,
    postalCode: string ,
    specializedIn: string[]
}

const hospitalSchema = new mongoose.Schema<IHospital>({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    specializedIn: [
        {
            type: String,
        }
    ]
}, {timestamps: true})

export const Hospital = mongoose.model('Hospital', hospitalSchema)