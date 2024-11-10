import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">
              Enthusiastic and skilled software developer
            </span>{" "}
            with a solid foundation in various programming languages and
            technologies. Eager to leverage my expertise in
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> software development
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> cloud computing.</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Backend development
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ahmad Hteit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
