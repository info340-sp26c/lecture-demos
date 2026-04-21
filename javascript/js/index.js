'use strict';

// // Slide 11/12/13
// console.log("Hello World");

// console.log("The days are getting longer")

// // // Slide 16 - dynamically typed
//  let myDogName = "Jovie";
//  console.log(myDogName);
//  console.log(typeof(myDogName));

//  myDogName = 7;
//  console.log(myDogName);
//  console.log(typeof(myDogName));

//  //create a variable (not assigned)
// let hoursSlept; 
// console.log(hoursSlept); //=> undefined

//  let hoursSlept = ['a', 'b', 'c'];
//  console.log(hoursSlept);
//  console.log(typeof(hoursSlept));

// // Slide 17
// const x = 4;
// x = 5; // TypeError: Assignment to constant variable.

// let y = 1.5;

// const myArray = [1,2,3];


// console.log(myArray)
// myArray.push(5)
// console.log(myArray)

// myArray = [a,b,c];


// // Slide 18 Variable types
// //Numbers (no difference between int and float)
// const x = 4;   //'number'
// const y = 1.5; //'number'

// //Strings (single or double quotes, just be consistent)
// const message = "Hello world";

// //Booleans
// const likesCode = true;

// //Arrays
// const letters = ['a', 'b', 'c']; //literal syntax
// const things = ['raindrops', 2.5, true, [3,4,3]]; //mix types
// console.log(letters[0]); //'a'
// console.log(letters[4]); //undefined
// letters[5] = 'f'; //assigning out of bounds grows array
// console.log(letters); //['a', 'b', 'c', , , 'f']
// letters.push('z'); //arrays have methods as well
// console.log(letters);
// letters[3] = "car";
// console.log(letters);

// const myArray = ["tim", "tom", "ted"];
// console.log(myArray);
// console.log(myArray[2])

// // Slide 20 - Nested Arrays
// // an array of different dinners available at a fancy party
// // this list has 4 elements, each of which is a list of 3 elements
// // the indentation is just for human readability
// const dinnerOptions = [
//     ['chicken', 'mashed potatoes', 'mixed veggies'],
//     ['steak', 'seasoned potatoes', 'asparagus'],
//     ['fish', "rice", 'green beans'],
//     ['portobello steak', 'rice', 'green beans']
// ];

// console.log(dinnerOptions.length); //4
// console.log(dinnerOptions[2][0])

// const fishOption = dinnerOptions[2]; // ['fish', 'rice', 'green beans']

// console.log(fishOption.length); //3

// // fishOption is an array, so can reference its elements by index
// console.log(fishOption[0]); //"fish"

// // Access the 2th element's 0th element
// console.log(dinnerOptions[1][2]); //"steak"


// // Slide 21 (type coersion)
// '40' + 2
// '40' - 4

// console.log('40' + 4);
// console.log('40' - 4);
// console.log('fourty' - 4);
// console.log('fourty' + 4);


// const num = 10
// const str = '10'

// const compare1 = (num == str)
// console.log("compare1 is:", compare1)

// const compare2 = (num === str)
// console.log("compare2 is:", compare2)

// const compare3 = ('' === 0) //empty String compare to 0
// console.log("compare3 is:", compare3)

// const var1 = "one";
// const var2 = "two";
// const var3 = "three";
// const var4 = "four";

// console.log(var1, var2, var3, var4);
// console.log(var1 + " " + var2 + var3 + var4);

// // Slide 22
// const ages = {'sarah':42, amit:35, zhang:13};

// const myVar = 'sarah';

// console.log(ages);
// console.log(ages['amit'])
// console.log(ages[myVar]);
// console.log(ages.zhang);
// console.log(ages['zhang'])

// //can omit quotes on keys, but they are actually strings!
// const englishToSpanish = {one:'uno', two:'dos'}


// const numWords = {1:'one', 2:'two', 3:'three', 4:'four'};

// const mykeys = Object.keys(numWords) //[ '1', '2', '3' ]

// console.log(numWords);
// console.log("myKeys:", mykeys); //see they are all strings even if you make them numerals. the keys are always strings in jscript

// //mixed values
// const typeExamples = {'int':12, 'str':'dog', 'list':[1,2]}
// const empty = {}

// console.log(typeExamples);


// // // Slide 23 Accessing Properties

// const ages = {alice:40, bob:35, charles:13};

// console.log(ages);

