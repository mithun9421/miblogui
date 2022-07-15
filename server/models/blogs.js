const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    postId : {
        type : String,
        auto : true
    },
    postTitle : {
        type : String,
        required : true
    },
    post : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        required : true
    },
    updatedAt : {
        type : Date,
        required : true
    },
    likes : {
        type : Number,
    },
    comments : {
        type : [mongoose.Schema.Types.Mixed]
    }
});

const BlogModel = mongoose.model("blogs", BlogSchema);
module.exports = BlogModel;