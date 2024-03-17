import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  const width = useTransform(scrollY, [0, 200], ["8rem", "4rem"]);

  return (
    <Navbar
      sticky="top"
      expand="sm"
      expanded={expanded}
      className="header"
    >
      <Container fluid>
        <Link
          to="/"
          className="navbar-brand"
        >
          <img
            src={Logo}
            className="navbar-logo"
            alt="logo"
          />
          Ruia Fabrics
        </Link>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={handleToggle}
          className="custom-toggler"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleClose}
            >
              Home
            </Nav.Link>
            <NavDropdown
              title="About Us"
              id="about-us-dropdown"
            >
              <NavDropdown.Item>
                <HashLink
                  smooth
                  to="/AboutUs#OurStory"
                  onClick={handleClose}
                >
                  Our Story
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <HashLink
                  smooth
                  to="/AboutUs#OurManagement"
                  onClick={handleClose}
                >
                  Our Management
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <HashLink
                  smooth
                  to="/AboutUs#WhyRuia"
                  onClick={handleClose}
                >
                  Why Ruia
                </HashLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <HashLink
                  smooth
                  to="/AboutUs#ExportLocations"
                  onClick={handleClose}
                >
                  Export Locations
                </HashLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/OurFabrics"
              onClick={handleClose}
            >
              Our Fabrics
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/ContactUs"
              onClick={handleClose}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
