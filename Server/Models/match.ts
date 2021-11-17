//      File Name: match.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the mongoose schema

const MatchItemSchema = new Schema
({
    matchNumber: String,
    competitor1Name: String,
    competitor2Name: String,
    winner: String
},
{
    collection: "match"
});

const Model = mongoose.model("Match", MatchItemSchema);
export default Model;