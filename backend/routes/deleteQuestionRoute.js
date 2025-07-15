import express from "express";
import deleteQuestion from "../controllers/deleteQuestionController.js";

const deleteQuestionRouter = express.Router();

deleteQuestionRouter.delete("/revision/:id",deleteQuestion);

export default deleteQuestionRouter;
