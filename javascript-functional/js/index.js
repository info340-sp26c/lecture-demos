'use strict';


// // review from last lecture (stuff i didn't talk much about)
// // review - Accessing object properties with bracket notation
// const person = {
//   firstName: 'Alice',
//   lastName: 'Wong',
//   age: 40,
//   favorites: {
//     music: 'jazz',
//     food: 'pizza',
//     numbers: [12, 42]
//   }
// };

// const name = person['firstName']; //get value of 'firstName' key
// person['lastName'] = 'Jones'; //set value of 'lastName' key
// console.log(person['firstName']+' '+person['lastName']); //"Alice Jones"

// const chosenValue = "food" //e.g., from user input
// const favFood = person['favorites'][chosenValue]; //object in the object
//                 //object           //value

// const firstNumber = person['favorites']['numbers'][0]; //12
// person['favorites']['numbers'].push(7); //push 7 onto the Array

// // review - Accessing object properties with dot notation
// const person = {
//   firstName: 'Alice',
//   lastName: 'Wong',
//   age: 40,
//   favorites: {
//     music: 'jazz',
//     food: 'pizza',
//     numbers: [12, 42]
//   }
// };

// const name = person.firstName; //get value of 'firstName' key
// person.lastName = 'Jones'; //set value of 'lastName' key
// console.log(person.firstName+' '+person.lastName); //"Alice Jones"

// const chosenValue = "food" //e.g., from user input
// const favFood = person.favorites.chosenValue; //undefined!!
//               //object         //value

// const firstNumber = person.favorites.numbers[0]; //12
// person.favorites.numbers.push(7); //push 7 onto the Array

// //review - data tables
// //Arbitrary list of people's names, heights, and weights
// const people = [
//     {name: 'Ada', height: 64, weight: 135},
//     {name: 'Bob', height: 74, weight: 156},
//     {name: 'Chris', height: 69, weight: 139},
//     {name: 'Diya', height: 69, weight: 144},
//     {name: 'Emma', height: 71, weight: 152}
// ]

// console.log("people :", people);

// //review - contitionals
// const outsideTemperature = 72;
// if(outsideTemperature < 60) {
//   console.log("Wear a jacket");
// }
// else if(outsideTemperature > 90) {
//   console.log("Wear sunscreen");
// }
// else if(outsideTemperature == 72) {
//   console.log("Perfect weather!");
// }
// else {
//   console.log("Wear a t-shirt");
// }

// // //review - loops
// const myArray = [1, 2, 3, 4];
// for(const theItem of myArray) { //loop array items
//   console.log(theItem)
// }


// const myObject = {a: 1, b: 2, c: 3};
// for(const theKey in myObject) { //loop object keys
//   console.log(theKey, ":", myObject[theKey])
// }

// //explicit key looping - We prefer this
// const keys = Object.keys(myObject);
// for(const theKey of keys) { console.log(theKey, ":", myObject[theKey]) }



const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]

// console.log("peopleArray :", peopleArray);
// console.log("typeof peopleArray: ", typeof peopleArray);

// // Slide 9
// //assign array to variable
// const myArray = ['a','b','c'];

// typeof myArray //=> 'object'
// console.log("myArray :", myArray);
// console.log("typeof myArray: ", typeof myArray);

// const other = myArray;

// console.log("other :", other);
// console.log("typeof other: ", typeof other);

// //access value in other
// console.log( other[1] ); //print 'b'

// //assign function to variable
// function sayHello(name) { 
//   console.log("Hello, "+name);
// }
// // console.log(sayHello("tim"))
// console.log("typeof sayHello :", typeof sayHello); // 'function'

// const other1 = sayHello;

// console.log("typeof other1 :", typeof other1); // 'function'

// //Both print "Hello, everyone" because they are the same function.
// sayHello('everyone');
// other1('everyone'); 



// // Slide 11 Functions  literals
// const array = [1,2,3]; //named variable (not anonymous)
// console.log(array); //pass in named var

// console.log( [4,5,6] ); //pass in anonymous value

// // //named function
// // function sayHello(person){ 
// //   console.log("Hello, "+person); 
// // }

// // //anonymous function (no name! so in this state its invalid) 
// // function (person) {
// //   console.log("Hello, "+person);
// // }

// //anonymous function (value) assigned to variable
// const sayHello = function(person) {
//   console.log("Hello, "+person);
// }


// sayHello("Todd");


// //Slide 12
// const obj = {}

