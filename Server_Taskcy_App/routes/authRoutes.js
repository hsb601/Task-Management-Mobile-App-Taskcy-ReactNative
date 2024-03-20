const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

router.post('/signup', async (req, res) => {
    console.log('client request:', req.body);
    const { name, email, password, dob } = req.body;

    try {
        if (!email || !password || !name || !dob) {
            return res.status(422).send({ error: "Please fill all the fields" });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(422).send({ error: "User with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            dob

        });

        await user.save();
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.send({ token });
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).send({ error: 'Internal server error' });
    }

});

router.post('/signin', async (req,res)=>{
const {email,password} = req.body;
if (!email || !password) {

return res.status(422).json({error: "Please add email or password"});
}
const savedUser = await User.findOne({email: email})

if(!savedUser){
return res.status(422).json({ error: "Invalid Credentials"});
}

 try{
 bcrypt.compare(password, savedUser.password, (err,result) => {
 if(result){
console.log("password matched");
const token = jwt.sign({ _id: savedUser._id}, process.env.JWT_SECRET);
res.send({ token});
 }
 else{
 console.log('Password does not match');
 return res.status(422).json({error: "Invalid Credentials"});
  }
 })
 }
 catch(err){
 console.log(err);
 }
})
module.exports = router;
