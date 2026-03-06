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
              I’m <b className="purple">Ahmad Hteit</b>, a{" "}
              <b className="purple">Quality Assurance Engineer</b> with hands-on experience in{" "}
              <b className="purple">manual testing</b>,{" "}
              <b className="purple">automation testing </b>, and{" "}
              <b className="purple">performance/load testing</b>.
              <br />
              <br />
              I focus on building reliable test strategies, writing maintainable test suites,
              validating APIs, and ensuring product quality through strong regression coverage
              and clear bug reporting.
              <br />
              <br />
              Beyond QA, I enjoy building AI-powered applications. I created{" "}
              <b className="purple">StoryPilot</b> using{" "}
              <b className="purple">Azure AI</b>, and built LLM chat apps including a{" "}
              <b className="purple">DeepSeek-style chatbot</b> and{" "}
              <b className="purple">GPT-based assistants</b>.
              <br />
              <br />
              I also have a solid software engineering background with{" "}
              <b className="purple">backend development</b> and{" "}
              <b className="purple">cloud fundamentals (AWS)</b>, and I care deeply about{" "}
              <b className="purple">clean code</b>,{" "}
              <b className="purple">scalability</b>, and{" "}
              <b className="purple">shipping high-quality software</b>.
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
