import React from "react";
import Logo from "../../logo.svg";
import { Link } from "react-router-dom";
import "../../styles/FooterStyles.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <Container fluid>
      <Col className="footer">
        <Row>
          <Col>
            <h3 className="footer-header">
              Solving the climate emergency starts today
            </h3>
          </Col>
          <Col>
            <Row className="ButtonRow justify-content-end align-items-end mt-2">
              <Col sm="auto">
                <Button className="footerBtn">Contact Sales</Button>
              </Col>
              <Col sm="auto">
                <Button
                  className="footerBtnWhite"
                  variant="outline-light"
                >
                  Explore Projects
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
              width="64px"
              alt="alphabet greens logo"
            ></img>
          </Col>
          <Col>
            <h5>Services</h5>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </Col>
          <Col>
            <h5>Services</h5>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </Col>
          <Col>
            <h5>Services</h5>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </Col>
          <Col>
            <h5>About</h5>
            <ul>
              <li>About Us</li>
              <li>Manifesto</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col>
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
          <Col lg={4}>© Copyright 2023</Col>
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
