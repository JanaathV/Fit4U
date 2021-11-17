"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ClothingItemSchema = new Schema({
    name: String,
    brand: String,
    category: String,
    colour: String,
    size: String,
    price: Number
}, {
    collection: "clothing"
});
const Model = mongoose_1.default.model("Clothing", ClothingItemSchema);
exports.default = Model;
//# sourceMappingURL=clothing.js.map