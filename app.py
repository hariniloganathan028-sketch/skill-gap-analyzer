from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

CAREER_REQUIREMENTS = {
    "Software Engineer": {"Python", "Java", "SQL", "Git"},
    "AI Engineer": {"Python", "SQL", "C++"},
    "Data Analyst": {"Python", "SQL"},
    "Data Scientist": {"Python", "SQL"},
    "Cloud Engineer": {"Python", "Git"},
    "Cyber Security Analyst": {"SQL", "Git", "C"},
    "Machine Learning Engineer": {"Python", "C++"},
    "Web Developer": {"HTML", "CSS", "JavaScript", "SQL", "Git"},
    "Android Developer": {"Java", "Git"},
    "UI/UX Designer": {"HTML", "CSS", "Communication"}
}

@app.route("/")
def home():
    # Page 10 - Fresh Blank Login Screen
    return render_template("login.html")

@app.route("/dashboard", methods=["POST", "GET"])
def dashboard():
    # Catching dynamic user details from login
    if request.method == "POST":
        student_name = request.form.get("username")
    else:
        student_name = "Guest Student"
        
    # Page 11 - Dashboard View with Career & Skills Checklist combined safely
    return render_template("dashboard.html", username=student_name)

@app.route("/result", methods=["POST"])
def result():
    # Page 12 & 13 - Core Analytical Result Generator
    career = request.form.get("career")
    student_name = request.form.get("username")
    student_skills = set(request.form.getlist("skills"))
    
    required_skills = CAREER_REQUIREMENTS.get(career, set())
    matching_skills = student_skills.intersection(required_skills)
    missing_skills = required_skills - student_skills
    
    if len(required_skills) > 0:
        match_percentage = int((len(matching_skills) / len(required_skills)) * 100)
    else:
        match_percentage = 0
        
    return render_template(
        "result.html",
        career=career,
        username=student_name,
        skills=list(student_skills),
        missing_skills=list(missing_skills),
        match_percentage=match_percentage
    )

if __name__ == '__main__':
    app.run(debug=True)
    app.run(host='0.0.0.0', port=5000, debug=True)