import mongoose, { mongo } from "mongoose";

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
        type: Map,       //using Map type is efficient as it sets the user to true who like the post
        of: Boolean
    },
    comment: {
        type: Array,
        default: []
    },
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;