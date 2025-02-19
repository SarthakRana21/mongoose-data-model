import mongoose from "mongoose";

interface IDoctor {
    name: string,
    salary: string,
    qualification: string,
    worksInHostpitals: mongoose.Schema.Types.ObjectId[];
}

const doctorSchema = new mongoose.Schema<IDoctor>({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    worksInHostpitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    ]
}, {timestamps: true})

export const Doctor = mongoose.model('Doctor', doctorSchema)