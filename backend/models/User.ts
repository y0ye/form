import mongoose, { Document, CallbackError } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
    username: string;
    password: string;
    createdAt: Date;
    comparePassword: (candidatePassword: string) => Promise<boolean>; // Add the method type
}

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Hash the password before saving to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();  // Only hash if password is new or modified
    try {
        const salt = await bcrypt.genSalt(10);  // Generate a salt with 10 rounds
        this.password = await bcrypt.hash(this.password, salt);  // Hash the password
        next();  // Proceed with the save
    } catch (err) {
        next(err as CallbackError);  // Pass any errors to the next middleware
    }
});

// Add a method to compare the password for authentication
userSchema.methods.comparePassword = async function (candidatePassword: string) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;
