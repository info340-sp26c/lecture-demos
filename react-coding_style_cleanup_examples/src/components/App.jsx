
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import CoffeeTypeDetail from './CoffeeTypeDetail';
import About from "./About";

export default function App() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch('/coffeeData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCoffeeData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching coffee data:', error);
        setErrorMessage('Could not load coffee data.');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p className="m-3">Loading coffee data...</p>;
  }

  if (errorMessage) {
    return <p className="m-3">{errorMessage}</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home coffeeData={coffeeData} />} />
      <Route
        path="/coffee/:coffeeId"
        element={<CoffeeTypeDetail coffeeData={coffeeData} />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}