// function sayHello(name) { 
//    console.log("Hello, "+name);
// }

// console.log("obj :", obj);

// //assign function to object
// obj.sayHi = sayHello;

// // note that this is a function off of the obj
// console.log("obj.sayHi: ", obj.sayHi)

// //access (run) with dot notation
// obj.sayHi('all'); //prints "Hello all"

// //here's the object. It has the one function we assigned above
// console.log("obj : ", obj);


// //Now assign another function as a literal (anonymous value)
// obj.otherFunc = function() { 
//     console.log("Hello world!");
// }

// // see that both functions have been added now
// console.log("obj :", obj);

// //run it
// obj.otherFunc();

// // // slide 13

// function sayHello(name) { 
//   console.log("Hello, "+name);
// }

// //takes ANOTHER FUNCTION as an arg
// //will call the arg function, 
// //passing it "world"
// function doWorld(aFunction) {
//   aFunction("world");
// }

// // //call function and pass value
// // doWorld(sayHello); //prints "Hello world"


// //pass literal (anonymous value)
// doWorld(function(msg) {

//   console.log("you said: "+msg);

// }); //prints "you said: world"

/* note where parens and braces close! */

// // slide 14 passing versus calling
// function sayHello() { //version with no args
//   return "Hello";
// }

// //print out the function
// console.log( sayHello ); // logs "[Function: sayHello]" 
//                        // the function

// //resolve the expression, THEN print that out
// console.log( sayHello() ); // logs "Hello", which is 
//                           // what `sayHello()` resolves to.

// // Slide 15 Calback Functions
// //takes in TWO callback functions!
// function doTogether(firstCallback, secondCallback){
//   firstCallback();  //execute the first function
//   secondCallback();  //execute the second function
//   console.log('at the same time!');
// }

// function patHead() {
//   console.log('pat your head');
  
// }

// function rubBelly() {
//   console.log('rub your belly');
// }

// // pass in the callbacks to do them together
// doTogether(patHead, rubBelly);

// // doTogether(rubBelly, patHead);
// doTogether(rubBelly, patHead());


// // Slide 16

// //Arbitrary list of people's names, heights, and weights
// let peopleArray = [ {name: 'Ada', height: 64, weight: 200},
//                     {name: 'Bob', height: 54, weight: 199},
//                     {name: 'Chris', height: 69, weight: 139},
//                     {name: 'Diya', height: 69, weight: 144},
//                     {name: 'Emma', height: 71, weight: 152}];

// console.log('**-Initial**');
// peopleArray.forEach(function (person) { console.log(person)})

// // // peopleArray.forEach((person) => console.log(person))

// //a function to "sort" people objects. Returns
// //  < 0 if A comes before B, 
// //  > 0 if B comes before A
// //  0 if A and B stay in current order
// function sortByHeightFunction(personA, personB) {
//   if(personA.height < personB.height) {
//     return -1; //person A is shorter, so they come first
//   } else if(personA.height > personB.height) {
//     return 1; //person B is shorter, so they come first 
//   } else {
//     return 0;
//   }
// }

// console.log('**-By Height**');
// peopleArray.sort(sortByHeightFunction); //sorts in place!

// peopleArray.forEach(function (person) { console.log(person.name, person.height)})
// // peopleArray.forEach((person) => console.log(person))

// function sortByWeightFunction(personA, personB) {
//   if(personA.weight < personB.weight) {
//     return -1; //person A is lighter, so they come first
//   } else if(personA.weight > personB.weight) {
//     return 1; //person B is lighter, so they come first 
//   } else {
//     return 0;
//   }
// }

// console.log('**-By Weight**');
// peopleArray.sort(sortByWeightFunction); //sorts in place!
// peopleArray.forEach(function (person) { console.log(person)})

// // //peopleArray.forEach((person) => console.log(person))

// // Slide 17 - Array Iteration

// //Iterate through an array
// const array = ['a','b','c'];
// const printItem = function(item) {
//    console.log(item);
// }

// array.forEach(printItem);

// //more common to use anonymous function
// array.forEach(function(item) {
//    console.log(item);
// });

// //Slide 18 forEach() callbacks

// //Iterate through an array
// const myArray = ['a','b','c'];

// // myArray.forEach(function(theItem){
// //   console.log(theItem);
// // })

// // now with all the available arguments
// myArray.forEach(function(theItem, index, theArray) {
//   //the item itself (e.g., `array[i]`` in a for loop)
//   console.log(theItem); 

