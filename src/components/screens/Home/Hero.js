import React from "react";
import { Container, Row, Image, Carousel } from "react-bootstrap";
import "../../../styles/HomeScreen.css";
import Anita from "../../../assets/images/brands/anita.png";
import Ritu from "../../../assets/images/brands/ritu.png";
import Sabyasachi from "../../../assets/images/brands/sabyasachi.png";
import Pantaloons from "../../../assets/images/brands/pantaloons.webp";
import Max from "../../../assets/images/brands/max.png";
import Trends from "../../../assets/images/brands/trends.png";
import Westside from "../../../assets/images/brands/westside.webp";
import Myntra from "../../../assets/images/brands/myntra.png";

const Hero = () => {
  return (
    <div
      className="hero-container"
      id="Hero"
    >
      <Carousel
        fade
        indicators={false}
        pause={false}
        wrap={false}
      >
        <Carousel.Item interval={800}>
          <div className="hero-slide">
            <h1>Where Quality Meets Creativity</h1>
            <div className="h2-container opacity-5">
              <h2>
                We meticulously craft each meter of <span>fabric</span>,
              </h2>
              <h2>from creation and weaving to dyeing and finishing.</h2>
              <h2>
                Our process is designed to awaken the most distinguished
                qualities,
              </h2>
              <h2>
                Catering to the discerning needs of textile editors and
                wholesalers both nationally and internationally
              </h2>
            </div>
            <Container className="opacity-0">
              <Row className="premium-brands">
                <Image src={Anita} />
                <Image src={Ritu} />
                <Image src={Sabyasachi} />
              </Row>
              <Row className="brands">
                <Image src={Pantaloons} />
                <Image src={Max} />
                <Image src={Trends} />
                <Image src={Westside} />
                <Image src={Myntra} />
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <div className="hero-slide">
            <h1>Where Quality Meets Creativity</h1>
            <div className="h2-container">
              <h2>
                We meticulously craft each meter of <span>fabric</span>,
              </h2>
              <h2 className="opacity-5">
                from creation and weaving to dyeing and finishing.
              </h2>
              <h2 className="opacity-5">
                Our process is designed to awaken the most distinguished
                qualities,
              </h2>
              <h2 className="opacity-5">
                Catering to the discerning needs of textile editors and
                wholesalers both nationally and internationally
              </h2>
            </div>
            <Container className="opacity-0">
              <Row className="premium-brands justify-content-around align-items-center">
                <Image src={Anita} />
                <Image src={Ritu} />
                <Image src={Sabyasachi} />
              </Row>
              <Row className="brands justify-content-around align-items-end">
                <Image src={Pantaloons} />
                <Image src={Max} />
                <Image src={Trends} />
                <Image src={Westside} />
                <Image src={Myntra} />
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <div className="hero-slide">
            <h1>Where Quality Meets Creativity</h1>
            <div className="h2-container">
              <h2>
                We meticulously craft each meter of <span>fabric</span>,
              </h2>
              <h2>from creation and weaving to dyeing and finishing. </h2>
              <h2 className="opacity-5">
                Our process is designed to awaken the most distinguished
                qualities,
              </h2>
              <h2 className="opacity-5">
                Catering to the discerning needs of textile editors and
                wholesalers both nationally and internationally
              </h2>
            </div>
            <Container className="opacity-0">
              <Row className="premium-brands justify-content-around align-items-center">
                <Image src={Anita} />
                <Image src={Ritu} />
                <Image src={Sabyasachi} />
              </Row>
              <Row className="brands justify-content-around align-items-end">
                <Image src={Pantaloons} />
                <Image src={Max} />
                <Image src={Trends} />
                <Image src={Westside} />
                <Image src={Myntra} />
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <div className="hero-slide">
            <h1>Where Quality Meets Creativity</h1>
            <div className="h2-container">
              <h2>
                We meticulously craft each meter of <span>fabric</span>,
              </h2>
              <h2>from creation and weaving to dyeing and finishing. </h2>
              <h2>
                Our process is designed to awaken the most distinguished{" "}
                <span>qualities</span>,
              </h2>
              <h2 className="opacity-5">
                Catering to the discerning needs of textile editors and
                wholesalers both nationally and internationally
              </h2>
            </div>
            <Container className="opacity-0">
              <Row className="premium-brands justify-content-around align-items-center">
                <Image src={Anita} />
                <Image src={Ritu} />
                <Image src={Sabyasachi} />
              </Row>
              <Row className="brands justify-content-around align-items-end">
                <Image src={Pantaloons} />
                <Image src={Max} />
                <Image src={Trends} />
                <Image src={Westside} />
                <Image src={Myntra} />
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <div className="hero-slide">
            <h1>Where Quality Meets Creativity</h1>
            <div className="h2-container">
              <h2>
                We meticulously craft each meter of <span>fabric</span>,
              </h2>
              <h2>from creation and weaving to dyeing and finishing. </h2>
              <h2>
                Our process is designed to awaken the most distinguished{" "}
                <span>qualities</span>,
              </h2>
              <h2>
                <span>Catering</span> to the discerning needs of textile editors
                and wholesalers both nationally and internationally
              </h2>
            </div>
            <div className="opacity-0 brands-container">
              <Row className="premium-brands justify-content-around align-items-center">
                <Image src={Anita} />
                <Image src={Ritu} />
                <Image src={Sabyasachi} />
              </Row>
              <Row className="brands justify-content-around align-items-end">
                <Image src={Pantaloons} />
                <Image src={Max} />
                <Image src={Trends} />
                <Image src={Westside} />
                <Image src={Myntra} />
              </Row>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <div className="hero-slide">
            <h1>Where Quality Meets Creativity</h1>
            <div className="h2-container">
              <h2>
                We meticulously craft each meter of <span>fabric</span>,
              </h2>
              <h2>from creation and weaving to dyeing and finishing. </h2>
              <h2>
                Our process is designed to awaken the most distinguished{" "}
                <span>qualities</span>,
              </h2>
              <h2>
                <span>Catering</span> to the discerning needs of textile editors
                and wholesalers both nationally and internationally
              </h2>
            </div>
            <Container>
              <Row className="premium-brands">
                <Image src={Anita} />
                <Image src={Ritu} />
                <Image src={Sabyasachi} />
              </Row>
              <Row className="brands">
                <Image src={Pantaloons} />
                <Image src={Max} />
                <Image src={Trends} />
                <Image src={Westside} />
                <Image src={Myntra} />
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
      <hr></hr>
    </div>
  );
};

export default Hero;
