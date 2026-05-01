'use strict';

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

// Slide 5
// Example use of callback functions
// List out the people in the array
// We have an array of [{}, {}, {}]
// We want an array of ["","",""]

// // All expect a callback function.
// array.map
// array.reduce
// array.filter
// array.foreach

// // // ex1 - transform using map where i pass in named function callback
// // function getNameStringFromPersonObj(personObj) {
// //     return personObj.name;
// // }
// // const nameArray = peopleArray.map(getNameStringFromPersonObj);
// // console.log(nameArray);

// // ex2 - transform using map where i pass in inline function callback
// const nameArray1 = peopleArray.map(function (personObj) {
//     return personObj.name
// });
// console.log(nameArray1);

// // ex3 - using 'for each' rather than map
// const nameArray2 = [];
// peopleArray.forEach(function(personObj, index) {
//     // nameArray2[index] = personObj.name;
//     nameArray2.push(personObj.name);
// });
// console.log(nameArray2)

// // ex4 - using 'for of' rather than map or for each'
// const nameArray3 = [];
// for (let personObj of peopleArray){

//     nameArray3.push(personObj.name);
// }
// console.log(nameArray3)

// // Example of reduce
// // Find the average height/weight ratio

// // Ex1: First remember, we can create an array using map of bmi
// const ratioArray = peopleArray.map(function (peopleObj) {
// const ratio = peopleObj.height/peopleObj.weight;
// return ratio;
// })
// console.log("bmi index array", ratioArray);

// // Ex2: Here's one way to do it. Get the total using 'reduce'
// // Then divide by the length of the array
// const ratioTotal = peopleArray.reduce(function (oldRunningTotal, peopleObj) {
//     console.log("oldTotal", oldRunningTotal);
//     const ratio = peopleObj.height / peopleObj.weight;
//     console.log("ratio", ratio);

//     const newRunningTotal = oldRunningTotal + ratio;
//     console.log("newTotal", newRunningTotal);
//     return newRunningTotal;
// }, 0)
// console.log(ratioTotal);
// console.log("Here's the average BMI: ", ratioTotal/peopleArray.length)

// // Ex3: Here's the way to return the avg from within the reduce method using the 
// // other extra params
// const ratioAvg = peopleArray.reduce(function (oldRunningTotal, peopleObj, idx, array) {
//     console.log("oldTotal", oldRunningTotal);
//     const ratio = peopleObj.height / peopleObj.weight;
//     console.log("ratio", ratio);

//     const newAvgRatio= oldRunningTotal + ratio/array.length;
//     console.log("newAvg", newAvgRatio);
//     return newAvgRatio;
// }, 0)
// console.log("Here's the average BMI: ", ratioAvg);


// //Event l 
// // End of Slide 5

// // // Slide 9 - Arrow functions

//  //normal function declaration
// const foo = function(params) {
//     return 'foo '+params;
//   }

//   console.log(foo("world"));

//   //arrow arrow declaration
// const foo1 = (params) => {
//     return 'foo '+params;
//   }
//   console.log(foo1("Fred"));

//   //normal concise arrow declaration
//   const foo2 = (params) =>  'foo '+params;
  
//   console.log(foo2("Wilma"));
  
// const foo3 = param => {console.log("param")}

// console.log(foo3("Barney"));


//   // Slide 13
//   //destructuring arrays
// const myArray = [1, 2, 3, 5];
// const [y, x, z, w, d] = myArray; //myArray elements to `x`, `y`, `z`
// console.log("x:", x); //=> 1;
// console.log("y:", y); //=> 2;
// console.log("z:", z); //=> 3;
// console.log("w:", w); //=> 5;
// console.log("d:", d); //=> undefined;

// //destructuring objects
// const myObject = {a: "dude", b: "surf", c: "hey"};
// const {b, a, c, d} = myObject; //myObject.a to a, etc.
// console.log("a:", a); //=> "dude";
// console.log("b:", b); //=> "surf";
// console.log("c:", c); //=> "hey";
// console.log("d:", d); //=> undefined

// Slide 14
// // 2 Examples of the reduce method using the destructuring as well

// // Example 1: Here's the way to return the avg from within the reduce method using the other extra params
// // and demonstrating destructuring from the people peopleObj
// const ratioAvg = peopleArray.reduce(function (oldRunningTotal, peopleObj, idx, array) {

//     const {height, weight} = peopleObj; //destructuring

//     const ratio = height / weight;

//     const newAvgRatio= oldRunningTotal + ratio/array.length;

//     return newAvgRatio;
// }, 0)
// console.log(ratioAvg);

// // Example 2 : But I can destructure in the argument list instead
// const ratioAvg = peopleArray.reduce(function (oldRunningTotal, {height, weight}, idx, array) {

//     // const {height, weight} = peopleObj;

//     const ratio = height / weight;

//     const newAvgRatio= oldRunningTotal + ratio/array.length;

//     return newAvgRatio;
// }, 0)
// console.log(ratioAvg);


// // Slide 16
// //Spread with an array
// const dimensions = [10, 20, 30, 40];
// //extra values are "spread" into destructuring slots
// const [width, height, ...rest] = dimensions 
// console.log(width);  //=> 10
// console.log(height); //=> 20
// console.log("rest:", rest);   //=> [30, 40]; the rest of the values!
// console.log("rest[1]:", rest[1]);

//Spread with an object
const person = {name: 'Ada', height: 64, weight: 135}
// console.log("person:", person);
// const copyOfPerson = {...person}; //clone an object!
// console.log("copyOfPerson:", copyOfPerson);

// console.log("person === copyOfPerson:", person === copyOfPerson); //false! different objects!

// //all off the properties are "spread" into the new object
// const personWithHat = {hat: 'baseball', ...person}
// console.log("person:", person); //has name, height, weight
// console.log("personWithHat:", personWithHat); //has name, height, weight, hat

const tallerAda = {height: 74, ...person};
console.log("tallerAda:", tallerAda);

 

// //Slide 17
// //a function that adds up all the arguments (no matter how many!)
// function sum(...numbers) {
//     //all arguments are gathered in the `numbers` array

//     //numbers is an array, so we can `reduce()` it!
//     let total = numbers.reduce((runningTotal, num) => {
//         return runningTotal + num; //new total
//     }, 0); //start at 0

//     return total;

//     // //or as one line with a concise arrow function:
//     // return numbers.reduce((total, n) => total+n);
// }

// function sum1(...numbers) { return numbers.reduce((total, n) => total + n); }

// console.log(sum(3, 4, 3)); // => 10
// console.log(sum(10, 20, 30, 40)); // => 100
// console.log(sum1(3, 4, 3)); // => 10