//   //the index (e.g., `i` in a for loop). Rarely used.
//   console.log(index); 

//   //the array (e.g., `array` in a for loop). Never used.
//   console.log(theArray);
// });

// //Slide 19 Mapping

// // function square(n) { //a function that squares a number
// //   return n*n;
// // }

// const numbers = [1,2,3,4,5];  //an initial array
// console.log(numbers);

// // //transform the numbers using the square() function
// // const squares = []; //the transformed array
// // for(let i=0; i<numbers.length; i++) {
// //  const transformed = square(numbers[i]);
// //  squares.push(transformed); //add transformed to array
// // }
// // console.log(squares); // [1, 4, 9, 16, 25]

//TEMPLATE
/*
const newArray = oldArray.map(function(item){
  const transformed = ...
  return transformed;
});
*/

// // map the numbers using the named callback function
// const squares = numbers.map(square);

// // or more commonly, map the numbers using anonymous callback function
// const squares = numbers.map(function(n) {
//     return n*n;
// })


// console.log(squares); // [1, 4, 9, 16, 25]


// // another  example with peopleArray:

// const alteredPeopleArray = peopleArray.map(function (personObj) {
//   const personName = "hi " + personObj.name
//   return personName;

// });

// console.log(alteredPeopleArray);

// // // and another example showing how we might start to transform things into hmtl elements

// const liPeopleArray = peopleArray.map(function (personObj) {
//   const liElement = "<li>" + personObj.name + "</li>"
//   return liElement;

// });

// console.log(liPeopleArray);

// // // Slide 20 - Practice

// const peopleNames = ['Mickey', 'Daffy', 'Elmer'];

// // const greetTransform = function (nameString) {
// //   const transformed = "Hi " + nameString + "!"
// //   return transformed
// // };

// const peopleGreetings = peopleNames.map(function (nameString) {
//   const transformed = "Hi " + nameString + "!"
//   return transformed
// });

// // const peopleGreetings = peopleNames.map(greetTransform);

// console.log(peopleGreetings);

// Slide 21 - Filtering

// const array = [3,1,4,2,5];
// console.log(array);

// const isACrowd = array.filter(function(n) { 
//    return n >= 3; //keep if > 3
// }); //returns [3,4,5]

// console.log(isACrowd);

// console.log(peopleArray);
// const tallPeopleArray = peopleArray.filter(function (personObj) {

//   return personObj.height > 69;

// })
// console.log(tallPeopleArray);

// // // // Syntactic example of cascading filter and sort

// const tallPeopleArray = peopleArray.filter(function (personObj) {
//   return personObj.height > 65;
// }).sort(function (personA, personB)  {
//   if(personA.name < personB.name) {
//     return -1; //person A's name comes earlier in the alphabet
//   } else if(personA.name > personB.name) {
//     return 1; //person B's name comes earlier in the alphabet
//   } else {
//     return 0; //names are the same
//   }
// });

// // prints the people over 65 inches tall, sorted by name
// console.log(tallPeopleArray)



// Slide 22 - Reducing

// const letters = ['a','b','c','d','e'];  //an initial array
// function link(accumulation, newItem) { //combines two strings
//   const newAccumulation = accumulation + "->" + newItem;
//   return newAccumulation;
// }

// let linked = ""; //an accumulated aggregate, start at ""
// for(let i=0; i<letters.length; i++){
//   linked = link(linked, letters[i]);
// }
// console.log(linked); //"->a->b->c->d->e"

// // // Slide 23 - Reducing
// const letters = ['a','b','c','d','e'];  //an initial array
// function link(accumulation, newItem) { //combines two strings
//   const newAccumulation = accumulation + "->" + newItem;
//   return newAccumulation;
// }

// const linked = letters.reduce(link, ""); //pass func, starting value

// console.log(linked); //"->a->b->c->d->e"

// // accumulate example with peopleArray
// function accumulate(accumulation, personObj) {
//   const newAccumulation = accumulation + personObj.height;
//   return newAccumulation;
// }
// const totalHeightOfPeople = peopleArray.reduce(accumulate, 0);

// console.log(totalHeightOfPeople);

// // Slide 24 - Practice 
// const phoneDigits = [6,5,2,6,9.5,2];

// function largest(currentLargest, newNumber) {
//   if (newNumber >= currentLargest )
//   return newNumber;
//   else return currentLargest;
// }
// const largestDigit = phoneDigits.reduce(largest, 0);

// console.log(phoneDigits);
// console.log(largestDigit);