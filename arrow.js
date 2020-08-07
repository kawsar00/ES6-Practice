//normal rules
// function doubleIt(num) {
//   return num * 2;
// }

// function declaration using variable expression
// const doubleIt = function myFunc(num) {
//   return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);


//easier way using ES6 arrow function

//for zero parameter
const give5 = () => 5;
const result = give5();
console.log(result);

//for single parameter
const doubleIt = num => num * 2; //it returns automatically
const result1 = doubleIt(10);
console.log(result1);

//for more than one parameter
const add = (x, y) => x + y; //it returns automatically
const result2 = add(4, 7);
console.log(result2);

//for calculate lots of function
const doMath = (x, y) =>{
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result // need to call manually return
}
const result3 = doMath(7, 5);
console.log(result3);


