import express from 'express';
import User from '../models/User';

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })

        if (!user) {
            res.status(400).json({ message: 'Invalid username or password' });
        }

        else {
            const isPasswordMatch = await user.comparePassword(password);

            if (isPasswordMatch) {
                // If the password matches, you can generate a JWT or any other session-based authentication method
                // For simplicity, let's assume the login is successful
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(400).json({ message: 'Invalid password' }); // Password doesn't match
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default loginRouter;