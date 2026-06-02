
import React from 'react';

import { Navigate } from 'react-router';
import Dropdown from 'react-bootstrap/Dropdown';

import DEFAULT_USERS from '../data/users.json';

export default function SignInPage(props) {
  const currentUser = props.currentUser;
  const loginFunction = props.loginCallback;

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    console.log(whichUser);
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    loginFunction(selectedUserObj)
  }

  //convenience
  const userButtons = DEFAULT_USERS.map((userObj) => {
    if(userObj.userId === currentUser.userId){
      return null; //don't include!
    }
    return (
      <Dropdown.Item className="user-icon" key={userObj.userName} 
        name={userObj.userId} onClick={handleClick}
      >
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} />
        {userObj.userName}
      </Dropdown.Item>
    )
  })

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <p className="lead">Pick a user:</p>
        <Dropdown>
          <Dropdown.Toggle variant="light">
            <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

// //Slide 18

// import React from 'react';
// import { Navigate } from 'react-router';
// import Dropdown from 'react-bootstrap/Dropdown';

// import StyledFirebaseAuth from 'react-firebaseui/dist/StyledFirebaseAuth';

// import {GoogleAuthProvider, EmailAuthProvider, getAuth} from 'firebase/auth'

// import DEFAULT_USERS from '../data/users.json';

// const configObj = {
//   signInOptions: [
//     { 
//       provider: EmailAuthProvider.PROVIDER_ID,
//       requireDisplayName: true,
//     },
//     {
//       provider: GoogleAuthProvider.PROVIDER_ID
//     }
//   ],
//   signInFlow: 'popup',
//   callbacks: {
//     signInSuccessWithAuthResult: () => false //don't do anything special on signin
//   },
//   credentialHelper: 'none'
// }

// export default function SignInPage(props) {
//   const currentUser = props.currentUser;
//   const loginFunction = props.loginCallback;

//   const auth = getAuth(); //the authenticator

//   // const handleClick = (event) => {
//   //   const whichUser = event.currentTarget.name //access button, not image
//   //   console.log(whichUser);
//   //   const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

//   //   loginFunction(selectedUserObj)
//   // }

//   // //convenience
//   // const userButtons = DEFAULT_USERS.map((userObj) => {
//   //   if(userObj.userId === currentUser.userId){
//   //     return null; //don't include!
//   //   }
//   //   return (
//   //     <Dropdown.Item className="user-icon" key={userObj.userName} 
//   //       name={userObj.userId} onClick={handleClick}
//   //     >
//   //       <img src={userObj.userImg} alt={userObj.userName + " avatar"} />
//   //       {userObj.userName}
//   //     </Dropdown.Item>
//   //   )
//   // })

//   return (
//     <div className="card bg-light">
//       <div className="container card-body">
//       <StyledFirebaseAuth  uiConfig={configObj} firebaseAuth={auth} />

//         {/* <p className="lead">Pick a user:</p>

//          <Dropdown>
//           <Dropdown.Toggle variant="light">
//             <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
//           </Dropdown.Toggle>
//           <Dropdown.Menu>
//             {userButtons}
//           </Dropdown.Menu>
//         </Dropdown> */}
//       </div>
//     </div>
//   )
// }

// //Slide 23

// import React from 'react';
// import { Navigate } from 'react-router';
// import StyledFirebaseAuth from 'react-firebaseui/dist/StyledFirebaseAuth';
// import { GoogleAuthProvider, EmailAuthProvider, getAuth } from 'firebase/auth'


// const configObj = {
//   signInOptions: [
//     {
//       provider: EmailAuthProvider.PROVIDER_ID,
//       requireDisplayName: true,
//     },
//     {
//       provider: GoogleAuthProvider.PROVIDER_ID
//     }
//   ],
//   signInFlow: 'popup',
//   callbacks: {
//     signInSuccessWithAuthResult: () => false //don't do anything special on signin
//   },
//   credentialHelper: 'none'
// }

// export default function SignInPage(props) {
//   const currentUser = props.currentUser;
//   const loginFunction = props.loginCallback;

//   const auth = getAuth(); //the authenticator

//     //little hacky
//   if (currentUser.userId) { //if signed in
//     return <Navigate to="/chat/general" />
//   }

//   return (
//     <div className="card bg-light">
//       <div className="container card-body">
//         <StyledFirebaseAuth uiConfig={configObj} firebaseAuth={auth} />

//       </div>
//     </div>
//   )
// }