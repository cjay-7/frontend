import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../logo.svg";
import "../../styles/HeaderStyles.css";

const Navigationbar = () => {
  return (
    // <Navbar
    //   collapseOnSelect
    //   expand="sm"
    // >
    //   <Link
    //     to="/"
    //     className="navbar-link"
    //   >
    //     <img
    //       src={Logo}
    //       className="navbar-logo"
    //       alt="Ruia Fabrics"
    //     ></img>
    //   </Link>
    //   <Navbar.Toggle
    //     aria-controls="navbarScroll"
    //     data-bs-target="#navbarScroll"
    //   />
    //   <Navbar.Collapse id="navbarScroll">
    //     <Nav>
    //       <NavLink
    //         eventKev="1"
    //         as={Link}
    //         to="/"
    //       >
    //         Home
    //       </NavLink>
    //       <NavLink
    //         eventKev="2"
    //         as={Link}
    //         to="/about"
    //       >
    //         About Us
    //       </NavLink>
    //       <NavLink
    //         to="/"
    //         className="navbar-link"
    //       >
    //         <img
    //           src={Logo}
    //           className="md-navbar-logo"
    //           alt="Ruia Fabrics"
    //         ></img>
    //       </NavLink>
    //       <NavLink
    //         eventKey="3"
    //         as={Link}
    //         to="/fabrics"
    //       >
    //         Our Fabrics
    //       </NavLink>

    //       <NavLink
    //         eventKey="4"
    //         as={Link}
    //         to="/contact"
    //       >
    //         Contact Us
    //       </NavLink>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="header"
        >
          <Container fluid>
            <img
              className="navbar-logo"
              src={Logo}
              alt="logo "
            />
            <Navbar.Brand href="#">Ruia Fabrics</Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Ruia Fabrics
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-around  pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>

                  <NavDropdown
                    title="About Us"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      <div>
                        <h5>Our Story</h5>
                      </div>
                      <ul>
                        <li></li>
                      </ul>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action4">
                      <div>
                        <h5>Export Locations</h5>
                      </div>
                      <ul>
                        <li></li>
                      </ul>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    href="#action0"
                    className="navbar-logo-link-md"
                  >
                    <img
                      src={Logo}
                      alt="logo "
                      className="navbar-logo-md"
                    />
                  </Nav.Link>
                  <Nav.Link href="#action3">Our Fabrics</Nav.Link>
                  <Nav.Link href="#action4">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
export default Navigationbar;
