import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number
    }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
