const Signup = require("../models/signup");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

exports.signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingUser = await Signup.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

    const newUser = new Signup({ name, email, password });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Or another service
      auth: {
        user: process.env.GMAIL, // Your email
        pass: process.env.APP_KEY, // Your email password or app-specific password
      },
    });

    // Welcome email content
    const mailOptions = {
        from: '"Tripx" <gaba23304@gmail.com>',// Sender address
      to: email, // Receiver address
      subject: "Welcome to Tripx!",
      html: `
        <h1>Hello ${name},</h1>
        <p>Welcome to <b>Tripx</b>! We're thrilled to have you on board.</p>
        <p>Explore amazing destinations and plan your dream trips with us.</p>
        <p>Cheers,</p>
        <p>The Tripx Team</p>
      `,
    };

    try {
        //await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        return res.status(500).json({ error: "Failed to send welcome email" });
      }
    // Respond to the client
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Error in signupUser:", error);
    res.status(500).json({ error: "Error registering user" });
  }
};
