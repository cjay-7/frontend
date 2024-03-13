import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../../styles/AboutUs.css";

const OurManagement = () => {
  return (
    <div
      className="our-management-container m-5"
      id="OurManagement"
    >
      <h2>Our Management</h2>
      <Row>
        <Col>
          <p>
            Shruti Ruia is a vivacious entrepreneur and creative director of her
            own fashion brand & of Ruia fabrics. Renowned for her superb
            organizational and time management skills, she blends creativity
            with efficiency. Her happy-go-lucky nature and love for interacting
            with people make her more successful in convincing the buyers
          </p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <p>
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
          </p>
        </Col>
        <Col></Col>
      </Row>
      <hr></hr>
    </div>
  );
};
export default OurManagement;
