function analyzeSkills() {

    let currentSkills = document
        .getElementById("currentSkills")
        .value
        .toLowerCase()
        .split(",");

    let requiredSkills = document
        .getElementById("requiredSkills")
        .value
        .toLowerCase()
        .split(",");

    currentSkills = currentSkills.map(skill => skill.trim());
    requiredSkills = requiredSkills.map(skill => skill.trim());

    let matched = [];
    let missing = [];

    for (let i = 0; i < requiredSkills.length; i++) {

        if (currentSkills.includes(requiredSkills[i])) {
            matched.push(requiredSkills[i]);
        } else {
            missing.push(requiredSkills[i]);
        }
    }

    let percentage = 0;

    if (requiredSkills.length > 0) {
        percentage = ((missing.length / requiredSkills.length) * 100).toFixed(2);
    }

    document.getElementById("matchedSkills").innerHTML =
        matched.length ? matched.join(", ") : "No Matching Skills";

    document.getElementById("missingSkills").innerHTML =
        missing.length ? missing.join(", ") : "No Missing Skills";

    document.getElementById("gapPercentage").innerHTML =
        percentage + "%";

    alert("Skill Analysis Completed Successfully!");
}
