import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import "../../../styles/AboutUs.css";
import { motion, useScroll } from "framer-motion";

const OurManagement = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  return (
    <motion.div
      className="our-management-container m-5"
      id="OurManagement"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ transformOrigin: "left" }}
    >
      <h2>Our Management</h2>
      <Row>
        <Col>
          <h4>Pankaj Ruia</h4>
          <motion.h5
            ref={ref}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
            }}
          >
            Director
          </motion.h5>
          <motion.p
            ref={ref}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
            }}
          >
            Pankaj Ruia is an entrepreneur who has been at the helm of a textile
            trading company for over two decades. Known for his exceptional
            ability to produce or supply any fabric, he has built a reputation
            for never turning down client requests. Leveraging his vast
            experience, Pankaj has recently expanded into operating a weaving
            unit, further broadening his expertise in the textile industry. His
            prowess as a salesperson is unparalleled, combining deep product
            knowledge with a persuasive, customer-focused approach. Always eager
            to expand his horizons, Pankaj embodies a continuous learning
            mindset, which has been key to his sustained success.
          </motion.p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <motion.div
          className="col"
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
          }}
        >
          <h4>Shruti Ruia</h4>
          <h5>Director</h5>
          <p>
            Shruti Ruia is a vivacious entrepreneur and creative director of her
            own fashion brand & of Ruia fabrics. Renowned for her superb
            organizational and time management skills, she blends creativity
            with efficiency. Her happy-go-lucky nature and love for interacting
            with people make her more successful in convincing the buyers
          </p>
        </motion.div>
        <Col></Col>
      </Row>
      <hr></hr>
    </motion.div>
  );
};
export default OurManagement;
