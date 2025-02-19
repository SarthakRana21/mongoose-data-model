import mongoose from "mongoose";

interface IMedicalRecord {
    patient: mongoose.Schema.Types.ObjectId,
    diagonisedWith: String[],
    doctor: mongoose.Schema.Types.ObjectId[],
    admitted: boolean,
    hospital: mongoose.Schema.Types.ObjectId[]
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
    doctor: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true}
    ],
    admitted: {
        type: Boolean,
        required: true
    },
    hospital: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true}
    ]
}, {timestamps: true})

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema)