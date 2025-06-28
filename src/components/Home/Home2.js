import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
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
              <b className="purple">Software Developer</b> and{" "}
              <b className="purple">Quality Assurance Engineer</b> with a strong
              foundation in{" "}
              <b className="purple">
                backend development, cloud computing, and AI/ML
              </b>
              . I’m passionate about solving real-world problems through clean,
              scalable code and delivering high-quality software.
              <br />
              <br />
              I’ve built and tested full-stack applications using modern
              technologies. I’m certified as an{" "}
              <b className="purple">AWS SysOps Administrator</b> and{" "}
              <b className="purple">AI Practitioner</b>, with hands-on
              experience in services like{" "}
              <b className="purple">EC2, S3, IAM, CloudFront, CodePipeline,</b>{" "}
              and <b className="purple">SageMaker</b>.
              <br />
              <br />
              I'm driven by continuous learning and a long-term vision to build
              innovative, impactful technology products.
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
              {/* <li className="social-icons">
                <a
                  href="https://www.facebook.com/ahmad.hteit.56"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li> */}
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
