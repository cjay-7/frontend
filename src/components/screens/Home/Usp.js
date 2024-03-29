import React, { useRef } from "react";
import "../../../styles/HomeScreen.css"; // Import the CSS file for styling
import { Col, Row, Image } from "react-bootstrap";
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
import { MotionConfig, motion, useScroll, useTransform } from "framer-motion";
import Counter from "../../common/Counter";

const useScrollOptions = (ref, windowSize) => {
  if (windowSize[0] > 576) {
    return {
      target: ref,
      offset: ["0 1", "1.33 1"],
    };
  } else {
    return {
      target: ref,
      offset: ["0 1", ".3 1"],
    };
  }
};

const Usp = () => {
  const ref1 = useRef(null);

  const ref = useRef(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const scrollOptions = useScrollOptions(ref, windowSize.current);
  const { scrollYProgress } = useScroll(scrollOptions);

  // const width = useTransform(scrollYProgress, [0, 200], ["8rem", "4rem"]);
  return (
    <MotionConfig
      transition={{
        duration: 0.125,
        ease: "easeInOut",
      }}
    >
      <div className="usp-container">
        <Row
          className="usp-header-container"
          id="WhoAreWe"
        >
          <Col
            xs={12}
            md={8}
          >
            <motion.div
              className="usp-rf-blue "
              ref={ref}
              style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
                transformOrigin: "left",
              }}
            >
              <Row>
                <Col className="usp-header ">
                  <h2>Who We Are</h2>
                  <p>
                    Ruia Fabrics, based in Surat has three decades of quality
                    expertise fueling consistent excellence.
                  </p>
                </Col>
                <Col className="usp-header-logo">
                  <Image src={Logo}></Image>
                </Col>
              </Row>
            </motion.div>
          </Col>

          <motion.div
            className="col team-container"
            ref={ref}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
              transformOrigin: "right",
            }}
          >
            <Image
              src={Team}
              className="team"
            ></Image>
            <h3>Professional Team </h3>
            <p className="m-0">
              Elite production team exceeding quality through meticulous detail.
            </p>
          </motion.div>
        </Row>
        <div
          className="usp"
          id="Usp"
        >
          <motion.div
            className="row"
            ref={ref}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
            }}
          >
            <Col
              xs={6}
              md={3}
              className="years-container"
            >
              <div className="usp-text years">
                <h3>
                  <Counter
                    from={0}
                    to={34}
                  />
                  + Years
                </h3>
                <p>of Trust & Expertise</p>
              </div>
              <div className="usp-text years">
                <h3>
                  <Counter
                    from={10000}
                    to={28000}
                  />{" "}
                  sqft
                </h3>
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
              xs={6}
              md={3}
            >
              <div className="usp-text fabric-production">
                <h3>
                  <Counter
                    from={10000}
                    to={300000}
                  />{" "}
                  meters
                </h3>
                <p>of Fabric Production per month</p>
              </div>
              <div className="usp-text fabric-trading">
                <h3>
                  <Counter
                    from={10000}
                    to={700000}
                  />{" "}
                  meters
                </h3>
                <p>of Fabric Trading per month</p>
              </div>
            </Col>
          </motion.div>
          <motion.div
            className="row usp-imgs"
            ref={ref1}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
              transformOrigin: "left",
            }}
          >
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
          </motion.div>
          <motion.div
            className="row align-items-center"
            ref={ref1}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
              transformOrigin: "left",
            }}
          >
            <Col
              xs={12}
              md={3}
              className="time-container"
            >
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
            <Col
              xs={12}
              md={3}
            >
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
          </motion.div>
        </div>
        <hr></hr>
      </div>
    </MotionConfig>
  );
};

export default Usp;
