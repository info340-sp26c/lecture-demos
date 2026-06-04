import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    NavDropdown,
    Button,
    ListGroup
} from 'react-bootstrap';

export default function CoffeeTypeDetail(props) {
    const coffeeData = props.coffeeData;
    const { coffeeId } = useParams();

    const coffee = coffeeData.find((item) => item.id === coffeeId);

    if (!coffee) {
        return (
            <Container className="py-5">
                <h2>Coffee not found</h2>
                <p>We couldn’t find a coffee with that name.</p>
                <Button as={Link} to="/" variant="dark">
                    Back to Drinks
                </Button>
            </Container>
        );
    }

    // const drinks = coffeeData.map((drink) => (
    //     <NavDropdown.Item
    //         key={drink.id}
    //         as={Link}
    //         to={`/coffee/${drink.id}`}
    //     >
    //         {drink.name}
    //     </NavDropdown.Item>
    // ));

    // const CoffeeFunFacts = coffee.funFacts.map((fact) => (
    //     <li key={fact}>{fact}</li>
    // ));

    return (
        <>
            <header className="bg-dark text-white text-center py-4">
                <h1 className="mb-1">{coffee.name} ☕</h1>
                <p className="mb-0">{coffee.tagline}</p>

                <Navbar expand="lg" bg="light" className="bg-body-tertiary mt-3">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">
                            Coffee Finder
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/help-me-decide">Help Me Decide</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>

                                <NavDropdown title="Drinks" id="drinks-dropdown">
                                    {coffeeData.map((drink) => (
                                        <NavDropdown.Item
                                            key={drink.id}
                                            as={Link}
                                            to={`/coffee/${drink.id}`}
                                        >
                                            {drink.name}
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <main className="py-5">
                <Container>
                    <Row className="g-4">
                        <Col xs={12} md={6}>
                            <img
                                src={coffee.image}
                                alt={coffee.name}
                                className="img-fluid rounded shadow-sm"
                            />
                        </Col>

                        <Col xs={12} md={6}>
                            <h2>What is a {coffee.name}?</h2>
                            <p>{coffee.whatIsIt}</p>

                            <hr />

                            <h4 className="mt-4">Nutrition & Info (16oz)</h4>

                            <ListGroup variant="flush" className="mb-4">
                                <ListGroup.Item>
                                    <strong>Calories:</strong> {coffee.nutrition.calories}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Sugar:</strong> {coffee.nutrition.sugar}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Caffeine:</strong> {coffee.nutrition.caffeine}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Milk Type:</strong> {coffee.nutrition.milkType}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Espresso Shots:</strong> {coffee.nutrition.espressoShots}
                                </ListGroup.Item>
                            </ListGroup>

                            <h4>Flavor Profile</h4>
                            <p>{coffee.flavorProfile}</p>

                            <h4 className="mt-4">Fun Facts</h4>
                            <ul>
                                {coffee.funFacts.map((fact) => (
                                    <li key={fact}>{fact}</li>
                                ))}

                            </ul>

                            <div className="mt-4">
                                <Button as={Link} to="/" variant="dark" className="me-2">
                                    ← Back to Drinks
                                </Button>
                                <Button as={Link} to="/about" variant="outline-dark">
                                    About
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer className="bg-light text-center py-3">
                <p className="mb-0">© 2026 Coffee Finder</p>
            </footer>
        </>
    );
}