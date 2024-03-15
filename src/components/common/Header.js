import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import Logo from "../../logo.svg";
import "../../styles/Header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, useScroll, useTransform } from "framer-motion";

const Navigationbar = () => {
  const { scrollY } = useScroll();

  const width = useTransform(scrollY, [0, 200], ["8rem", "4rem"]);
  // const background = useTransform(
  //   scrollY,
  //   [0, 1],
  //   ["var(--honeydue)", "rgb(0,0,0,0.7)"]
  // );

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
      {["sm"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          expand={expand}
          className="header"
        >
          <div
            className="container-fluid"
            // style={{ background }}
            // transition={{ duration: 2, type: "inertia" }}
          >
            <Link to="/">
              <img
                className="navbar-logo"
                src={Logo}
                alt="logo "
              />
            </Link>
            <Navbar.Brand href="/">Ruia Fabrics</Navbar.Brand>

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
                <Nav className="justify-content-around">
                  <Nav.Link href="/">Home</Nav.Link>

                  <NavDropdown
                    title="About Us"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item>
                      <HashLink
                        smooth
                        to="/AboutUs#OurStory"
                      >
                        <h5>Our Story</h5>
                      </HashLink>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/AboutUs#OurManagement">
                      <HashLink
                        smooth
                        to="/AboutUs#OurManagement"
                      >
                        <h5>Our Management</h5>
                      </HashLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <HashLink
                        smooth
                        to="/AboutUs#WhyRuia"
                      >
                        <h5>Why Ruia</h5>
                      </HashLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <HashLink
                        smooth
                        to="/AboutUs#ExportLocations"
                      >
                        <h5>Export Locations</h5>
                      </HashLink>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider />

                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link
                    href="/"
                    className="navbar-logo-link-md"
                  >
                    <motion.img
                      src={Logo}
                      alt="logo "
                      className="navbar-logo-md"
                      style={{ width }}
                      transition={{ duration: 2, type: "inertia" }}
                    />
                  </Nav.Link>
                  <Nav.Link href="/OurFabrics">Our Fabrics</Nav.Link>
                  <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </>
  );
};
export default Navigationbar;
