//creating an object
let objec = {
    firstname : 'Richard',
    lastname : 10,
    age :12
}
//changing object properties
objec.firstname = "pirlo"
//adding new property
objec.age = 24;
//delete
delete objec.lastname;
console.log(objec);
//check if it is there
console.log('lastname' in objec);
//Constructor funnction always start with capital letter

function Person (firstname, lastname){
    this.firstname = firstname
    this.lastname = lastname;

    this.fullname = function(){
        return this.firstname + ' '+ this.lastname
    }  
}

var person1 = new Person('richard', 'musime');
var person2 = new Person('pirlo', 'gang')

console.log(person1.fullname());
console.log(person2.fullname());

// accessing single property

function Persons(firstName, lastName) {
    

    this.firstName = firstName;
    this.lastName = lastName;
}

let person = new Persons("John", "Doe");

console.log(person.firstName);