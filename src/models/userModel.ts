import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId, ref:"Orders"
        }
    ]
    
    
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;