import React from "react";
import Logo from "../../logo-white.svg";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <Container fluid>
      <Col className="footer">
        <Row className="align-items-center">
          <Col
            sm={12}
            md={6}
          >
            <h3 className="footer-header">Where Quality Meets Creativity</h3>
          </Col>
          <Col
            sm={12}
            md={6}
          >
            <Row className="ButtonRow justify-content-end align-items-end ">
              <Col>
                <Button
                  variant="light"
                  className="footerBtn"
                >
                  <Link to="/ContactUs">Contact Sales</Link>
                </Button>
              </Col>
              <Col>
                <Button
                  className="footerBtnWhite"
                  variant="outline-light"
                >
                  <Link to="/OurFabrics">Explore Fabrics</Link>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="footer-hr mb-4" />
        <Row className="footer-sitemap">
          <Col>
            <img
              src={Logo}
              alt="Ruia White"
            ></img>
          </Col>
          <Col>
            <h5>Home</h5>
            <ul>
              <li>
                <HashLink
                  smooth
                  to="/#Hero"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#WhoAreWe"
                >
                  Who We Are
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#Usp"
                >
                  Our USP
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/#HomeFabrics"
                >
                  Our Fabrics
                </HashLink>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>About</h5>
            <ul>
              <li>
                <HashLink
                  smooth
                  to="/AboutUs#OurStory"
                >
                  Our Story
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/AboutUs#OurManagement"
                >
                  Our Management
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/AboutUs#WhyRuia"
                >
                  Why Ruia Fabrics
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/AboutUs#ExportLocations"
                >
                  Export Locations
                </HashLink>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Our Fabrics</h5>
            <ul>
              <li>
                <HashLink
                  smooth
                  to="/OurFabrics#OurFabrics"
                >
                  Our Fabrics
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/OurFabrics#AllFabrics"
                >
                  All Fabrics
                </HashLink>
              </li>
            </ul>
          </Col>
          <Col>
            <Link
              to="/ContactUs"
              className="text-decoration-none"
            >
              <h5>Contact Us</h5>
            </Link>
          </Col>

          <Col className="socials-col">
            <h5>Socials</h5>
            <Row className="footer-socials ">
              <Col>
                <Link href=" ">
                  <FontAwesomeIcon
                    className="BannerBtnIcon"
                    icon="fa-brands fa-facebook"
                  />
                </Link>
              </Col>
              <Col>
                <Link href=" ">
                  <FontAwesomeIcon
                    className="BannerBtnIcon"
                    icon="fa-brands fa-instagram"
                  />
                </Link>
              </Col>
              <Col>
                <Link href=" ">
                  <FontAwesomeIcon
                    className="BannerBtnIcon"
                    icon="fa-brands fa-twitter"
                  />
                  {/* <FontAwesomeIcon
                    className="BannerBtnIcon"
                    icon="fa-brands fa-twitter "
                  /> */}
                </Link>
              </Col>
              <Col>
                <Link href=" ">
                  <FontAwesomeIcon
                    className="BannerBtnIcon"
                    icon="fa-brands fa-linkedin"
                  />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="footer-hr mb-4" />
        <Row className="footer-bottom justify-content-between">
          <Col lg={4}>© Copyright 2024</Col>
          <Col lg={5}>
            <Row className="justify-content-end">
              <Col lg={3}>
                <Link>Privacy policy</Link>
              </Col>
              <Col lg={3}>
                <Link>Terms of service</Link>
              </Col>
              <Col lg={3}>
                <Link>Legal Notice</Link>
              </Col>
              <Col lg={3}>
                <Link>Cookies policy</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
