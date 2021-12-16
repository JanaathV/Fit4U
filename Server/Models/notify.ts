import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NotifySchema = new Schema
({
    EmailAddress: String
},
{
    collection: "contacts"
});

const Model = mongoose.model("Notify", NotifySchema);
export default Model;