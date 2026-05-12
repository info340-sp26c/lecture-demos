
// (1) Simple event listener example

// (A) Add onClick event listener to button
import { useState } from "react";
export function MyButton(props) {

  const handleClick = (event) => {
    console.log("clicky clicky");
  }

  return <button className="btn btn-outline-danger" onClick={handleClick}>Click me!</button>;
}

// // (B) Add count to the button text, but it doesn't update when we click the button!
// export function MyButton(props) {
//   let clickCount = 0;

//   const handleClick = (event) => {
//     console.log("clicky clicky");
//   }

//   return <button className="btn btn-outline-danger" onClick={handleClick}>Click me! ({clickCount})</button>;
// }

// // // (C) - Use useState hook to manage click count
// import { useState } from "react";

// export function MyButton(props) {
//   const [clickCount, setClickCount] = useState(0);

//   const handleClick = (event) => {
//     console.log("clicky clicky");
//     setClickCount(clickCount + 1);
//   }

//   return <button className="btn btn-outline-danger" onClick={handleClick}>Click me! ({clickCount})</button>;
// }


// (II) Events and State example with primitive value in state
export function PizzaCounter(props) {

  const numPizzas = 3;

    function handleAddPizza() {
    console.log("Adding a slice!");
  }

  function handleRemovePizza() {
    console.log("Removing slice!");
  }

  const pizzaArray = [];

  for(let i = 0; i < numPizzas; i++) {
    pizzaArray.push(
      <span>🍕</span>
    );
  }

  return (
    <div>
      <h2 className="text-light bg-primary px-1">Pizza Count: {numPizzas}</h2>
      
      <button type="button" className="btn btn-outline-primary" onClick={handleAddPizza}>
        Add a Slice
      </button>
      
      <button type="button" className="btn btn-outline-success" onClick={handleRemovePizza}>
        Remove a Slice
      </button>      
      
      <div>
        {pizzaArray}
      </div>
    </div>
  );
}

// //- point 1
// React requires a 'key' prop for each element when rendering an array of JSX elements.


// //- point 2
// Just incrementing/decrementing numPizzas doesn't work.

// numPizzas++;
// console.log(numPizzas);

// numPizzas--;
// console.log(numPizzas);

// //- point 3 - we have to use the useState hook.

// import { useState } from "react";

// useState() returns an array.

// const pizzaStateArray = useState(3);

// const numPizzas = pizzaStateArray[0];
// const setNumPizzas = pizzaStateArray[1];

// // Use array destructuring
// const [numPizzas, setNumPizzas] = useState(3);

// //- point 4

// function handleAddPizza() {
//   setNumPizzas(numPizzas + 1);
// }

// function handleRemovePizza() {
//   setNumPizzas(numPizzas - 1);
// }


// // (III) Arrays and Objects as State example

// // import { useState } from "react";

export function PizzaList(props) {

  const [pizzaArray, setPizzaArray] = useState([
    "Cheese",
    "Pepperoni",
    "Hawaiian"
  ]);


  // console.log("pizzaType props:", props.pizzaArray);
  //   const [pizzaArray, setPizzaArray] = useState(props.pizzaArray);

  function handleAddPizza() {

    pizzaArray.push("Veggie");
    setPizzaArray(pizzaArray);
    // const pizzaArrayCopy = [...pizzaArray];
    // pizzaArrayCopy.push("Veggie");
    // setPizzaArray(pizzaArrayCopy);
    console.log("Adding a pizza!");

  }


  function handleRemovePizza() {

    if(pizzaArray.length > 0) {
        pizzaArray.pop();
        setPizzaArray(pizzaArray);
        // const pizzaArrayCopy = [...pizzaArray];
        // pizzaArrayCopy.pop();
        // setPizzaArray(pizzaArrayCopy);
        console.log("Removing a pizza!");
    }
  }

  const pizzaListItems = [];

  for(let i = 0; i < pizzaArray.length; i++) {

    pizzaListItems.push(
      <li key={i}>
        {pizzaArray[i]}
      </li>
    );
  }

  return (
    <div>

      <h2 className="text-light bg-success px-1">
        Type of PizzasCount: {pizzaArray.length}
      </h2>

      <button
        type="button"
        className="btn btn-outline-primary me-2"
        onClick={handleAddPizza}
      >
        Add Pizza
      </button>

      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={handleRemovePizza}
      >
        Remove Pizza
      </button>

      <ul className="mt-3">

        {pizzaArray.length === 0 &&
          <p>No pizzas left!</p>
        }

        {pizzaListItems}

      </ul>

    </div>
  );
}