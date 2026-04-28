'use strict';

const songArray = [
  { artist: "The Who", title: "Won't Get Fooled Again", youtubeUrl: "https://www.youtube.com/watch?v=UDfAdHBtK_Q" },
  {
    artist: "Rush", title: "Tom Sawyer", youtubeUrl: "https://www.youtube.com/watch?v=QJ4-9tAf9UQ&list=PL26lD4FG8zwzpWUdgM9E0vYXDnLmSLj3m"
  },
  {
    artist: "The Police", title: "Spirits In the Material World", youtubeUrl: "https://www.youtube.com/watch?v=BHOevX4DlGk"
  },
  {
    artist: "Bruce Springsteen", title: "Streets of Minneapolis", youtubeUrl: "https://www.youtube.com/watch?v=GDaPdpwA4Iw"
  },
  {
    artist: "Bruce Cockburn", title: "They Call it Democracy", youtubeUrl: "https://www.youtube.com/watch?v=Gfcfdt0jcWs"
  }
];

// //Slide 13 - change h1 element and add additional highlighted text
// // aquire the h1 element

// const theH1 = document.querySelector('h1');
// console.log(theH1)

// const puppyImg = document.querySelector('#puppySection img')
// console.log(puppyImg);

// // querySelectorAll will select multiple elements rather than just the 1st element
// // that matches the selector

// //change the content of an element
// const subtitle = document.querySelector('main h2');

// subtitle.innerHTML = subtitle.textContent + " <em>(Husky)</em>";


// //Slide 14 Change an Attribute

// const h1Elem = document.querySelector('h1');

// h1Elem.textContent = "DOM Demo";

// const dogImg = document.querySelector('#puppySection img')

// dogImg.src = 'img/husky.jpg';
// dogImg.alt = 'a husky';



// // Slide 15 Change a Style
// // Notice you use "classList.add" to add an additional style to the 
// // existing list of applied styles

// //show the current style list (classList) for the header element
// console.log(document.querySelector('header').classList);

// //make the padding really big
// document.querySelector('header').classList.add('py-5')

// console.log(document.querySelector('header').classList);

// const theImg = document.querySelector('img');

// theImg.classList.add('anim') //adds a new style

// // In the console type: "theImg.classList.toggle('scale-out');"


// //Slide 16 Creating Elements

// const newLi = document.createElement('li');
// console.log(newLi);

// newLi.textContent = songArray[0].artist + " - " + songArray[0].title;
// console.log(newLi);

// const songListElem = document.querySelector('#dataSection ol');
// songListElem.appendChild(newLi);

// // Slide 17A Example of building up an <li> with an embedded anchor tag using innerHTML
// //eg: <li><a href="https://www.youtube.com/watch?v=BHOevX4DlGk">The Police - Spirits In The Material World</a></li>
// //create the new element
// const newLi = document.createElement('li');

// //set the html
// newLi.innerHTML = '<a href="https://www.youtube.com/watch?v=BHOevX4DlGk">The Police - Spirits In The Material World</a>';

// //add to the appropriate place in DOM
// const songListElem = document.querySelector('#dataSection ol');
// songListElem.appendChild(newLi);

// // Slide 17B Example of building up an <li> with an embedded anchor tag, but building up

// //create the new elements
// const newLi = document.createElement('li');
// const newAnchor = document.createElement('a');

// //fill out the attributes for the anchor
// newAnchor.href = "https://www.youtube.com/watch?v=BHOevX4DlGk";
// newAnchor.textContent = "The Police - Spirits In The Material World";

// newLi.appendChild(newAnchor);

// //add to the appropriate place in DOM
// const songListElem = document.querySelector('#dataSection ol');
// songListElem.appendChild(newLi);

// // Example of building up an <li> with an embedded anchor tag, Using the json object above
// // and building up
// // Slide 17 (Example B part 2 using the json object)
// //create the new elements
// const newLi = document.createElement('li');
// const newAnchor = document.createElement('a');

// //fill out the attributes for the anchor
// newAnchor.href = songArray[1].youtubeUrl;
// newAnchor.textContent = songArray[1].artist + " - " + songArray[1].title;

// newLi.appendChild(newAnchor);

