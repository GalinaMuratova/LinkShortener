import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LinkSchema = new Schema( {
    originalUrl : {
        type: String,
        required: true
    }
});

const Link = mongoose.model('Links', LinkSchema);
export default Link;