import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a{" "}
            <span className="purple">
              passionate and detail-driven software developer
            </span>{" "}
            with hands-on experience in building scalable systems and ensuring
            top-notch software quality. I’m especially focused on:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Backend development and architecture
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span className="purple">AI & machine learning applications</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud technologies (AWS, etc.)
            </li>
            <li className="about-activity">
              <ImPointRight /> Software testing &{" "}
              <span className="purple">QA best practices</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, test with precision, and always aim for impact."
          </p>
          <footer className="blockquote-footer">Ahmad Hteit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
