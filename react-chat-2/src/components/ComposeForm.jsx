import React from 'react';

export function ComposeForm(props) {

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea className="form-control" rows="2" placeholder="Type a new message"></textarea>
        <button className="btn btn-secondary" type="button">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );  
}

// //Slide 31 React Form Inputs (example)
// import React, { useState } from 'react';

// export function ComposeForm(props) {

//    // const typedValue = ""
//   const [typedValue, setTypedValue] = useState("");

//   const handleChange = (event) => {
    
//     const value = event.target.value;
//     console.log("event:", event)
//     console.log("user typed:", value);
//     setTypedValue(value); //update state and rerender
//   }

//   const handleSubmit = (event) => {
//     console.log("submit the form");
//     console.log("post", typedValue);
//   }

//   return (
//     <form className="my-2">
//       <div className="input-group">
//         <textarea
//           className="form-control" rows="2"
//           placeholder="Type a new message"
//           value={typedValue}
//           // value="joeeeeee"

//           onChange={handleChange}>
//         </textarea>
//         <button className="btn btn-secondary" type="button" onClick={handleSubmit} >
//           <span className="material-icons">send</span>
//         </button>
//       </div>
//     </form>
//   );
// }

// //slide 38 - React Form Inputs Example
// import React, { useState } from 'react';

// export function ComposeForm(props) {
//   // const typedValue = ""
//   const [typedValue, setTypedValue] = useState("");

//   const handleChange = (event) => {
//     const value = event.target.value;
//     console.log("user typed:", value);
//     setTypedValue(value); //update state and rerender
//   }

//   const handleSubmit = (event) => {
//     console.log("submit the form");
//     console.log("post", typedValue);
//     props.addMessageCallback(typedValue);
//   }

//   return (
//     <form className="my-2">
//       <div className="input-group">
//         <textarea
//           className="form-control" rows="2"
//           placeholder="Type a new message"
//           value={typedValue}
//           onChange={handleChange}>
//         </textarea>
//         <button className="btn btn-secondary" type="button" onClick={handleSubmit} >
//           <span className="material-icons">send</span>
//         </button>
//       </div>
//     </form>
//   );
// }

// //slide 35 (36 and 37) - Move state up to App
// import React, { useState } from 'react';

// export function ComposeForm(props) {
//   // const typedValue = ""
//   const [typedValue, setTypedValue] = useState("");

//   const handleChange = (event) => {
//     const value = event.target.value;
//     console.log("user typed:", value);
//     setTypedValue(value); //update state and rerender
//   }

//   const handleSubmit = (event) => {
//     console.log("submit the form");
//     console.log("post", typedValue);
//     props.addMessageCallback(typedValue);
//   }

//   return (
//     <form className="my-2">
//       <div className="input-group">
//         <textarea
//           className="form-control" rows="2"
//           placeholder="Type a new message"
//           value={typedValue}
//           onChange={handleChange}>
//         </textarea>
//         <button className="btn btn-secondary" type="button" onClick={handleSubmit} >
//           <span className="material-icons">send</span>
//         </button>
//       </div>
//     </form>
//   );
// }