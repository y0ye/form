import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

import userRouter from './routes/userRouter';
import loginRouter from './routes/loginRouter';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

mongoose.connect(process.env.MONGO_URI!)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('/users', userRouter);
app.use('/users/login', loginRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})