const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`✅ Server Running on port ${PORT}`));

// Serve static frontend files correctly
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// ------------------- EMAIL CONFIGURATION -------------------
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Gmail address
    pass: process.env.EMAIL_PASS, // App password
  },
});

// Verify email configuration
contactEmail.verify((error) => {
  if (error) {
    console.log("❌ Error with email configuration:", error);
  } else {
    console.log("✅ Ready to Send Emails");
  }
});

// Handle contact form submission
router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, message, phone } = req.body;
    const name = `${firstName} ${lastName}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Receiver email
      subject: "New Contact Form Submission",
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await contactEmail.sendMail(mailOptions);
    res.status(200).json({ code: 200, status: "Message Sent Successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ code: 500, status: "Error sending message", error });
  }
});

