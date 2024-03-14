import React, { useRef } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { motion, useScroll } from "framer-motion";

import Linen from "../../../assets/images/fabrics/linen";
import LinenBlends from "../../../assets/images/fabrics/linen-blend";
import Crepe from "../../../assets/images/fabrics/Crepe";
import Cabric from "../../../assets/images/fabrics/cabric";
import Sustainable from "../../../assets/images/fabrics/sustainable.jpeg";
import Velvet from "../../../assets/images/fabrics/velvet";
import Viscose from "../../../assets/images/fabrics/viscose";
import Bci from "../../../assets/images/fabrics/bci.avif";
import SilkBlendVelvet from "../../../assets/images/fabrics/Silk blend velvet .jpeg";
import NylonViscoseVelvet from "../../../assets/images/fabrics/Nylon viscose velvet .webp";
import Voile from "../../../assets/images/fabrics/Voile .jpeg";
import Chiffon from "../../../assets/images/fabrics/Chiffon.webp";
import Ecoterra from "../../../assets/images/fabrics/Ecoterra";
import Georgette from "../../../assets/images/fabrics/Georgette.jpeg";
import EuropeanLinen from "../../../assets/images/fabrics/European linen .jpeg";
import FSCViscose from "../../../assets/images/fabrics/FSC viscose .jpeg";

export default function AllFabrics() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <div
      className="all-fabrics m-5"
      id="AllFabrics"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={Linen}
            />
            <Card.Body>
              <Card.Title>Linen</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={LinenBlends}
            />
            <Card.Body>
              <Card.Title>Linen Blends</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={Crepe}
            />
            <Card.Body>
              <Card.Title>Crepe</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={Cabric}
            />
            <Card.Body>
              <Card.Title>Cabric</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </motion.div>
      <motion.div
        ref={ref1}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={SilkBlendVelvet}
            />
            <Card.Body>
              <Card.Title>Silk Blend Velvet</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={NylonViscoseVelvet}
            />
            <Card.Body>
              <Card.Title>Nylon Viscose Velvet</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={Velvet}
            />
            <Card.Body>
              <Card.Title>Velvet</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={Viscose}
            />
            <Card.Body>
              <Card.Title>Viscose</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </motion.div>
      <motion.div
        ref={ref2}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={Ecoterra}
            />
            <Card.Body>
              <Card.Title>Ecoterra</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={Georgette}
            />
            <Card.Body>
              <Card.Title>Georgette</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src={EuropeanLinen}
            />
            <Card.Body>
              <Card.Title>European Linen</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={FSCViscose}
            />
            <Card.Body>
              <Card.Title>FSC Viscose</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </motion.div>
      <motion.div
        ref={ref3}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={Sustainable}
            />
            <Card.Body>
              <Card.Title>Sustainable Fabrics</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={Voile}
            />
            <Card.Body>
              <Card.Title>Voile</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={Chiffon}
            />
            <Card.Body>
              <Card.Title>Chiffon</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src={Bci}
            />
            <Card.Body>
              <Card.Title>Better Cotton Initiative</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </motion.div>

      <hr />
    </div>
  );
}
