var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function boboland() {
    alert("You are in boboland!");
    return "asdf";
}
var user = new Student("Jane", "M.", "User");
// query selector
document.querySelectorAll(".myheader").forEach(function (el) { return el.innerHTML = "asdf"; });
// document.body.innerHTML = greeter(user);
