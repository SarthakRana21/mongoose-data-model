import mongoose from "mongoose";

enum Status {
    PENDING = "PENDING",
    CANCELLED = "CANCELLED",
    DELIVERED = "DELIVERED"
}

interface IOrderItemSchema extends mongoose.Document{
    productId: mongoose.Schema.Types.ObjectId,
    quantity: number
}

interface IOrder extends mongoose.Document{
    orderPrice: number,
    customer: mongoose.Schema.Types.ObjectId,
    orderItems: IOrderItemSchema[],
    address: string,
    status: Status
}


const orderItemSchema = new mongoose.Schema<IOrderItemSchema>({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema<IOrder>({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems: [orderItemSchema],
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: Object.values(Status),
        default: Status.PENDING
    }
}, {timestamps: true})

export const Order = mongoose.model('Order', orderSchema)