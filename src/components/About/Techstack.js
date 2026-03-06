import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

import {
  SiCsharp,
  SiSpring,
  SiPostgresql,
  SiFirebase,
  SiNextdotjs,
  SiPlaywright,
  SiSelenium,
  SiPytest,
  SiJest,
  SiK6,
  SiMicrosoftazure,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages */}
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C#">
        <SiCsharp />
      </Col>

      {/* Frontend (supporting skill) */}
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <DiCss3 />
      </Col>

      {/* Backend (supporting skill) */}
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Spring Boot">
        <SiSpring />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>

      {/* QA / Testing (core focus) */}
      <Col xs={4} md={2} className="tech-icons" title="Playwright">
        <SiPlaywright />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Selenium">
        <SiSelenium />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyTest">
        <SiPytest />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jest">
        <SiJest />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="k6 (Load/Performance)">
        <SiK6 />
      </Col>

      {/* Cloud (core supporting) */}
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Azure">
        <SiMicrosoftazure />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;