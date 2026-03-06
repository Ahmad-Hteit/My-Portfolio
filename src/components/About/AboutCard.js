import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="purple">Ahmad Hteit</span>, a{" "}
            <span className="purple">Quality Assurance Engineer</span> with
            hands-on experience in{" "}
            <span className="purple">manual testing</span>,{" "}
            <span className="purple">automation testing (Playwright)</span>, and{" "}
            <span className="purple">performance/load testing</span>. I enjoy
            breaking products (professionally 😄), finding edge cases, and
            building reliable test coverage that helps teams ship with confidence.
          </p>

          <p style={{ textAlign: "justify" }}>
            I’ve worked on{" "}
            <span className="purple">
              regression testing, API testing, test planning, and bug reporting
            </span>{" "}
            while collaborating closely with developers and stakeholders to
            ensure quality across releases. I care about writing{" "}
            <span className="purple">maintainable automation</span>, improving
            test stability, and keeping feedback loops fast.
          </p>

          <p style={{ textAlign: "justify" }}>
            Beyond QA, I build AI-powered applications. I created{" "}
            <span className="purple">StoryPilot</span> using{" "}
            <span className="purple">Azure AI</span>, and built LLM chat apps
            including a <span className="purple">DeepSeek-style chatbot</span>{" "}
            and <span className="purple">GPT-based assistants</span>. I also have
            solid fundamentals in{" "}
            <span className="purple">backend development</span> and{" "}
            <span className="purple">cloud (AWS)</span>.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Test Strategy, Test Planning & Regression
            </li>
            <li className="about-activity">
              <ImPointRight /> Automation Testing{" "}
              <span className="purple">(Playwright)</span> + CI-friendly suites
            </li>
            <li className="about-activity">
              <ImPointRight /> API Testing{" "}
              <span className="purple">(Postman / REST)</span> & bug triage
            </li>
            <li className="about-activity">
              <ImPointRight /> Performance & Load Testing{" "}
              <span className="purple">(k6 / JMeter)</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> AI Apps{" "}
              <span className="purple">(Azure + LLM integrations)</span>
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