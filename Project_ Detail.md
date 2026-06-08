# Skill Gap Analyzer

## Project Title

Skill Gap Analyzer for Students

## Problem Statement

In today’s competitive world, students need the right technical and professional skills to achieve their career goals. However, many students are not aware of the difference between the skills they currently possess and the skills required for a particular career or job role. Because of this, students may face difficulties during placements, internships, and interviews. There is a need for a system that can analyze student skills, compare them with industry requirements, and identify missing skills. This project helps students understand their weaknesses and improve their skills in the correct direction.

---

## Project Objective

The main objective of this project is to develop a system that analyzes the skills of students and identifies the gap between their current skills and the skills required for a selected career or job role. The project helps students improve their career readiness by providing suggestions and recommendations for skill development. It also helps students identify their strengths and weaknesses in a simple and effective manner.

---

# Model List

## 1. Student Model

The Student Model is used to store the details of students such as student ID, student name, department, year, email, and current skills. This model acts as the primary source of information for analyzing student abilities and comparing them with required career skills.

## 2. Career Model

The Career Model stores information about different career domains or job roles. It contains details such as career name, required skills, and career description. This model helps the system understand industry expectations and requirements.

## 3. Skill Gap Model

The Skill Gap Model is responsible for storing the comparison results between student skills and required career skills. It identifies matching skills, missing skills, and recommendations for improvement. This model is the core component of the project.

---

# Table List

## 1. Students Table

| Column Name  | Data Type | Description                     |
| ------------ | --------- | ------------------------------- |
| student_id   | INT       | Unique ID for each student      |
| student_name | VARCHAR   | Name of the student             |
| department   | VARCHAR   | Department of the student       |
| year         | INT       | Academic year of the student    |
| email        | VARCHAR   | Email address of the student    |
| skills       | TEXT      | Skills possessed by the student |

### Explanation

The Students table stores all information related to students. It contains personal details, academic information, and the skills possessed by the student. This table helps in managing and analyzing student data efficiently.

---

## 2. Careers Table

| Column Name     | Data Type | Description                    |
| --------------- | --------- | ------------------------------ |
| career_id       | INT       | Unique ID for each career      |
| career_name     | VARCHAR   | Name of the career/job role    |
| required_skills | TEXT      | Skills required for the career |
| description     | TEXT      | Details about the career       |

### Explanation

The Careers table stores information about various careers and job roles. It contains the required skills for each career, which helps the system compare student skills with industry expectations and requirements.

---

## 3. Skill_Gap Table

| Column Name     | Data Type | Description                      |
| --------------- | --------- | -------------------------------- |
| gap_id          | INT       | Unique ID for skill gap analysis |
| student_id      | INT       | Reference ID of the student      |
| career_id       | INT       | Reference ID of the career       |
| matching_skills | TEXT      | Skills already available         |
| missing_skills  | TEXT      | Skills that are missing          |
| recommendation  | TEXT      | Suggested improvements           |

### Explanation

The Skill_Gap table stores the comparison results after analyzing student skills and required career skills. It identifies the missing skills and provides recommendations to help students improve and become industry-ready professionals.

---

# Working of the Project

The project works by collecting the skills entered by students and storing them in the database. The student can then select a desired career or job role. The system compares the student’s current skills with the required skills for the selected career. After comparison, the system identifies the missing skills and displays recommendations for improvement. This process helps students prepare effectively for placements and future career opportunities.

---

# Technologies Used

## Front End

* HTML
* CSS
* JavaScript

## Back End

* Python / Node.js

## Database

* MySQL

---

# Expected Outcome

The Skill Gap Analyzer helps students clearly understand their current skill level and identify the skills needed for their desired career. It improves career planning, placement preparation, and self-learning. The system acts as a guide for students to enhance their knowledge and become industry-ready professionals.



