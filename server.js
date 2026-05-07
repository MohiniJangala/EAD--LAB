// Experiment 6: MongoDB Integration with Express.js

// Import required packages.
const express = require("express");
const mongoose = require("mongoose");

// Create an Express application.
const app = express();

// Middleware to read JSON data.
app.use(express.json());

// Connect Express application with MongoDB database.
mongoose
    .connect("mongodb://127.0.0.1:27017/studentDB")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });

// Create student schema.
const studentSchema = new mongoose.Schema({
    name: String,
    rollNumber: String,
    department: String,
    marks: Number
});

// Create student model.
const Student = mongoose.model("Student", studentSchema);

// GET method: display all students.
app.get("/students", async (request, response) => {
    const students = await Student.find();

    response.json(students);
});

// POST method: add a new student.
app.post("/students", async (request, response) => {
    const student = new Student(request.body);

    await student.save();

    response.json({
        message: "Student added successfully"
    });
});

// PUT method: update student by MongoDB id.
app.put("/students/:id", async (request, response) => {
    await Student.findByIdAndUpdate(request.params.id, request.body);

    response.json({
        message: "Student updated successfully"
    });
});

// DELETE method: delete student by MongoDB id.
app.delete("/students/:id", async (request, response) => {
    await Student.findByIdAndDelete(request.params.id);

    response.json({
        message: "Student deleted successfully"
    });
});

// Start the server.
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
