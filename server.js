const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Login Page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

// Register Page
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
});

// Dashboard Page
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "dashboard.html"));
});

// Result Page
app.get("/result", (req, res) => {
    res.sendFile(path.join(__dirname, "result.html"));
});

// Skill Analysis API
app.post("/analyze", (req, res) => {

    const currentSkills = req.body.currentSkills
        .split(",")
        .map(skill => skill.trim().toLowerCase());

    const requiredSkills = req.body.requiredSkills
        .split(",")
        .map(skill => skill.trim().toLowerCase());

    const matched = requiredSkills.filter(skill =>
        currentSkills.includes(skill)
    );

    const missing = requiredSkills.filter(skill =>
        !currentSkills.includes(skill)
    );

    const gapPercentage =
        ((missing.length / requiredSkills.length) * 100).toFixed(2);

    res.json({
        matchedSkills: matched,
        missingSkills: missing,
        gapPercentage: gapPercentage + "%"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
