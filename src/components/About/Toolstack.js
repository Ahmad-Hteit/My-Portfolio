import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";

import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiJira,
  SiVercel,
  SiNpm,
  SiYarn,
  SiLinux,
  SiMicrosoftazure,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

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

        <Col xs={4} md={2} className="tech-icons" title="GitHub Actions (CI/CD)">
          <SiGithubactions />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title="Postman (API Testing)">
          <SiPostman />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title="Jira (Bug Tracking)">
          <SiJira />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title="Docker">
          <SiDocker />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title="Linux">
          <SiLinux />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title="npm">
          <SiNpm />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title="Yarn">
          <SiYarn />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title="Vercel (Deployments)">
          <SiVercel />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title="AWS">
          <FaAws />
        </Col>

        <Col xs={4} md={2} className="tech-icons" title="Azure">
          <SiMicrosoftazure />
        </Col>
      </Row>
    </div>
  );
}

export default Toolstack;