// //add to the appropriate place in DOM
// const songListElem = document.querySelector('#dataSection ol');
// songListElem.appendChild(newLi);

// Slide 18 - Pattern of using functions to generate elements
// Take in a song object and return a formatted <li> object
// We can do this with less code in React

// function createSongListItem(songObj) {
//   //make this into a url
//   const aElem = document.createElement('a');
//   aElem.textContent = songObj.artist + " - " + songObj.title;
//   aElem.href = songObj.youtubeUrl;

//   // create the newLi and which has the anchor tag inside
//   const newLi = document.createElement('li');
//   newLi.append(aElem);
//   return newLi;
// }


// // First show how we can use the function to create a single song list item
// const songLiElem = createSongListItem({ artist: "Warren Zevon", title: "Lawyers Guns and Money", youtubeUrl: "https://www.youtube.com/watch?v=F2HH7J-Sx80" })
// const songListElem = document.querySelector('#dataSection ol');
// songListElem.appendChild(songLiElem);


// // Now show how to iterate over the asongArray and create a list of song list items

// function renderSongList(aSongArray) {
//   const songListElem = document.querySelector('#dataSection ol');
//   // songListElem.innerHTML = '';
//   for (const songObj of aSongArray) {
//     const songLiElem = createSongListItem(songObj);
//     songListElem.appendChild(songLiElem);
//   }

// // document.querySelector('#dataSection h2').textContent = "Top "+aSongArray.length+ " Songs";

// }

// renderSongList(songArray);


// // Slide 18A - Pattern of using functions to generate elements
// //Take in a song object and return a formatted <li> object
// // This time using map instead

// function createSongListItem(songObj) {
//   //make this into a url
//   const aElem = document.createElement('a');
//   aElem.textContent = songObj.artist + " - " + songObj.title;
//   aElem.href = songObj.youtubeUrl;

//   // create the newLi and which has the anchor tag inside
//   const newLi = document.createElement('li');
//   newLi.append(aElem);
//   return newLi;
// }

// // map (transform) the songArray to an array of 
// // li elements 
// const newSongLiArray = songArray.map(function (songObj) {
//   const songLiElem = createSongListItem(songObj);
//   return songLiElem;
// })


// function renderSongList(newSongLiArray) {
//   const songListElem = document.querySelector('#dataSection ol');
//   songListElem.innerHTML = '';
//   for (const songLiElem of newSongLiArray) {
//     songListElem.appendChild(songLiElem);
//   }

//   document.querySelector('#dataSection h2').textContent = "Top " + newSongLiArray.length + " Songs";

// }

// renderSongList(newSongLiArray);


// // INTERACTIVITY

// // Slide 23 Example 1
// const hideButton = document.querySelector('#puppySection button');

// function whatToDoWhenClicked(event){
//   console.log("you clicked me!");
//   console.log(event); //the event object
//   console.log(event.target); //tells you which element got clicked
// }

// hideButton.addEventListener('click', whatToDoWhenClicked )

// // Slide 23 Example 2

// const puppyImg = document.querySelector('#puppySection img');
// const hideButton = document.querySelector('#puppySection button');

// hideButton.addEventListener('click', function (event) {
//   puppyImg.classList.toggle('d-none');
// });


// // //Slide 24 - Using state to keep track if puppy is showing

// //STATE (should be at top of file)
// let puppyShown = true;

// function renderPuppy() {

//   document.querySelector('#puppySection div').innerHTML="";

//    if (puppyShown) {
//     document.querySelector('#puppySection div').innerHTML="";

//     const imgElement = document.createElement('img');
//     imgElement.src = 'img/puppy.jpg';
//     imgElement.alt = 'a cute puppy';
  
//     document.querySelector('#puppySection div').appendChild(imgElement);
//   }

// }
// renderPuppy();

// const hideButton = document.querySelector('#puppySection button');

// hideButton.addEventListener('click', function (event) {
//   //change the state
//   puppyShown = !puppyShown;
//   //rerender
//   renderPuppy();
// });


// // Slide 27 - Form
// const formElement = document.querySelector('#formSection form');

// //listen for submit events
// formElement.addEventListener('submit', function(event) {
//   // you need to keep it from doing the default behavior
//   event.preventDefault();
//   console.log('submitted!');
//   console.log(event.target);
  
