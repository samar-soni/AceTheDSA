import express from 'express';
import cors from 'cors';


//app config
const app = express();
import {connectDB} from './config/db.js';
import userRouter from './routes/userRoute.js';
import markQuestionRouter from './routes/markQuestionRoute.js';
import deleteQuestionRouter from './routes/deleteQuestionRoute.js';

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World! Samar Soni');
});

app.use('/api/user',userRouter);
// app.use('/api/user',markQuestionRouter);
app.use('/api/user', markQuestionRouter);
app.use('/api/user',deleteQuestionRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
