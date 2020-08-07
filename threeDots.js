const ages = [10, 23, 16, 27]
const ages2 = [11, 23, 24, 19]
const ages3 = [29, 39, 66]

//general rules to add all array in one array
const allArray = ages.concat(ages2.concat([5]).concat(ages3));
console.log(allArray)

//ES6 three dots rules
const allAges = [...ages, ...ages2, 5, ...ages3];
console.log(allAges);


//to find max value 

//general formula
const businessman = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(businessman, minister, sochib);
console.log(maximum);

//using three dots of ES6 if there have a an arry containing those values
const allMoney = [650, 450, 250];
const maxValue = Math.max(...allMoney);
console.log(maxValue);


