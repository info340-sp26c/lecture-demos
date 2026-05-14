import React, { useState } from 'react';

export function ComposeForm(props) {
  const [typedValue, setTypedValue] = useState("");

  const handleChange = (event) => {
    const inputtedValue = event.target.value;
    setTypedValue(inputtedValue); //update state and re-render!
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting", typedValue);
    const userObj = { userId: "parrot", userName: "Parrot", userImg: "/img/Penguin.png" }
    props.addMessageCallback(userObj, typedValue, "general")
    setTypedValue(""); //empty the input!

  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea className="form-control" rows="2" 
          placeholder="Type a new message" 
          onChange={handleChange} value={typedValue}></textarea>
        <button className="btn btn-secondary" type="submit">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}

// // Slide 21 - get the current user from prop, then add the correct pic in the control
// import React, { useState } from 'react';

// export function ComposeForm(props) {
//   const [typedValue, setTypedValue] = useState("");

//   const currentUser = props.currentUser;

//   const handleChange = (event) => {
//     const inputtedValue = event.target.value;
//     setTypedValue(inputtedValue); //update state and re-render!
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("submitting", typedValue);

//     const userObj = { userId: "parrot", userName: "Parrot", userImg: "/img/Penguin.png" }
//     props.addMessageCallback(userObj, typedValue, "general")
//     setTypedValue(""); //empty the input!
//   }

//   return (
//     <form className="my-2" onSubmit={handleSubmit}>
//       <div className="input-group">
//         {<img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />}
//         <textarea className="form-control" rows="2" 
//           placeholder="Type a new message" 
//           onChange={handleChange} value={typedValue}></textarea>
//         <button className="btn btn-secondary" type="submit">
//           <span className="material-icons">send</span>
//         </button>
//       </div>
//     </form>
//   );
// }

// // Slide 24 - use the current user from the prop in callback
// import React, { useState } from 'react';

// export function ComposeForm(props) {
//   const [typedValue, setTypedValue] = useState("");

//   const currentUser = props.currentUser;

//   const handleChange = (event) => {
//     const inputtedValue = event.target.value;
//     setTypedValue(inputtedValue); //update state and re-render!
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("submitting", typedValue);

//     // const userObj = { userId: "parrot", userName: "Parrot", userImg: "/img/Penguin.png" }
//     props.addMessageCallback(currentUser, typedValue, "general")
//     setTypedValue(""); //empty the input!
//   }

//   return (
//     <form className="my-2" onSubmit={handleSubmit}>
//       <div className="input-group">
//         {<img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />}
//         <textarea className="form-control" rows="2" 
//           placeholder="Type a new message" 
//           onChange={handleChange} value={typedValue}></textarea>
//         <button className="btn btn-secondary" type="submit">
//           <span className="material-icons">send</span>
//         </button>
//       </div>
//     </form>
//   );
// }


// // Slide 25 - remove the addmessagecallback arguments because we are using the app statevars
// import React, { useState } from 'react';

// export function ComposeForm(props) {
//   const [typedValue, setTypedValue] = useState("");

//   const currentUser = props.currentUser;

//   const handleChange = (event) => {
//     const inputtedValue = event.target.value;
//     setTypedValue(inputtedValue); //update state and re-render!
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("submitting", typedValue);

//     // const userObj = { userId: "parrot", userName: "Parrot", userImg: "/img/Penguin.png" }
//     props.addMessageCallback(typedValue)
//     setTypedValue(""); //empty the input!
//   }

//   return (
//     <form className="my-2" onSubmit={handleSubmit}>
//       <div className="input-group">
//         {currentUser.userId && <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />}
//         <textarea className="form-control" rows="2" 
//           placeholder="Type a new message" 
//           onChange={handleChange} value={typedValue}></textarea>
//         <button className="btn btn-secondary" type="submit"
//         disabled={currentUser.userId === null}>
//           <span className="material-icons">send</span>
//         </button>
//       </div>
//     </form>
//   );
// }