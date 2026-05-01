'use strict';

export const animalArray = ["dog", "cat", "goldfish"];

console.log("I'm the index.js file!");

console.log("animalArray: ", animalArray);



// named import example:
import {otherMessage, otherFunc} from './other.js';

console.log("otherMessage: ", otherMessage);

otherFunc();


// // default import example:
// import otherFunc from './other.js';
// import {otherMessage} from './other.js';

// console.log("otherMessage: ", otherMessage);

// otherFunc();

