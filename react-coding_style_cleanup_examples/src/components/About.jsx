import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

export default function About( props) {
  return (
    <>
      {/* Header */}
      <header className="bg-dark text-white text-center py-4">
        <h1 className="mb-1">About Coffee Finder ☕</h1>
        <p className="mb-0">Learn more about this project</p>

        <Navbar expand="lg" bg="light" className="bg-body-tertiary mt-3">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              Coffee Finder
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>

                <Nav.Link as={Link} to="/help-me-decide">
                  Help Me Decide
                </Nav.Link>

                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* Main Content */}
      <main className="container-xl py-5">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8} xl={7}>

              <Card className="shadow-sm">
                <Card.Body>

                  <Card.Title className="mb-3">
                    About This App
                  </Card.Title>

                  <p>
                    Coffee Finder is a simple web application that allows users
                    to explore different types of coffee and tea-based drinks.
                    Each card highlights a unique beverage with an image and
                    short description to help users better understand the
                    variety of options available.
                  </p>

                  <p>
                    The goal of this app is to provide an easy-to-navigate
                    interface where users can visually compare drinks and learn
                    about what makes each one distinct — from bold
                    espresso-based beverages to creamy, spiced, and iced
                    options.
                  </p>

                  <hr />

                  <h5 className="mt-4">Created By</h5>

                  <p className="mb-0">
                    <strong>Tim Carlson</strong>
                  </p>

                </Card.Body>
              </Card>

              <div className="text-center mt-4">
                <Button as={Link} to="/" variant="dark">
                  ← Back to Coffee Finder
                </Button>
              </div>

            </Col>
          </Row>
        </Container>
      </main>

      {/* Footer */}
      <footer className="bg-light text-center py-3">
        <p className="mb-0">© 2026 Coffee Finder</p>
      </footer>
    </>
  );
}