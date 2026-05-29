// import React, {useEffect, useState} from 'react';

// import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router';

// import { HeaderBar } from './HeaderBar.jsx';

// import ChatPage from './ChatPage.jsx';
// import SignInPage from './SignInPage.jsx';
// import * as Static from './StaticPages.jsx';

// import INITIAL_CHAT_LOG from '../data/chat_log.json'
// import DEFAULT_USERS from '../data/users.json';

// function App(props) {
//   const [messageStateArray, setMessageStateArray] = useState(INITIAL_CHAT_LOG);
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initialize;

//   const navigateTo = useNavigate(); //navigation hook

//   //effect to run when the component first loads!
//   useEffect(() => {
//     //log in a default user
//     changeUser(DEFAULT_USERS[1])

//   }, []) //array is list of variables that will cause this to rerun if changed

//   const changeUser = (userObj) => {
//     console.log("changing user to", userObj.userName);
//     setCurrentUser(userObj);
//     if(userObj.userId !== null){
//       navigateTo('/chat/'); //go to chat after login
//     }
//   }

//   const addMessage = (userObj, text, channel) => {
//     const newMessageObj = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": text,
//       "timestamp": Date.now(),
//       "channel": channel
//     }
//     const newMessageArray = [...messageStateArray, newMessageObj];
//     setMessageStateArray(newMessageArray); //update state & rerender
//   }

//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />

//       <Routes>
//         <Route index element={ <Static.WelcomePage /> }/>
//         <Route path="/about" element={ <Static.AboutPage /> } />

//         <Route element={<ProtectedPage currentUser={currentUser} />} >
//           <Route path="chat/:chanName?" element={
//             <ChatPage 
//               currentUser={currentUser} 
//               messageArray={messageStateArray}
//               addMessageFunction={addMessage}
//               />
//           } />
//         </Route>
//         <Route path="/signin" element={ 
//           <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} 
//         />
//         <Route path="*" element={<Static.ErrorPage />} />
//       </Routes>
//     </div>
//   );
// }

// function ProtectedPage(props) {
//   const {currentUser} = props;

//   //...determine if user is logged in
//   if(currentUser.userId === null) { //not undefined
//     return <Navigate to="/signin"/>
//   }
//   else { //otherwise, show the child route content
//     return <Outlet />
//   }
// }
// export default App;


// // Slide 24

// import { getDatabase, ref, set as firebaseSet} from 'firebase/database'; 
// import React, {useEffect, useState} from 'react';

// import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router';

// import { HeaderBar } from './HeaderBar.jsx';

// import ChatPage from './ChatPage.jsx';
// import SignInPage from './SignInPage.jsx';
// import * as Static from './StaticPages.jsx';

// import INITIAL_CHAT_LOG from '../data/chat_log.json'
// import DEFAULT_USERS from '../data/users.json';

// function App(props) {
//   const [messageStateArray, setMessageStateArray] = useState(INITIAL_CHAT_LOG);
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initialize;

//   const navigateTo = useNavigate(); //navigation hook

//   //effect to run when the component first loads!
//   useEffect(() => {
//     //log in a default user
//     changeUser(DEFAULT_USERS[1])

//   }, []) //array is list of variables that will cause this to rerun if changed

//   const changeUser = (userObj) => {
//     console.log("changing user to", userObj.userName);
//     setCurrentUser(userObj);
//     if(userObj.userId !== null){
//       navigateTo('/chat/'); //go to chat after login
//     }
//   }

//   const addMessage = (userObj, text, channel) => {
//     const newMessageObj = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": text,
//       "timestamp": Date.now(),
//       "channel": channel
//     }
//     const db = getDatabase();
//     const messageRef = ref(db,"message");

//     firebaseSet(messageRef, newMessageObj);
  
//     // const newMessageArray = [...messageStateArray, newMessageObj];
//     // setMessageStateArray(newMessageArray); //update state & rerender
//   }

//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />

//       <Routes>
//         <Route index element={ <Static.WelcomePage /> }/>
//         <Route path="/about" element={ <Static.AboutPage /> } />

//         <Route element={<ProtectedPage currentUser={currentUser} />} >
//           <Route path="chat/:chanName?" element={
//             <ChatPage 
//               currentUser={currentUser} 
//               messageArray={messageStateArray}
//               addMessageFunction={addMessage}
//               />
//           } />
//         </Route>
//         <Route path="/signin" element={ 
//           <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} 
//         />
//         <Route path="*" element={<Static.ErrorPage />} />
//       </Routes>
//     </div>
//   );
// }

