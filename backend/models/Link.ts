import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LinkSchema = new Schema( {
    originalUrl : {
        type: String,
        required: true
    },
    shortUrl: String
});

const Link = mongoose.model('Links', LinkSchema);
export default Link;