export function HeaderBar(props){
    return (
      
      
        <header className="text-light bg-primary py1">
            <h1> React Messenger</h1>
        </header>
    )
}

// //Example Slide 29

// import { useState } from 'react';

// export function HeaderBar(props) {
   

//     const [count, setCount] = useState(0);
//     // let count = 0;

// const handleClick = (event) => {
    
//     setCount(count+1);
//     console.log("You Clicked me!!!", count)
//     // count = count + 1;
// }

//     return (
//         <header className="text-light bg-primary py1">
//             <div className="d-flex">
//                 <div>
//                     <h1> React Chat</h1>
//                 </div>
//                 <div className="d-flex mx-4">
//                     <button type="button" className="btn btn-danger" onClick={handleClick}>Click Me!</button>
//                 </div>
//                 <div className="d-flex mx-4">
//                     <p className="font-weight-bold display-4">Click Count: {count}</p>
                    
//                 </div>

//             </div>
//         </header>
//     )
// }