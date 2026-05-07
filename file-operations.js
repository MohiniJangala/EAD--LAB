// Experiment 2: File System Operations

// Import the built-in File System module.
const fs = require("fs");

// Student details that will be written into the file.
const studentDetails = "Name: Mohini\nRoll No: 101\nDepartment: IT\n";

// Create a file and write student details into it.
fs.writeFileSync("data.txt", studentDetails);
console.log("File created successfully");

// Read the content from the file.
const fileContent = fs.readFileSync("data.txt", "utf8");

console.log("File Content:");
console.log(fileContent);

// Append new data asynchronously.
fs.appendFile("data.txt", "\nMarks: 95", (error) => {
    if (error) {
        console.log("Error while appending data");
        return;
    }

    console.log("Data appended successfully");
});