//   //... do something with that value!
// });

// //Slide 27A
// //(note I'm readding createSongListItem and renderSongList here
// //because it was commented out above to make these examples independent
// // note that the render songlist now clears out the section first before
// // rerendering

// renderSongList(songArray);

// // function to create one SongListItem
// function createSongListItem(songObj) {
//   //make this into a url
//   const aElem = document.createElement('a');
//   aElem.textContent = songObj.artist + " - " + songObj.title;
//   aElem.href = songObj.youtubeUrl;

//   // create the newLi and make
//   const newLi = document.createElement('li');
//   newLi.append(aElem);
//   return newLi;
// }
// // function to iterate over my SongArray to create and render as SongListItems
// function renderSongList(aSongArray) {
//   // clear out the previous content befor rendering
//   const songListElem = document.querySelector('#dataSection ol');
//   songListElem.innerHTML = '';

//   for (const songObj of aSongArray) {
//     const songLiElem = createSongListItem(songObj);
//     songListElem.appendChild(songLiElem);
//   }

//   document.querySelector('#dataSection h2').textContent = "Top " + aSongArray.length + " Songs";

// }
// const formElement = document.querySelector('#formSection form');

// //listen for submit events
// formElement.addEventListener('submit', function (event) {
//   //stop normal behavior (going to a new site)
//   event.preventDefault();

//   //access what value the user typed in
//   const artistInput = document.querySelector('#artistInput');
//   const titleInput = document.querySelector('#titleInput');
//   const urlInput = document.querySelector('#urlInput');

//   const artistVal = artistInput.value;
//   const titleVal = titleInput.value;
//   const urlVal = urlInput.value;

//   console.log(artistVal + " " + titleVal + " " + urlVal);

//   const newSong = { artist: artistVal, title: titleVal, youtubeUrl: urlVal };

//   songArray.push(newSong);

//   // document.querySelector('#artistInput').value = "";
//   // document.querySelector('#titleInput').value = "";
//   // document.querySelector('#urlInput').value = "";
  
//   renderSongList(songArray);

// });


// //Slide 28
// //Another look at this where I use map to tranform the json into a an array of songLI's

// renderSongList(songArray);

// // function to create one SongListItem
// function createSongListItem(songObj) {
//   //make this into a url
//   const aElem = document.createElement('a');
//   aElem.textContent = songObj.artist + " - " + songObj.title;
//   aElem.href = songObj.youtubeUrl;

//   // create the newLi and make
//   const newLi = document.createElement('li');
//   newLi.append(aElem);
//   return newLi;
// }
// // function to iterate over my SongArray to create and render as SongListItems
// function renderSongList(aSongArray) {

//   let songLiArray = songArray.map( function (songObj) {
//     const songLiElem = createSongListItem(songObj);
//     return songLiElem;
//   })

//   // clear out the previous content befor rendering
//   const songListElem = document.querySelector('#dataSection ol');
//   songListElem.innerHTML = '';
//   console.log("songList: ", songLiArray);

//   for (const songLiElem of songLiArray) {
//     songListElem.appendChild(songLiElem);
//   }

//   document.querySelector('#dataSection h2').textContent = "Top " + aSongArray.length + " Songs";

// }
// const formElement = document.querySelector('#formSection form');

// //listen for submit events
// formElement.addEventListener('submit', function (event) {
//   //stop normal behavior (going to a new site)
//   event.preventDefault();

//   //access what value the user typed in
//   const artistInput = document.querySelector('#artistInput');
//   const titleInput = document.querySelector('#titleInput');
//   const urlInput = document.querySelector('#urlInput');

//   const artistVal = artistInput.value;
//   const titleVal = titleInput.value;
//   const urlVal = urlInput.value;

//   console.log(artistVal + " " + titleVal + " " + urlVal);

//   const newSong = { artist: artistVal, title: titleVal, youtubeUrl: urlVal };

//   songArray.push(newSong);
//   console.log("songArray: ", songArray)

//   // document.querySelector('#artistInput').value = "";
//   // document.querySelector('#titleInput').value = "";
//   // document.querySelector('#urlInput').value = "";
  
//   renderSongList(songArray);

// });