// //access ("look up") values
// console.log( ages['alice'] ); //=> 40
// console.log( ages['bob'] ); //=> 35
// console.log( ages['charles'] ); //=> 13

// //keys not in the object have undefined values
// console.log( ages['fred']); //=> undefined

// //assign values
// ages['alice'] = 41;
// console.log( ages['alice'] ); //=> 41

// ages['fred'] = 19; //adds the key and assigns value
// ages['joe'] = 15; //adds the key and assigns value
// console.log(ages);

// // ages['joe'] = 15; //adds the key and assigns value



//slide 24 - practice problem

// const dailySleep = { day : 'Monday', hours : 9};

// const dailySleep = {};
// dailySleep['day'] = 'Monday';
// dailySleep['hours'] = 9;

// let howMuchISlept = dailySleep['Monday'];

// console.log("How Much I slept for the week", dailySleep);
// console.log("How much I slept", dailySleep['day'], dailySleep['hours']);

// const emptyArray = [];
// console.log(emptyArray)

// // json object example
// const dailySleepArray = [
// { day: "Monday", hours: 9},
// { day: "Tuesday", hours: 5},
// { day: "Wednesday", hours: 10},
// { day: "Thursday", hours: 7},
// { day: "Friday", hours: 9},
// { day: "Saturday", hours: 8},
// { day: "Sunday", hours: 6.5}
// ]

// const weekArrayKeys = Object.keys(dailySleepArray);

// for (const theKey of weekArrayKeys){
//   console.log("Sleep for :", dailySleepArray[theKey].day, ": " , dailySleepArray[theKey].hours)
// }


// // Slide 25
// const person = {
//     firstName: 'Alice',
//     lastName: 'Wong',
//     age: 40,
//     favorites: {
//       music: 'jazz',
//       food: 'pizza',
//       numbers: [12, 42]
//     }
//   };
  
//   const name = person['firstName']; //get value of 'firstName' key
//   console.log(name);
//   person['lastName'] = 'Jones'; //set value of 'lastName' key
//   console.log(person['firstName']+' '+person['lastName']); //"Alice Jones"
  
  
// //   const favFood = person['favorites'][inputtedValue]; //object in the object
// //                   //object           //value
  
//   const firstNumber = person['favorites']['numbers'][0]; //12

//   console.log(firstNumber);
//   person['favorites']['numbers'].push("56"); //push 'hey' onto the Array

//   console.log(person['favorites']['numbers']);


// //Slide 26 Accessing Properties (dot notation)
// const person = {
//     firstName: 'Alice',
//     lastName: 'Wong',
//     age: 40,
//     favorites: {
//       music: 'jazz',
//       food: 'pizza',
//       numbers: [12, 42]
      
//     }
//   };
  
//   const inputtedValue = 'food';

//   const name = person.firstName; //get value of 'firstName' key
//   person.lastName = 'Jones'; //set value of 'lastName' key
//   console.log(person.firstName+' '+person.lastName); //"Alice Jones"
  
// //   const favFood = person.favorites.inputtedValue; //undefined!!
//   const favFood = person.favorites[inputtedValue]; 
                

//     console.log(favFood);
  
//   const firstNumber = person.favorites.numbers[0]; //12
//   person.favorites.numbers.push(7); //push 7 onto the Array

// // // Slide 28
// // // Arbitrary list of people's names, heights, and weights
// const peopleTable = [
//     {name: 'Ada', height: 64, weight: 135},
//     {name: 'Bob', height: 74, weight: 156},
//     {name: 'Chris', height: 69, weight: 139},
//     {name: 'Diya', height: 69, weight: 144},
//     {name: 'Emma', height: 71, weight: 152}
// ]

// console.log(peopleTable);

// peopleTable.forEach(element => {
//     console.log(element.name, element.height, element.weight);
// });

// // Slide 30

// const myArray = [1, 2, 3, 4];
// // example with normal for loop with array
// for (let i=0;i<myArray.length; i++){
//     console.log(myArray[i]);
// }

// // example with enhanced for loop with array
// for(const theItem of myArray) { //loop array items
//   console.log(theItem)
// }

// // example with object 1
// const myObject = {a: 1, b: 2, c: 3};

// for(const theKey in myObject) { //loop object keys
//   console.log(theKey, ":", myObject[theKey])
// }

// // example with object 2
// //explicit key looping - prefered this
// const keys = Object.keys(myObject);
// for(const theKey of keys) 
// { console.log(theKey, ":", myObject[theKey])};

// // Slide 32



