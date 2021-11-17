//      File Name: tournament.ts
//      Author: Web Wiz
//      Group Number: 1
//      Date: July 13, 2021
//

import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the mongoose schema

const TournamentItemSchema = new Schema
    ({
        tournamentName: String,
        tournament_Custom_Id: Number,
        numberOfCompetitors: Number,
        status: Boolean,
        type: String,
        description: String,
        champion: String
},
{
    collection: "tournament"
});

const Model = mongoose.model("Tournament", TournamentItemSchema);
export default Model;