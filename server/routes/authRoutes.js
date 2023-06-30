const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json('User already exists');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if (!user) {
            return res.status(400).json('User does not exist');
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json('Invalid password');
        }

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET,{
            expiresIn: '1h'
        });
        res.status(200).json({token});

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;





