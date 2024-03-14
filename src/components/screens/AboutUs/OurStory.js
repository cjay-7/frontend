import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <div
      className="our-story-container m-5"
      id="OurStory"
    >
      <h1 className="text-center">About Ruia Fabrics Pvt. Ltd</h1>
      <h2 className="text-left">Our Story</h2>
      <Row className="mt-4">
        <Col>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          >
            Ruia Fabrics, a legacy rooted in India's textile revolution since
            1952, traces its origins to the entrepreneurial spirit of Shri
            Shubankarji Ruia. From humble beginnings as a yarn merchant, the
            Ruia family's dedication and vision propelled them into the fabric
            trading arena as Ruia Brothers. Under the guidance of their esteemed
            father, they became pioneers, renowned for price competitiveness,
            quality, and diverse design range.
          </motion.p>
        </Col>
        <Col>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "right" }}
          >
            With changing times, Ruia Brothers evolved, diversifying into
            manufacturing and integrating with weavers and mills to export
            superior quality fabrics. Madhusudan Ruia, one of Shri Shubhkarantji
            Ruia’s sons, founded Ruia Fabrics Pvt. Ltd. in 1990, marking the
            beginning of a new chapter. Certified by Grasim Industries in 2010,
            our collaboration with Aditya Birla Group's LIVA brand solidified
            our reputation for excellence in viscose fabrics.
          </motion.p>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          >
            In 2018, Ruia Fabrics embraced sustainability, partnering with
            Aditya Birla Group to produce eco-friendly viscose fabrics.
            Additionally, our venture, The Klassiq Silk Mills, equipped with
            cutting-edge velvet manufacturing machines from China, further
            expanded our product line. Renowned for our micro velvet,
            viscose/silk, and poly yarn fabrics, we've established a robust
            distribution network spanning India and the Middle East.
          </motion.p>
        </Col>
        <Col>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "right" }}
          >
            For three decades, Ruia Fabrics has crafted premium voile, chiffon,
            crepes, and georgette fabrics for global markets. We uphold quality
            through partnerships with top yarn mills and weavers in India,
            prioritizing ethical relationships with suppliers and buyers. With
            forward-thinking leadership and a dedicated team, we deliver
            world-class woven fabrics to our valued clientele.
          </motion.p>
        </Col>
      </Row>
      <hr></hr>
    </div>
  );
};
export default OurStory;
