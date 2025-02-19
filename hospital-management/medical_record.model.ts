import mongoose from "mongoose";

interface IMedicalRecord {
    patient: mongoose.Schema.Types.ObjectId,
    diagonisedWith: string[],
    doctors: mongoose.Schema.Types.ObjectId[],
    admitted: boolean,
    hospitals: mongoose.Schema.Types.ObjectId[]
}

const medicalRecordSchema = new mongoose.Schema<IMedicalRecord>({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    diagonisedWith: [
        {type: String, required: true}
    ],
    doctors: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true}
    ],
    admitted: {
        type: Boolean,
        required: true
    },
    hospitals: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true}
    ]
}, {timestamps: true})

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)