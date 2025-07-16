const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');

// @desc Register user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (await User.findOne({ email })) 
      return res.status(400).json({ error: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role });
    res.status(201).json({ message:'Registered', userId: user._id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// @desc Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) 
      return res.status(404).json({ error: 'User not found' });

    if (!await bcrypt.compare(password, user.password))
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.json({ message:'Logged in', token });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
