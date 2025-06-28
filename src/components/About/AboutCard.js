import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a <span className="purple">passionate software developer</span>{" "}
            with a strong focus on backend systems, cloud infrastructure, and{" "}
            <span className="purple">AI/ML</span>. From building full-stack
            applications to ensuring software reliability through{" "}
            <span className="purple">QA automation</span>, I enjoy solving
            real-world problems through clean and scalable code.
          </p>

          <p style={{ textAlign: "justify" }}>
            I’m certified as an{" "}
            <span className="purple">AWS SysOps Administrator</span> and{" "}
            <span className="purple">AI Practitioner</span>, with hands-on
            experience in services like{" "}
            <span className="purple">
              EC2, S3, IAM, CloudFront, and SageMaker
            </span>
            . I work with tech stacks like{" "}
            <span className="purple">
              React, Next.js, Spring Boot, Node.js, ASP.NET Core, Flutter
            </span>
            , and databases like <span className="purple">MySQL, MongoDB</span>,
            and Firebase.
          </p>

          <p style={{ textAlign: "justify" }}>
            I believe in continuous growth and writing code with purpose. My
            goal is to build impactful products and one day lead my own
            innovative tech company.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Backend development & API design
            </li>
            <li className="about-activity">
              <ImPointRight />{" "}
              <span className="purple">AI & ML-based applications</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> AWS Cloud Infrastructure & DevOps
            </li>
            <li className="about-activity">
              <ImPointRight /> Software Testing &{" "}
              <span className="purple">QA automation</span>
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
