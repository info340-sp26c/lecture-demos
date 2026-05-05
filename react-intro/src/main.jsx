import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// // Example 1
// //JSX - element to show
// const msgElem = <h1 id="hello" className="myclass">Hello React</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(msgElem);

// // Example 2
// const content = (
//     <header>
//       <h1>Hello world!</h1>
//       <p>This is a fine demo</p>
//     </header>
//   );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);

// // Example 3
// const content = (

//     <div>
//         <header>
//             <h1>Hello world!</h1>
//         </header>
//         <main>
//             <p>This is the main section</p>
//         </main>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);

// // Example 4 - inline examples 

// const myTitle = "Hello Inline React";
// const imgURL = './img/puppy.jpg';

// const content = (

//     <div>
//         <header>
//             <h1>{myTitle.toUpperCase()}</h1>
//         </header>
//         <main>
//             <p>This is the main section</p>
//             <p> A leap year has {(365 + 1) * 24 * 60} minutes!</p>
//             <img src={imgURL} alt="a cute puppy"></img>

//         </main>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);

// // Example 5
// function HelloMessage(props) {

//     let message = "Hello Everyone!";
//     return <h1>{message}</h1>;

// }

// const content = <HelloMessage />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content);

// //Example 6 - Make a headerComponent

// function HeaderComponent(props) {
//     return (
//         <div>
//             <header>
//                 <h1>React Pet Header</h1>
//             </header>
//         </div>);
// }

// function KittenPuppyMessage(props) {
//       const puppyImgUrl = "/img/puppy-kitty.jpg"
//     return (
    
//       <div>
//         <img src={puppyImgUrl} alt="a cute puppy and kitten" />
//         <h3>Kitten and Puppy</h3>
//       </div>
//       )
// }

// function PuppyMessage(props) {
//     const puppyImgUrl = "/img/puppy.jpg"
//     return (
    
//       <div>
//         <img src={puppyImgUrl} alt="a cute puppy" />
//         <h3>Puppy</h3>
//       </div>
//       )
// }

// function PetList(props) {
//     return (
//         <div>
//             <ul>
//                 <KittenPuppyMessage /> {/* A KittenPuppyMessage component */}
//                 <PuppyMessage /> {/* A PuppyMessage component */}
//             </ul>
//         </div>
//     );
// }

// const content =
//     <>
//         <HeaderComponent />
//         <PetList />
//     </>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content)

// // // Example 7

// import { App } from './components/App'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);




// -----------------
// // This is a more complicated set of examples that show how to use props and map to create elements
// // It uses Song objects and creates a list of songs and then maps them to create a list of SongItem components

// //Example 6 - Make a couple of components and render them
// const songArray = [
//     { artist: "The Who", title: "Won't Get Fooled Again", youtubeUrl: "https://www.youtube.com/watch?v=UDfAdHBtK_Q" },
//     {
//         artist: "Rush", title: "Tom Sawyer", youtubeUrl: "https://www.youtube.com/watch?v=QJ4-9tAf9UQ&list=PL26lD4FG8zwzpWUdgM9E0vYXDnLmSLj3m"
//     },
//     {
//         artist: "The Police", title: "Spirits In the Material World", youtubeUrl: "https://www.youtube.com/watch?v=BHOevX4DlGk"
//     }
// ];

// function HeaderComponent(props) {
//     return (
//         <div>
//             <header>
//                 <h1>React Demo Header</h1>
//             </header>
//         </div>);
// }

// function Banner(props) {
//     return <h2>Number of songs in my array is: {songArray.length}</h2>;
// }

// function SongList(props) {
//     return (
//         <div>
//             <ul>
//                 <li>{songArray[0].title} - {songArray[0].artist}</li>
//                 <li>{songArray[1].title} - {songArray[1].artist}</li>
//                 <li>{songArray[2].title} - {songArray[2].artist}</li>
//             </ul>
//         </div>
//     );
// }

// const content =
//     <>
//         <HeaderComponent />
//         <Banner />
//         <SongList />
//     </>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content)


// // Example 7 - Using props and using map to create elements

// const songArray = [
//     { artist: "The Who", title: "Won't Get Fooled Again", youtubeUrl: "https://www.youtube.com/watch?v=UDfAdHBtK_Q" },
//     {
//         artist: "Rush", title: "Tom Sawyer", youtubeUrl: "https://www.youtube.com/watch?v=QJ4-9tAf9UQ&list=PL26lD4FG8zwzpWUdgM9E0vYXDnLmSLj3m"
//     },
//     {
//         artist: "The Police", title: "Spirits In the Material World", youtubeUrl: "https://www.youtube.com/watch?v=BHOevX4DlGk"
//     }
// ];

// const elementArray = songArray.map((songObj) => {
//     const transformed =  <CreateSongItem artist={songObj.artist} title={songObj.title} /> 
//     return transformed;

// });

// function HeaderComponent(props) {
//     return (
//         <div>
//             <header>
//                 <h1>React Demo Header</h1>
//             </header>
//         </div>);
// }

// function Banner(props) {
//     return <h2>Number of songs in my array is: {songArray.length}</h2>;
// }

// function CreateSongItem(props) {
//     console.log(props);
//     // const { artist, title } = props;
//     const artist = props.artist;
//     const title = props.title;
    
//     return <div className="card">{title} - {artist}</div>;
// }

// function SongList(props) {
//     return (
//         <div className="songList">
//             {elementArray}
//         </div>
//     );
// }

// const content =
//     <>
//         <HeaderComponent />
//         <Banner />
//         <SongList />
//     </>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(content)


// // Example 8

// import { App } from './components/App.jsx'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
