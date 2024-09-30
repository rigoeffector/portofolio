import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMacos,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiReduxsaga,
  SiAmazonaws,
  SiNetlify,

  SiDocker
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiReduxsaga />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Toolstack;
