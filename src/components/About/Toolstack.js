import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiDocker,
  SiJupyter,
  SiTensorflow,
  SiMicrosoftpowerpoint,
  SiVercel,
  SiAuth0,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import "./About.css";

function Toolstack() {
  return (
    <div className="toolstack-wrapper">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="VS Code">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="GitHub">
          <SiGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Postman">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Docker">
          <SiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Jupyter">
          <SiJupyter />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
          <SiTensorflow />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="AWS">
          <FaAws />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="PowerApps">
          <SiMicrosoftpowerpoint />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Vercel">
          <SiVercel />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Clerk (Auth)">
          <SiAuth0 />
        </Col>
      </Row>
    </div>
  );
}

export default Toolstack;
