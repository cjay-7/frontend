import React from "react";
import "../../../styles/HomeScreen.css"; // Import the CSS file for styling
import { Col, Container, Row, Image } from "react-bootstrap";
import Logo from "../../../logo-white.svg";
import Team from "../../../assets/images/usp/team.png";
import Rack from "../../../assets/images/usp/rack.svg";
import FabricRack from "../../../assets/images/usp/fabric-rack.svg";
import Machine from "../../../assets/images/usp/machine.svg";
import Printer from "../../../assets/images/usp/printer.svg";
import Dashboard from "../../../assets/images/usp/dashboard.svg";
import Desk from "../../../assets/images/usp/desk.svg";
import FabricRolls from "../../../assets/images/usp/fabric-rolls.svg";
import Khadi from "../../../assets/images/usp/khadi.svg";

const Usp = () => {
  return (
    <div className="usp-container">
      <Row
        className="usp-header-container"
        id="WhoAreWe"
      >
        <Col xs={8}>
          <div className="usp-rf-blue ">
            <Row>
              <Col className="usp-header ">
                <h2>Who Are We</h2>
                <p>
                  Ruia Fabrics, based in Surat has three decades of quality
                  expertise fueling consistent excellence.
                </p>
              </Col>
              <Col>
                <Image src={Logo}></Image>
              </Col>
            </Row>
          </div>
        </Col>

        <Col className="team-container">
          <Image
            src={Team}
            className="team"
          ></Image>
          <h3>Professional Team </h3>
          <p className="m-0">
            Elite production team exceeding quality through meticulous detail.
          </p>
        </Col>
      </Row>
      <div
        className="usp"
        id="Usp"
      >
        <Row>
          <Col
            xs={3}
            className="years-container"
          >
            <div className="usp-text years">
              <h3>34+ Years</h3>
              <p>of Trust & Expertise</p>
            </div>
            <div className="usp-text years">
              <h3>28000 sqft</h3>
              <p>Production Capacity</p>
            </div>
          </Col>
          <Col className="p-0">
            <Image
              className="rack"
              src={Rack}
            ></Image>
          </Col>
          <Col className="p-0">
            <Image
              className="fabric-rack"
              src={FabricRack}
            ></Image>
          </Col>
          <Col
            className="fabric-production-container"
            xs={4}
          >
            <div className="usp-text fabric-production">
              <h3>300000 mtrs</h3>
              <p>of Fabric Production per month</p>
            </div>
            <div className="usp-text fabric-trading">
              <h3>700000 mtrs</h3>
              <p>of Fabric Trading per month</p>
            </div>
          </Col>
        </Row>
        <Row className="usp-imgs">
          <Col xs={5}>
            <Image
              className="machine"
              src={Machine}
            ></Image>
          </Col>
          <Col>
            <Image
              className="printer"
              src={Printer}
            ></Image>
          </Col>
          <Col>
            <Image
              className="dashboard"
              src={Dashboard}
            ></Image>
          </Col>
        </Row>
        <Row>
          <Col className="time-container">
            <div className=" usp-text time">
              <h3>On Time</h3>
              <p>Delivery with Value Added Services</p>
            </div>
          </Col>
          <Col>
            <Image
              className="desk"
              src={Desk}
            ></Image>
          </Col>
          <Col>
            <Image
              className="fabric-rolls"
              src={FabricRolls}
            ></Image>
          </Col>
          <Col>
            <Image
              className="khadi"
              src={Khadi}
            ></Image>
          </Col>
          <Col>
            <div className="usp-text service-list p-0">
              <h3>In-House</h3>
              <p className="m-1">Sample Developement</p>
              <ul>
                <li>• Crushing</li>
                <li>• Digital Printing</li>
                <li>• Embossing</li>
                <li>• Foiling</li>
                <li>• Pleating</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <hr></hr>
    </div>
  );
};

export default Usp;
