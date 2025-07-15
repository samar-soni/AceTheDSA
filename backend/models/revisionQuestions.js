import mongoose from "mongoose";

const revisionQuestionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    difficulty: { type: String, required: true },
    link: { type: String, required: true }
});


const revisionQuestionModel = mongoose.model("revisionQuestion", revisionQuestionSchema) || mongoose.model.revisionQuestion;

export default revisionQuestionModel;
