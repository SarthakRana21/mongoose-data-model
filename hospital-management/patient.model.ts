import mongoose from "mongoose";

enum Gender {
    M = "M",
    F = "F",
    O = "O"
}

interface IPatient {
    name: String,
    diagnosedWith: String,
    address: String,
    age: Number,
    bloodGroup: Number,
    gender: Gender,
    admittedIn: mongoose.Schema.Types.ObjectId 
}

const patientSchema = new mongoose.Schema<IPatient>({
    name: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        requried: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: Object.values(Gender),
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hostpital'
    }
}, {timestamps: true})

export const Patient = mongoose.model('Patient', patientSchema)