// function ProtectedPage(props) {
//   const {currentUser} = props;

//   //...determine if user is logged in
//   if(currentUser.userId === null) { //not undefined
//     return <Navigate to="/signin"/>
//   }
//   else { //otherwise, show the child route content
//     return <Outlet />
//   }
// }

// export default App;

// // Slide 28

// import { getDatabase, ref, set as firebaseSet, onValue} from 'firebase/database';
// import React, {useEffect, useState} from 'react';

// import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router';

// import { HeaderBar } from './HeaderBar.jsx';

// import ChatPage from './ChatPage.jsx';
// import SignInPage from './SignInPage.jsx';
// import * as Static from './StaticPages.jsx';

// import INITIAL_CHAT_LOG from '../data/chat_log.json'
// import DEFAULT_USERS from '../data/users.json';

// function App(props) {
//   const [messageStateArray, setMessageStateArray] = useState(INITIAL_CHAT_LOG);
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initialize;

//   const navigateTo = useNavigate(); //navigation hook

//   //effect to run when the component first loads!
//   useEffect(() => {
//     //log in a default user
//     changeUser(DEFAULT_USERS[1])

//   }, []) //array is list of variables that will cause this to rerun if changed

//   const changeUser = (userObj) => {
//     console.log("changing user to", userObj.userName);
//     setCurrentUser(userObj);
//     if(userObj.userId !== null){
//       navigateTo('/chat/'); //go to chat after login
//     }
//   }

//   const db = getDatabase();
//   const messageRef = ref(db, "message");
//   useEffect(() => {
//     onValue(messageRef, (snapshot) =>{
//       const newValue = snapshot.val();
//       console.log("firebase value changed")
//       console.log(snapshot);
//       console.log("new value: ", newValue)
//     })
//   }, []);

//   const addMessage = (userObj, text, channel) => {
//     const newMessageObj = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": text,
//       "timestamp": Date.now(),
//       "channel": channel
//     }
//     const db = getDatabase();
//     const messageRef = ref(db,"message");

//     firebaseSet(messageRef, newMessageObj);
  
//     // const newMessageArray = [...messageStateArray, newMessageObj];
//     // setMessageStateArray(newMessageArray); //update state & rerender
//   }

//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />

//       <Routes>
//         <Route index element={ <Static.WelcomePage /> }/>
//         <Route path="/about" element={ <Static.AboutPage /> } />

//         <Route element={<ProtectedPage currentUser={currentUser} />} >
//           <Route path="chat/:chanName?" element={
//             <ChatPage 
//               currentUser={currentUser} 
//               messageArray={messageStateArray}
//               addMessageFunction={addMessage}
//               />
//           } />
//         </Route>
//         <Route path="/signin" element={ 
//           <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} 
//         />
//         <Route path="*" element={<Static.ErrorPage />} />
//       </Routes>
//     </div>
//   );
// }

// function ProtectedPage(props) {
//   const {currentUser} = props;

//   //...determine if user is logged in
//   if(currentUser.userId === null) { //not undefined
//     return <Navigate to="/signin"/>
//   }
//   else { //otherwise, show the child route content
//     return <Outlet />
//   }
// }

// export default App;

// // Slide 29

// import { getDatabase, ref, set as firebaseSet, onValue} from 'firebase/database';
// import React, {useEffect, useState} from 'react';

// import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router';

// import { HeaderBar } from './HeaderBar.jsx';

// import ChatPage from './ChatPage.jsx';
// import SignInPage from './SignInPage.jsx';
// import * as Static from './StaticPages.jsx';

// import INITIAL_CHAT_LOG from '../data/chat_log.json'
// import DEFAULT_USERS from '../data/users.json';

// function App(props) {
//   const [messageStateArray, setMessageStateArray] = useState([]);
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initialize;

//   const navigateTo = useNavigate(); //navigation hook

//   //effect to run when the component first loads!
//   useEffect(() => {
//     //log in a default user
//     changeUser(DEFAULT_USERS[1])

//   }, []) //array is list of variables that will cause this to rerun if changed

//   const changeUser = (userObj) => {
//     console.log("changing user to", userObj.userName);
//     setCurrentUser(userObj);
//     if(userObj.userId !== null){
//       navigateTo('/chat/'); //go to chat after login
//     }
//   }

