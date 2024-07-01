import classes from "./Header.module.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { TiHomeOutline } from "react-icons/ti";

function Header() {
  return (
    <section>
      <Navbar expand="md" data-bs-theme="dark" className={classes.navbar}>
        <Container className="">
          <Navbar.Brand href="#home" className="ms-5">
            <TiHomeOutline />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="me-5">
            <Nav className="ms-auto mt-1">
              <Nav.Link href="#residencies">Residencies</Nav.Link>
              <Nav.Link href="#mission">Our Missions</Nav.Link>
              <Nav.Link href="#contat-us">Contact Us</Nav.Link>
              <Nav.Link href="#get-started">Get Started</Nav.Link>
              <Button variant="primary" size="sm" className="ms-2">
                <Nav.Link href="#contact" className="text-white p-0">
                  Contact
                </Nav.Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
