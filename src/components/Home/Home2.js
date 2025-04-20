import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Pic1 from "../../../src/Pic1.png";
import Pic2 from "../../Assets/Pic2.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an enthusiastic and detail-oriented{" "}
              <b className="purple">Software Developer</b> with hands-on
              experience in
              <b className="purple">
                {" "}
                cloud computing, AI/ML, and software quality assurance
              </b>
              .
              <br />
              <br />
              I'm also certified as an{" "}
              <b className="purple">AWS SysOps Administrator</b> and{" "}
              <b className="purple">AI Practitioner</b>, skilled in services
              like{" "}
              <b className="purple">
                EC2, S3, EBS, CloudFront, CodePipeline, SageMaker
              </b>
              , and other AI modules.
              <br />
              <br />
              My key areas of interest include developing innovative &nbsp;
              <b className="purple">web technologies and products</b>, ensuring
              high-quality software through thorough testing, and exploring
              cutting-edge applications of{" "}
              <b className="purple">artificial intelligence</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* {myImg} */}
              <img src={Pic2} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ahmad-Hteit"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ahmad.hteit.56"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmad-hoteit-1a57a9318/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ahmad_hteit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
