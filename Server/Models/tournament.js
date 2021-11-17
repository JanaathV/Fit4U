"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const TournamentItemSchema = new Schema({
    tournamentName: String,
    tournament_Custom_Id: Number,
    numberOfCompetitors: Number,
    status: Boolean,
    type: String,
    description: String,
    champion: String
}, {
    collection: "tournament"
});
const Model = mongoose_1.default.model("Tournament", TournamentItemSchema);
exports.default = Model;
//# sourceMappingURL=tournament.js.map