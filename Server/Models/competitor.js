"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const CompetitorItemSchema = new Schema({
    comp_Tournament_Id: String,
    status: Boolean,
    fullname: String,
    description: String
}, {
    collection: "competitor"
});
const Model = mongoose_1.default.model("Competitor", CompetitorItemSchema);
exports.default = Model;
//# sourceMappingURL=competitor.js.map