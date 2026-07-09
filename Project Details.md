[8:57 pm, 09/07/2026] ~ʜᴀʀɪɴɪ🧿: # Project Title
Skill Gap Analyser

## Problem Statement
Students often do not know whether they possess the required skills for a particular job role. This project analyzes the student's skills and identifies the missing skills.

## Objectives
- Compare existing skills with required skills.
- Calculate skill gap percentage.
- Recommend missing skills.
- Help students prepare for placements.

## Modules
1. Login
2. Registration
3. Skill Analysis
4. Dashboard
5. Report Generation

## Software Requirements
- VS Code
- Node.js
- GitHub

## Hardware Requirements
- Laptop
- Internet Connection

## Conclusion
The project helps students identify and improve missing skills for better placement opportunities.
[9:04 pm, 09/07/2026] ~ʜᴀʀɪɴɪ🧿: <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Skill Gap Analyser</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<div class="container">
<h1>Skill Gap Analyser</h1>

<form id="skillForm">

<label>Student Name</label>
<input type="text" id="name" placeholder="Enter Name" required>

<label>Department</label>
<input type="text" id="dept" placeholder="Enter Department" required>

<label>Your Skills</label>
<input type="text" id="skills" placeholder="Example: HTML,CSS,Python" required>

<label>Required Skills</label>
<input type="text" id="required" placeholder="Example: HTML,CSS,Python,JavaScript" required>

<button type="submit">Analyse Skills</button>

</form>

<div id="result"></div>

</div>

<script src="script.js"></script>

</body>
</html>
