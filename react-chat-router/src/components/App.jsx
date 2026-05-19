import React, {useState} from 'react';
import { HeaderBar } from './HeaderBar.jsx';
import ChatPage from './ChatPage.jsx';
import SignInPage from './SignInPage.jsx';
import * as Static from './StaticPages.jsx';

import INITIAL_HISTORY from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initialize;

  //STATE MANAGEMENT: how do we change?
  const addMessage = function(userObj, messageText, channel) {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    const newArray = [...messageStateArray, newMessage];
    setMessageStateArray(newArray); //update state & re-render
  }

  const changeUser = (newUserObj) => {
    setCurrentUser(newUserObj);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <ChatPage 
        currentUser={currentUser} 
        messageArray={messageStateArray}
        addMessageFunction={addMessage}
        />
       <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />
{/*       
      <Static.WelcomePage />
      <Static.AboutPage />
      <Static.ErrorPage /> */}

    </div>
  );
}

// // Slide 19 Example - Add Routes/Route

// import React, { useState } from 'react';
// import { HeaderBar } from './HeaderBar.jsx';
// import ChatPage from './ChatPage.jsx';
// import SignInPage from './SignInPage.jsx';
// import * as Static from './StaticPages.jsx';

// import { Routes, Route } from "react-router";

// import INITIAL_HISTORY from '../data/chat_log.json'
// import DEFAULT_USERS from '../data/users.json';

// function App(props) {
//   const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initialize;

//   //STATE MANAGEMENT: how do we change?
//   const addMessage = function (userObj, messageText, channel) {
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": channel
//     }
//     const newArray = [...messageStateArray, newMessage];
//     setMessageStateArray(newArray); //update state & re-render
//   }

//   const changeUser = (newUserObj) => {
//     setCurrentUser(newUserObj);
//   }

//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />
//       <Routes>
//         <Route path="home" element={<Static.WelcomePage />} />
//         <Route path="chat" element={<ChatPage
//           currentUser={currentUser}
//           messageArray={messageStateArray}
//           addMessageFunction={addMessage}
//         />} />

//         <Route path="signin" element={<SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} />
//         <Route path="about" element={<Static.AboutPage />} />
//         <Route path="error" element={<Static.ErrorPage />} />
//       </Routes>
//     </div>
//   );
// }


// // Example slide 20, use index and * catchall in the route list

// import React, { useState } from 'react';
// import { HeaderBar } from './HeaderBar.jsx';
// import ChatPage from './ChatPage.jsx';
// import SignInPage from './SignInPage.jsx';
// import * as Static from './StaticPages.jsx';

// import { Routes, Route } from "react-router";

// import INITIAL_HISTORY from '../data/chat_log.json'
// import DEFAULT_USERS from '../data/users.json';

// function App(props) {
//   const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initialize;

//   //STATE MANAGEMENT: how do we change?
//   const addMessage = function (userObj, messageText, channel) {
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": channel
//     }
//     const newArray = [...messageStateArray, newMessage];
//     setMessageStateArray(newArray); //update state & re-render
//   }

//   const changeUser = (newUserObj) => {
//     setCurrentUser(newUserObj);
//   }

//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />
//       <Routes>
//         <Route index element={<Static.WelcomePage />} />
//         <Route path="chat" element={<ChatPage
//           currentUser={currentUser}
//           messageArray={messageStateArray}
//           addMessageFunction={addMessage}
//         />} />

//         <Route path="signin" element={<SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} />
//         <Route path="about" element={<Static.AboutPage />} />
//         <Route path="*" element={<Static.ErrorPage />} />
//       </Routes>
//     </div>
//   );
// }

// // Example slide 25 nesting Routes for Authentication (got rid of the app subcomponent from prev example)

// import React, { useState } from 'react';
// import { HeaderBar } from './HeaderBar.jsx';
// import ChatPage from './ChatPage.jsx';
// import SignInPage from './SignInPage.jsx';
// import * as Static from './StaticPages.jsx';

// import { Routes, Route, Outlet } from "react-router";

// import INITIAL_HISTORY from '../data/chat_log.json'
// import DEFAULT_USERS from '../data/users.json';

// function App(props) {
//   const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initialize;

//   //STATE MANAGEMENT: how do we change?
//   const addMessage = function (userObj, messageText, channel) {
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": channel
//     }
//     const newArray = [...messageStateArray, newMessage];
//     setMessageStateArray(newArray); //update state & re-render
//   }

//   const changeUser = (newUserObj) => {
//     setCurrentUser(newUserObj);
//   }

//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />
//       <Routes>
//         <Route index element={<Static.WelcomePage />} />
//         <Route path="signin" element={<SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} />
//         <Route path="about" element={<Static.AboutPage />} />
//         <Route path="*" element={<Static.ErrorPage />} />
//         <Route element={<RequireAuth currentUser={currentUser}  />}>
//           <Route path="chat" element={<ChatPage currentUser={currentUser} messageArray={messageStateArray} addMessageFunction={addMessage} />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// function RequireAuth(props){
//   if(props.currentUser.userId === null) { //if no user, say so
//    return <h1 className="text-center">Forbidden! You need to be logged in to Chat!</h1>
//  }
//  else { //otherwise, show the child route content
//    return <Outlet />
//  }
// }

// // Example slide 36 URL Params

// import React, { useState } from 'react';
// import { HeaderBar } from './HeaderBar.jsx';
// import ChatPage from './ChatPage.jsx';
// import SignInPage from './SignInPage.jsx';
// import * as Static from './StaticPages.jsx';

// import { Routes, Route, Outlet } from "react-router";

// import INITIAL_HISTORY from '../data/chat_log.json'
// import DEFAULT_USERS from '../data/users.json';

// function App(props) {
//   const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //initialize;

//   //STATE MANAGEMENT: how do we change?
//   const addMessage = function (userObj, messageText, channel) {
//     const newMessage = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": messageText,
//       "timestamp": Date.now(),
//       "channel": channel
//     }
//     const newArray = [...messageStateArray, newMessage];
//     setMessageStateArray(newArray); //update state & re-render
//   }

//   const changeUser = (newUserObj) => {
//     setCurrentUser(newUserObj);
//   }

//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />
//       <Routes>
//         <Route index element={<Static.WelcomePage />} />
//         <Route path="signin" element={<SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} />
//         <Route path="about" element={<Static.AboutPage />} />
//         <Route path="*" element={<Static.ErrorPage />} />
//         <Route element={<RequireAuth currentUser={currentUser} messageArray={messageStateArray} addMessageFunction={addMessage} />}>
//           <Route path="chat/:channelName" element={<ChatPage currentUser={currentUser} messageArray={messageStateArray} addMessageFunction={addMessage} />} />
//           <Route path="chat" element={<ChatPage currentUser={currentUser} messageArray={messageStateArray} addMessageFunction={addMessage} />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// function RequireAuth(props){
//   if(props.currentUser.userId === null) { //if no user, say so
//    return <p>Forbidden!</p>
//  }
//  else { //otherwise, show the child route content
//    return <Outlet />
//  }
// }

export default App;