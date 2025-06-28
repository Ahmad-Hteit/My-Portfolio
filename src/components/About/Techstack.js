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
  DiPhp,
  DiMysql,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiCsharp,
  SiFirebase,
  SiSpring,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiAwsamplify,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Programming Languages */}
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C#">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PHP">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React.js">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Spring">
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyTorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS Amplify">
        <SiAwsamplify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
