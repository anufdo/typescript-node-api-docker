import express from "express";
import mongoose from "mongoose";
import { mongoURI, port } from "./db/db";

const app = express();

// MongoDB connection
mongoose
  .connect(mongoURI) // Remove useNewUrlParser and useUnifiedTopology
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
