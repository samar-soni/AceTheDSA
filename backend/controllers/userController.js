import userModel from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import dotenv from "dotenv";
dotenv.config();




const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }
        const role = user.role || "user"; // Default to 'user' if role is not set
        const token = createToken(user._id);
        res.json({success: true,token}); 
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: "Server error"});
    }

}

//ab token create karne ka function
const createToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};


//register user

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "User already exists" });
        }
        if(!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        if(password.length < 8){
            return res.status(400).json({ message: "Password must be at least 8 characters long" });
        }
        //ab hash and salt krna hai
        const saltValue = parseInt(process.env.SALT) || 10; // Default to 10 if not set in .env
        const salt = await bcrypt.genSalt(saltValue);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({ name, email, password:hashedPassword });
        await newUser.save();  
        
        // const createToken = (userId) => {
        //     return jwt.sign({ id: userId }, "samar", { expiresIn: '1h' });
        // };
        const role = newUser.role || "user"; // Default to 'user' if role is not set
        const token = createToken(newUser._id);
        res.status(201).json({ success: true, token });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }   
}

export { loginUser, registerUser };
