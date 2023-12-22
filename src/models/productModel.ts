import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    imageUrl: String,
    os: {
        type: String,
        enum: ['Android', 'iOS'], 
    },
});


const Product = mongoose.models?.products || mongoose.model("products", productSchema);

export default Product;