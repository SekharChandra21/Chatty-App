import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        profilePic: {
            type: String,
            default: "/avatar.png",
        },
    },
{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
// Compare this snippet from backend/src/models/user.model.js: