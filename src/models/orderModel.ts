import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    totalPrice: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
  });


const Order = mongoose.models.orders || mongoose.model("orders", orderSchema);

export default Order;