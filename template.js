const firstName = "Rahim"
const lastName = "Uddin"
const fullName = firstName + " " + lastName + " is a good boy"
console.log(fullName); //general rules

//using ES6 template to make it easier
const fullName2 = `${firstName} ${lastName} is a good boy`
console.log(fullName2); 

//we can calculate anything in ES6 template string
const fullName3 = `${firstName} ${20+30+50} is a good boy`
console.log(fullName3); 

//we can create multiple line using ES6 template
const multiLine = `I love you
I miss you
I need you
I can not ignore you`
console.log(multiLine); 

