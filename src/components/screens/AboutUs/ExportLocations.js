import React, { useRef } from "react";
import "../../../styles/AboutUs.css";
import { Col, Image, Row } from "react-bootstrap";
import Europe from "../../../assets/images/locations/europe1.png";
import Asia from "../../../assets/images/locations/asia.png";
import America from "../../../assets/images/locations/america.png";
import India from "../../../assets/images/locations/india.png";
import { motion, useScroll } from "framer-motion";

const ExportLocations = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", ".7 1"],
  });
  return (
    <motion.div
      className="export-locations m-5"
      id="ExportLocations"
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      <h2>Export Locations</h2>
      <h3>
        Leading exporter of quality, durable and sustainable fabrics globally.
        Unrivaled excellence.
      </h3>
      <Row className="mt-5">
        <Col>
          <Image src={Europe}></Image>
          <h3>Europe</h3>
          <h4>Spain and Italy</h4>
        </Col>
        <Col>
          <Image src={America}></Image>
          <h3>America</h3>
        </Col>
        <Col>
          <Image src={Asia}></Image>
          <h3>South East Asia</h3>
          <h4>Indonesia</h4>
        </Col>
        <Col>
          <Image src={India}></Image>
          <h3>From India</h3>
          <h4>With Love</h4>
        </Col>
      </Row>
      <hr></hr>
    </motion.div>
  );
};
export default ExportLocations;
