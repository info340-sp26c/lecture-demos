import React from 'react';
import { Link } from 'react-router-dom';

const drinks = [
  {
    name: 'Latte',
    image: 'images/latte.jpg',
    description: 'Espresso with steamed milk and light foam.'
  },
  {
    name: 'Cold Brew',
    image: 'images/cold-brew.jpg',
    description: 'Smooth, slow-steeped coffee served cold.'
  },
  {
    name: 'Cappuccino',
    image: 'images/cappuccino.jpg',
    description: 'Espresso with steamed milk and thick foam.'
  },
  {
    name: 'Americano',
    image: 'images/americano.jpg',
    description: 'Espresso diluted with hot water for a smooth, bold flavor.'
  },
  {
    name: 'Mocha',
    image: 'images/mocha.jpg',
    description: 'Espresso blended with chocolate and steamed milk.'
  },
  {
    name: 'Flat White',
    image: 'images/flat-white.jpg',
    description: 'Velvety microfoam poured over rich espresso.'
  },
  {
    name: 'Macchiato',
    image: 'images/macchiato.jpg',
    description: 'Espresso “stained” with a small amount of foam.'
  },
  {
    name: 'Iced Coffee',
    image: 'images/iced-coffee.jpg',
    description: 'Freshly brewed coffee chilled and served over ice.'
  },
  {
    name: 'Chai Latte',
    image: 'images/chai-latte.jpg',
    description: 'Spiced black tea blended with steamed milk.'
  },
  {
    name: 'Matcha Latte',
    image: 'images/matcha-latte.jpg',
    description: 'Japanese green tea powder whisked with steamed milk.'
  }
];

export default function Home() {
  return (
    <>
      <header className="bg-dark text-white text-center py-4">
        <h1 className="mb-1">Coffee Finder ☕</h1>
        <p className="mb-0">Find your next favorite drink</p>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Coffee Finder
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/help-me-decide">
                    Help Me Decide
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container py-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 g-lg-4">
          {drinks.map((drink) => (
            <div className="col" key={drink.name}>
              <div className="card h-100">
                <img
                  src={drink.image}
                  className="card-img-top"
                  alt={drink.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{drink.name}</h5>
                  <p className="card-text">{drink.description}</p>
                  <Link to="/help-me-decide" className="btn btn-dark w-100">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-light text-center py-3">
        <p className="mb-0">© 2026 Coffee Finder</p>
      </footer>
    </>
  );
}