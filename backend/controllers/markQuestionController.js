import express from 'express';
import cors from 'cors';
import revisionQuestion from '../models/revisionQuestions.js';


const markQuestion = async (req, res) => {
    try {
        const { title, difficulty, link } = req.body;

        if (!title || !difficulty || !link) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingQuestion = await revisionQuestion.findOne({ link });
        if (existingQuestion) {
            return res.status(400).json({ message: "Question already marked for revision" });
        }
        const newQuestion = new revisionQuestion({ title, difficulty, link });
        await newQuestion.save();

        res.status(200).json({ message: "Question marked for revision successfully" });
    }
    catch (error) {
        console.error("Error marking question for revision:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

export { markQuestion }