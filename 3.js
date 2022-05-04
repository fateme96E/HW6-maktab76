user = {
    id: 6,
    name: "Hossien",
    lastName: "Zenderoh",
    roles: ["student", "admin"],
    age: 19,
    scores: {
        english: 10,
        math: 19.5,
        physics: 14,
    },
};
function addCourseScore(newCourse, newScore) {
    user.scores[newCourse] = newScore;
    return user;
}

function addNewRole(newRole) {
    user.roles.push(newRole);
    if (user.age < 18){
        user.status = "very young";
    }
    return user;
}
function addFatherName(fatherName) {
    let toArr = Object.entries(user);
    toArr.push(['fatherName', fatherName]);
    user = Object.fromEntries(toArr);
    return user;
}

user = addCourseScore("history", 14);
console.log(user);

user = addNewRole("teacher");
console.log(user);

user = addFatherName('ali')
console.log(user);

