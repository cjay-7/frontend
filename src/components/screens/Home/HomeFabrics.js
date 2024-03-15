import React, { useRef } from "react";
import { Card, Container, CardGroup } from "react-bootstrap";

import Linen from "../../../assets/images/fabrics/linen";
import LinenBlends from "../../../assets/images/fabrics/linen-blend";
import Crepe from "../../../assets/images/fabrics/Crepe";
import Cabric from "../../../assets/images/fabrics/cabric";
import Sustainable from "../../../assets/images/fabrics/sustainable.jpeg";
import Velvet from "../../../assets/images/fabrics/velvet";
import Viscose from "../../../assets/images/fabrics/viscose";
import Bci from "../../../assets/images/fabrics/bci.avif";
import { Link } from "react-router-dom";
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
      offset: ["0 1", ".12 1"],
    };
  }
};

export default function HomeFabrics() {
  const ref = useRef(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const scrollOptions = useScrollOptions(ref, windowSize.current);
  const { scrollYProgress } = useScroll(scrollOptions);

  return (
    <motion.div
      className="home-fabrics"
      id="HomeFabrics"
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      <h2>Our Fabrics</h2>
      <CardGroup>
        <Card>
          <Link to="/OurFabrics">
            <Card.Img
              variant="top"
              src={Linen}
            />
            <Card.Body>
              <Card.Title>Linen</Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card>
          <Link to="/OurFabrics">
            <Card.Img
              variant="top"
              src={LinenBlends}
            />
            <Card.Body>
              <Card.Title>Linen Blends</Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card>
          <Link to="/OurFabrics">
            <Card.Img
              variant="top"
              src={Crepe}
            />
            <Card.Body>
              <Card.Title>Crepe</Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card>
          <Link to="/OurFabrics">
            <Card.Img
              variant="top"
              src={Cabric}
            />
            <Card.Body>
              <Card.Title>Cabric</Card.Title>
            </Card.Body>
          </Link>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Link to="/OurFabrics">
            <Card.Img
              variant="top"
              src={Sustainable}
            />
            <Card.Body>
              <Card.Title>Sustainable Fabrics</Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card>
          <Link to="/OurFabrics">
            <Card.Img
              variant="top"
              src={Velvet}
            />
            <Card.Body>
              <Card.Title>Velvet</Card.Title>
            </Card.Body>
          </Link>
        </Card>

        <Card>
          <Link to="/OurFabrics">
            <Card.Img
              variant="top"
              src={Bci}
            />
            <Card.Body>
              <Card.Title>Better Cotton Initiative</Card.Title>
            </Card.Body>
          </Link>
        </Card>
        <Card>
          <Link to="/OurFabrics">
            <Card.Img
              variant="top"
              src={Viscose}
            />
            <Card.Body>
              <Card.Title>Explore More Fabrics</Card.Title>
            </Card.Body>
          </Link>
        </Card>
      </CardGroup>
      <hr></hr>
    </motion.div>
  );
}
