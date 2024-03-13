import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

import FabricManufacturers from "../../../assets/images/ourFabrics/industry_4896988.png";
import Fabric from "../../../assets/images/ourFabrics/textile_9170887.png";
import Value from "../../../assets/images/ourFabrics/plotter_7425646.png";
import Bci from "../../../assets/images/ourFabrics/Better-Cotton-900x0.png";

const OurFabricsTop = () => {
  return (
    <div
      className="Our-fabrics-top m-5"
      id="OurFabrics"
    >
      <h1>Our Fabrics</h1>
      <Row className="text-center">
        <Col>
          <Image src={FabricManufacturers}></Image>
          <p>
            We manufacture an array of Fabrics in a wide spectrum of colors and
            patterns to keep up with changing fashion trends, designer demands,
            and market demands.
          </p>
        </Col>
        <Col>
          <Image src={Fabric}></Image>
          <p>
            We produce and supply some of the best fabrics in the country such
            as 100% Viscose, velvet, Cotton Linen, cambric, European linen,
            voile, and many others, which have numerous applications in the
            textile industry.
          </p>
        </Col>
        <Col>
          <Image src={Value}></Image>
          <p>
            We further add value to fabrics by foiling, pleating, digital
            printing, embossing, etc.
          </p>
        </Col>
        <Col>
          <Image
            src={Bci}
            className="bci"
          ></Image>
          <p>
            We are proud holders of the BCI (Better Cotton Initiative)
            certification when it comes to our sustainability.
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default OurFabricsTop;