//   const db = getDatabase();
//   const messageRef = ref(db, "message");

// useEffect(() => {
//   const offFunction = onValue(messageRef, (snapshot) => {
//     const newMessageObj = snapshot.val();
//     console.log(newMessageObj);
//
//     setMessageStateArray((prevMessageStateArray) => {
//       return [...prevMessageStateArray, newMessageObj];
//     }); // update state and re-render
//   });
//
//   function cleanup() {
//     console.log("Component is being removed");
//     offFunction();
//   }
//
//   return cleanup;
// }, []);


//   const addMessage = (userObj, text, channel) => {
//     const newMessageObj = {
//       "userId": userObj.userId,
//       "userName": userObj.userName,
//       "userImg": userObj.userImg,
//       "text": text,
//       "timestamp": Date.now(),
//       "channel": channel
//     }
//     const db = getDatabase();
//     const messageRef = ref(db,"message");

//     firebaseSet(messageRef, newMessageObj);
  
//     // const newMessageArray = [...messageStateArray, newMessageObj];
//     // setMessageStateArray(newMessageArray); //update state & rerender
//   }

//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />

//       <Routes>
//         <Route index element={ <Static.WelcomePage /> }/>
//         <Route path="/about" element={ <Static.AboutPage /> } />

//         <Route element={<ProtectedPage currentUser={currentUser} />} >
//           <Route path="chat/:chanName?" element={
//             <ChatPage 
//               currentUser={currentUser} 
//               messageArray={messageStateArray}
//               addMessageFunction={addMessage}
//               />
//           } />
//         </Route>
//         <Route path="/signin" element={ 
//           <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} 
//         />
//         <Route path="*" element={<Static.ErrorPage />} />
//       </Routes>
//     </div>
//   );
// }

// function ProtectedPage(props) {
//   const {currentUser} = props;

//   //...determine if user is logged in
//   if(currentUser.userId === null) { //not undefined
//     return <Navigate to="/signin"/>
//   }
//   else { //otherwise, show the child route content
//     return <Outlet />
//   }
// }

// export default App;

// Slide 33

import { getDatabase, ref, onValue, push as FirebasePush} from 'firebase/database'; 
import React, {useEffect, useState} from 'react';

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router';

import { HeaderBar } from './HeaderBar.jsx';

import ChatPage from './ChatPage.jsx';
import SignInPage from './SignInPage.jsx';
import * as Static from './StaticPages.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState([]);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initialize;

  const navigateTo = useNavigate(); //navigation hook

  //effect to run when the component first loads!
  useEffect(() => {
    //log in a default user
    changeUser(DEFAULT_USERS[1])

  }, []) //array is list of variables that will cause this to rerun if changed

  const changeUser = (userObj) => {
    console.log("changing user to", userObj.userName);
    setCurrentUser(userObj);
    if(userObj.userId !== null){
      navigateTo('/chat/'); //go to chat after login
    }
  }

  const db = getDatabase();
  const allMessagesRef = ref(db, "allMessages");

useEffect(() => {

  const offFunction = onValue(allMessagesRef, function(snapshot) {
    const allMessagesObj = snapshot.val();
    console.log(allMessagesObj);

    const objKeys = Object.keys(allMessagesObj);

    const objArray = objKeys.map((keyString) => {
      allMessagesObj[keyString].key = keyString;
      console.log("keyString:", keyString);
      return allMessagesObj[keyString];
    });

    setMessageStateArray(objArray); // update state and re-render
  });

  function cleanup() {
    console.log("Component is being removed");
    offFunction();
  }

  return cleanup;
}, []);



  const addMessage = (userObj, text, channel) => {
    const newMessageObj = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": text,
      "timestamp": Date.now(),
      "channel": channel
    }

    const db = getDatabase();
    const allMessagesRef = ref(db,"allMessages");

    FirebasePush(allMessagesRef, newMessageObj);
  
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route index element={ <Static.WelcomePage /> }/>
        <Route path="/about" element={ <Static.AboutPage /> } />

        <Route element={<ProtectedPage currentUser={currentUser} />} >
          <Route path="chat/:chanName?" element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageStateArray}
              addMessageFunction={addMessage}
              />
          } />
        </Route>
        <Route path="/signin" element={ 
          <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} 
        />
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  const {currentUser} = props;

  //...determine if user is logged in
  if(currentUser.userId === null) { //not undefined
    return <Navigate to="/signin"/>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;