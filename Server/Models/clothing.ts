import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the mongoose schema

const ClothingItemSchema = new Schema
({
    name: String,
    brand: String,
    category: String,
    colour: String,
    size: String,
    price: Number
},
{
    collection: "clothing"
});

const Model = mongoose.model("Clothing", ClothingItemSchema);
export default Model;