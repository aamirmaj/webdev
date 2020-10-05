class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " +  person.firstName + " " + person.lastName;
}

function boboland(){
	alert("You are in boboland!");
	return "asdf";
}

var user =  new Student("Jane", "M.", "User");

// query selector
document.querySelectorAll(".myheader").forEach(el=>el.innerHTML="asdf");


// document.body.innerHTML = greeter(user);
