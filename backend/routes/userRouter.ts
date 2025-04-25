import express from 'express';
import User from '../models/User';

const userRouter = express.Router();

userRouter.get('/:userID', async (req, res) => {

});
userRouter.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating user' });
    }
});
userRouter.put('/:userID', async (req, res) => { });
userRouter.delete('/:userID', async (req, res) => { });

export default userRouter;