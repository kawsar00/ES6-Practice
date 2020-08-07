//destruction of object
const person = {name: "kawsar", age: 22, id:94225, phone:01710303030, job: "bekar"};

//general rules
const phone = person.phone;
const job = person.job;
console.log(phone, job);

//destruction rules
const {name, id, age} = person
console.log(id, age, name);

//complex object destruction
const complexObject = {
  name: "avb",
  info: {
    address: "kolmitola",
    leader: "tiger leader"
  }
}

const {leader} = complexObject.info
console.log(leader);

//destruction of array
const friends = ['shakib', 'rakib', 'akib', 'abir', 'salman'];
// const [chotoFriend, bestFriend] = friends;
const [chotoFriend, ...olderF] = friends;

// console.log(chotoFriend, bestFriend);
console.log(chotoFriend, olderF);
