//      File Name: competitor.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the mongoose schema

const CompetitorItemSchema = new Schema
    ({
        comp_Tournament_Id: String,
        status: Boolean,
        fullname: String,
        description: String
},
{
    collection: "competitor"
});

const Model = mongoose.model("Competitor", CompetitorItemSchema);
export default Model;