import express from "express";

import revisionQuestionModel from "../models/revisionQuestions.js";

const getAllMarkedQuestions = async (req, res) => {
  try {
    const questions = await revisionQuestionModel.find();
    res.status(200).json(questions);
  } catch (err) {
    console.error('Error fetching questions:', err);
    res.status(500).json({ message: 'Failed to fetch revision questions' });
  }
};

export { getAllMarkedQuestions };