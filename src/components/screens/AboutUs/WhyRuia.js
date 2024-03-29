import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import "../../../styles/AboutUs.css";
import { motion, useScroll } from "framer-motion";

const useScrollOptions = (ref, windowSize) => {
  if (windowSize[0] > 576) {
    return {
      target: ref,
      offset: ["0 1", "1.33 1"],
    };
  } else {
    return {
      target: ref,
      offset: ["0 1", ".33 1"],
    };
  }
};

const WhyRuia = () => {
  const ref = useRef(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const scrollOptions = useScrollOptions(ref, windowSize.current);
  const { scrollYProgress } = useScroll(scrollOptions);
  return (
    <motion.div
      className="why-ruia m-5"
      id="WhyRuia"
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      <h2>Why Ruia Fabrics</h2>
      <h3>Unparalleled quality, durability and sustainability</h3>
      <Row className="mt-3">
        <Col
          xs={12}
          md={4}
        >
          <h4>Exceedance</h4>
          <p>
            We at Ruia Fabrics take pride in meeting high demands and
            expectations of our customers while staying unrivaled when it comes
            to quality.
          </p>
        </Col>
        <Col
          xs={12}
          md={4}
        >
          <h4>Techmastery</h4>
          <p>
            Our fabrics are made with high-quality technologically advanced
            machines to improve quality and minimize defects and flaws without
            compromising on quality.
          </p>
        </Col>
        <Col
          xs={12}
          md={4}
        >
          <h4>Parametrication</h4>
          <p>
            Our team ensures quality testing against a variety of parameters
            based on the client's needs and preferences before the product’s
            delivery.
          </p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col
          xs={12}
          md={4}
        >
          <h4>Competitive Price point</h4>
          <p>
            Highly agile production capacity and robust logistics allow us to
            price our quality fabrics at the lowest in market
          </p>
        </Col>
        <Col
          xs={12}
          md={4}
        >
          <h4>Longevity based industry knowledge</h4>
          <p>
            We have an endless choice of fabrics with in depth R&D becuase of
            high level of knowledge, experience and expertise
          </p>
        </Col>
        <Col
          xs={12}
          md={4}
        >
          <h4>Caters to order requirements</h4>
          <p>
            Small, medium and large orders are all welcomes and packed with love
          </p>
        </Col>
      </Row>
      <hr></hr>
    </motion.div>
  );
};
export default WhyRuia;
