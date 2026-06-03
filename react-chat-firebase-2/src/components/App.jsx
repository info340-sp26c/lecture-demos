// import React, { useState, useEffect } from 'react';

// import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router';

// import { HeaderBar } from './HeaderBar.jsx';

// import ChatPage from './ChatPage.jsx';
// import SignInPage from './SignInPage.jsx';
// import ProfilePage from './ProfilePage.jsx';
// import * as Static from './StaticPages.jsx';

// import DEFAULT_USERS from '../data/users.json';

// //A component!
// export default function App(props) {
//   //state
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //default to null user

//   const navigateTo = useNavigate(); //navigation hook

//   //effect to run when the component first loads
//   useEffect(() => {
//     // log in a default user
//     // loginUser(DEFAULT_USERS[1])

//   }, []) //array is list of variables that will cause this to rerun if changed

//   const loginUser = (userObj) => {
//     console.log("logging in as", userObj.userName);
//     setCurrentUser(userObj);
//     if(userObj.userId !== null){
//       navigateTo('/chat/general'); //go to chat after login
//     }
//   }

//   //what content should my App look like?
//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />

//       <Routes>
//         <Route index element={<Static.WelcomePage />} />
//         <Route path="about" element={<Static.AboutPage />} />
//         <Route path="*" element={<Static.ErrorPage />} />
//         <Route path="signin" element={<SignInPage currentUser={currentUser} loginCallback={loginUser} />} />

//         {/* protected routes */}
//         <Route element={<ProtectedPage currentUser={currentUser} />}>
//           <Route path="chat/:channelName" element={<ChatPage currentUser={currentUser} />} />
//           {/* redirect to general channel */}
//           <Route path="chat" element={<Navigate to="/chat/general" />} />
//           <Route path="profile" element={<ProfilePage currentUser={currentUser} />}/>
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// function ProtectedPage(props) {
//   //...determine if user is logged in
//   if(props.currentUser.userId === null) { //if no user, send to sign in
//     return <Navigate to="/signin" />
//   }
//   else { //otherwise, show the child route content
//     return <Outlet />
//   }
// }


// //Slide 21
// import React, { useState, useEffect } from 'react';
// import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router';

// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// import { HeaderBar } from './HeaderBar.jsx';

// import ChatPage from './ChatPage.jsx';
// import SignInPage from './SignInPage.jsx';
// import ProfilePage from './ProfilePage.jsx';
// import * as Static from './StaticPages.jsx';

// import DEFAULT_USERS from '../data/users.json';

// //A component!
// export default function App(props) {
//   //state
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //default to null user

//   const navigateTo = useNavigate(); //navigation hook

//    //effect to run when the component first loads
//    useEffect(() => {
//     //log in a default user
//     // loginUser(DEFAULT_USERS[1])

//     const auth = getAuth();
//     //                 authenticator, a callback
//     onAuthStateChanged(auth, (firebaseUser) => {
//       if(firebaseUser) {
//         console.log("signing in as", firebaseUser.displayName)
//         console.log("firebaseuser: ", firebaseUser);
//         firebaseUser.userId = firebaseUser.uid;
//         firebaseUser.userName = firebaseUser.displayName;
//         firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
//         console.log("firebaseuser after adding fields :", firebaseUser)
//         setCurrentUser(firebaseUser);
//       }
//       else { //no user
//         console.log("signed out");
//         setCurrentUser(DEFAULT_USERS[0]); //change the null user
//       }
//     })


//   }, []) //array is list of variables that will cause this to rerun if changed

//   const loginUser = (userObj) => {
//     console.log("logging in as", userObj.userName);
//     setCurrentUser(userObj);
    
//     if(userObj.userId !== null){
//       navigateTo('/chat/general'); //go to chat after login
//     }
//   }

  
//   //what content should my App look like?
//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />

//       <Routes>
//         <Route index element={<Static.WelcomePage />} />
//         <Route path="about" element={<Static.AboutPage />} />
//         <Route path="*" element={<Static.ErrorPage />} />
//         <Route path="signin" element={<SignInPage currentUser={currentUser} loginCallback={loginUser} />} />

//         {/* protected routes */}
//         <Route element={<ProtectedPage currentUser={currentUser} />}>
//           <Route path="chat/:channelName" element={<ChatPage currentUser={currentUser} />} />
//           {/* redirect to general channel */}
//           <Route path="chat" element={<Navigate to="/chat/general" />} />
//           <Route path="profile" element={<ProfilePage currentUser={currentUser} />}/>
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// function ProtectedPage(props) {
//   //...determine if user is logged in
//   if(props.currentUser.userId === null) { //if no user, send to sign in
//     return <Navigate to="/signin" />
//   }
//   else { //otherwise, show the child route content
//     return <Outlet />
//   }
// }

//Slide 28
import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { HeaderBar } from './HeaderBar.jsx';

import ChatPage from './ChatPage.jsx';
import SignInPage from './SignInPage.jsx';
import ProfilePage from './ProfilePage.jsx';
import UserImageInFBStore from './UserImageInFBStore.jsx';
import * as Static from './StaticPages.jsx';

import DEFAULT_USERS from '../data/users.json';
// import UserImageInFBStore from './UserImageInFBStore.jsx';

//A component!
export default function App(props) {
  //state
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //default to null user

  const navigateTo = useNavigate(); //navigation hook

   //effect to run when the component first loads
   useEffect(() => {
    //log in a default user
    // loginUser(DEFAULT_USERS[1])

    const auth = getAuth();
    //                 authenticator, a callback
    onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        console.log("signing in as", firebaseUser.displayName)
        console.log("firebaseuser: ", firebaseUser);
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
        console.log("firebaseuser after adding fields :", firebaseUser)
        setCurrentUser(firebaseUser);
      }
      else { //no user
        console.log("signed out");
        setCurrentUser(DEFAULT_USERS[0]); //change the null user
      }
    })


  }, []) //array is list of variables that will cause this to rerun if changed

  const loginUser = (userObj) => {
    console.log("logging in as", userObj.userName);
    setCurrentUser(userObj);
    
    if(userObj.userId !== null){
      navigateTo('/chat/general'); //go to chat after login
    }
  }

  
  //what content should my App look like?
  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />
      {/* <UserImageInFBStore currentUser={currentUser} /> */}
      <Routes>
        <Route index element={<Static.WelcomePage />} />
        <Route path="about" element={<Static.AboutPage />} />
        <Route path="*" element={<Static.ErrorPage />} />
        <Route path="signin" element={<SignInPage currentUser={currentUser} loginCallback={loginUser} />} />
        <Route path="userimage" element={<UserImageInFBStore currentUser={currentUser} />}/>

        {/* protected routes */}
        <Route element={<ProtectedPage currentUser={currentUser} />}>
          <Route path="chat/:channelName" element={<ChatPage currentUser={currentUser} />} />
          {/* redirect to general channel */}
          <Route path="chat" element={<Navigate to="/chat/general" />} />
          <Route path="profile" element={<ProfilePage currentUser={currentUser} />}/>
          
        </Route>
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  //...determine if user is logged in
  if(props.currentUser.userId === null) { //if no user, send to sign in
    return <Navigate to="/signin" />
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}