//normal function calling
function add(num1, num2) {
  return num1 + num2;
}
const total = add(15, 17);
console.log(total);

//in this function calling, if we forget to set a parameter value like num2, the result will show an error. so, we found this solution in ES6. we can use a default parameter value.
 function add(num1, num2 = 20) {
  return num1 + num2;
 }
const result = add(15);
console.log(result);

//if we set value of num2 that have default value, then it will ignore default value
function add(num1, num2 = 20) {
  return num1 + num2;
 }
const result1 = add(15, 2);
console.log(result1);
