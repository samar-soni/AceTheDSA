import express from 'express';
import { markQuestion } from '../controllers/markQuestionController.js';
import { getAllMarkedQuestions } from '../controllers/getAllMarkedQuestionController.js';


const markQuestionRouter = express.Router();    
markQuestionRouter.post("/markQuestion",markQuestion);
markQuestionRouter.get("/revision", getAllMarkedQuestions);



export default markQuestionRouter;