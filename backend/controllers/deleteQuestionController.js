import express from "express";
import revisionQuestionModel from "../models/revisionQuestions.js";

const deleteQuestion = async (req, res) => {
    try{
        const title = req.params.id;
        if (!title) {
            return res.status(400).json({ message: "title is required" });
        }
        const deletedQuestion = await revisionQuestionModel.findOneAndDelete({ "title":title });
        if(!deletedQuestion) {
            return res.status(404).json({ message: "Question not found" });
        }
        return res.status(200).json({message: "Question deleted Successfully"});
    
    }catch (error) {
        console.error("Error deleting question:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
    

};


export default deleteQuestion;
