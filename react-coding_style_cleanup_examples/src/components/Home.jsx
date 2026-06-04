import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';

export function Home(props) {
  const coffeeData = props.coffeeData;
  const navigate = useNavigate();

  const handleClick = (event) => {
    const coffeeId = event.currentTarget.dataset.coffeeId;
    console.log("clicked coffeeId:", coffeeId);
    navigate(`/coffee/${coffeeId}`);
  };


  // const coffeeCards = coffeeData.map((drink) => (
  //             <Col key={drink.id}>
  //               <Card
  //                 className="h-100"
  //                 style={{ cursor: "pointer" }}
  //                 data-coffee-id={drink.id}
  //                 onClick={handleClick}
  //               >
  //                 <Card.Img variant="top" src={drink.image} alt={drink.name} />

  //                 <Card.Body>
  //                   <Card.Title>{drink.name}</Card.Title>
  //                   <Card.Text>{drink.shortDescription}</Card.Text>
  //                 </Card.Body>
  //               </Card>
  //             </Col>
  //           ))

  // const drinks = coffeeData.map((drink) => (
  //   <NavDropdown.Item
  //     key={drink.id}
  //     as={Link}
  //     to={`/coffee/${drink.id}`}
  //   >
  //     {drink.name}
  //   </NavDropdown.Item>
  // ))



  return (
    <>
      <header className="bg-dark text-white text-center py-4">
        <h1 className="mb-1">Coffee Finder ☕</h1>
        <p className="mb-0">Find your next favorite drink</p>

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

      <main className="py-4">
        <Container>
          <Row xs={1} sm={2} md={3} lg={5} className="g-3 g-lg-4">
            {coffeeData.map((drink) => (
              <Col key={drink.id}>
                <Card
                  className="h-100"
                  style={{ cursor: "pointer" }}
                  // className="h-100 clickable-card"
                  data-coffee-id={drink.id}
                  onClick={(event) => {
                    const coffeeId = event.currentTarget.dataset.coffeeId;
                    navigate(`/coffee/${coffeeId}`);
                  }}
                // onClick={handleClick}
                >
                  <Card.Img variant="top" src={drink.image} alt={drink.name} />

                  <Card.Body>
                    <Card.Title>{drink.name}</Card.Title>
                    <Card.Text>{drink.shortDescription}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}

          </Row>
        </Container>
      </main>

      <footer className="bg-light text-center py-3">
        <p className="mb-0">© 2026 Coffee Finder</p>
      </footer>
    </>
  );
}