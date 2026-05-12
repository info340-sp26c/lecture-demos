
import { MyButton, PizzaCounter, PizzaList } from './EventsAndStateExamples.jsx';

function App(props) {
  return (
    <div className="container p-3">
      <section className="mb-3">
        <MyButton />
      </section>

      <section className="card mb-3">
        <div className="card-body">
          <PizzaCounter />
        </div>
      </section>

      <section className="card mb-3">
        <div className="card-body">
          <PizzaList />
        </div>
      </section>
    </div>
  );
}

// // Conditional formatting examples

// import { useState } from 'react';

// function App(props) {

//   // visibility state
//   const [showButton, setShowButton] = useState(true);
//   const [showCounter, setShowCounter] = useState(true);
//   const [showList, setShowList] = useState(true);

//   // pizza array state
//   const [pizzaTypes, setPizzaTypes] = useState([
//     "Cheese",
//     "Pepperoni",
//     "Hawaiian"
//   ]);

//   console.log("pizzaTypes: ", pizzaTypes);

//   function handleToggleButton() {
//     setShowButton(!showButton);
//   }

//   function handleToggleCounter() {
//     setShowCounter(!showCounter);
//   }

//   function handleToggleList() {
//     setShowList(!showList);
//   }

//   return (
//     <div className="container p-3">

//       <h1>Conditional Rendering Demo</h1>

//       <div className="mb-4">

//         <button
//           className="btn btn-primary me-2"
//           onClick={handleToggleButton}
//         >
//           Toggle Button Component
//         </button>

//         <button
//           className="btn btn-success me-2"
//           onClick={handleToggleCounter}
//         >
//           Toggle Counter Component
//         </button>

//         <button
//           className="btn btn-danger"
//           onClick={handleToggleList}
//         >
//           Toggle List Component
//         </button>

//       </div>

//       {showButton &&
//         <section className="card mb-3">
//           <div className="card-body">
//             <MyButton />
//           </div>
//         </section>
//       }

//       {showCounter &&
//         <section className="card mb-3">
//           <div className="card-body">
//             <PizzaCounter />
//           </div>
//         </section>
//       }

//       {showList &&
//         <section className="card mb-3">
//           <div className="card-body">
//             <PizzaList pizzaArray={pizzaTypes} />
//           </div>
//         </section>
//       }

//     </div>
//   );
// }

export default App
