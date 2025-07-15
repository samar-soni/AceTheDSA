import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    // revisionQuestions:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: 'revisionQuestion'
    // }]
     
});
const userModel = mongoose.model("User", userSchema) || mongoose.model.user;
export default userModel;