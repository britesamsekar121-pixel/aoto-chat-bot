require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB().catch(err => {
  console.error("Database connection error:", err);
  process.exit(1);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Running");
});

// API Routes
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api", recommendationRoutes);

// Test Route
app.get("/api/test", (req, res) => {
  res.json({
    message: "API Working"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});