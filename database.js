const sqlite3 = require("sqlite3").verbose();

// Create / Open Database
const db = new sqlite3.Database("skillgap.db", (err) => {
    if (err) {
        console.log("Database Connection Error:", err.message);
    } else {
        console.log("Connected to SQLite Database");
    }
});

// Create Student Table
db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            department TEXT NOT NULL,
            currentSkills TEXT NOT NULL,
            requiredSkills TEXT NOT NULL,
            gapPercentage TEXT
        )
    `);

});

// Save Student Details
function saveStudent(name, department, currentSkills, requiredSkills, gapPercentage) {

    db.run(
        `INSERT INTO students
        (name, department, currentSkills, requiredSkills, gapPercentage)
        VALUES (?, ?, ?, ?, ?)`,
        [name, department, currentSkills, requiredSkills, gapPercentage],
        (err) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Student Data Saved Successfully");
            }
        }
    );

}

// View All Students
function getStudents(callback) {

    db.all("SELECT * FROM students", [], (err, rows) => {
        if (err) {
            console.log(err.message);
        } else {
            callback(rows);
        }
    });

}

module.exports = {
    db,
    saveStudent,
    getStudents
};
