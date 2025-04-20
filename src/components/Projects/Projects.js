import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bankimage from "../../Assets/Projects/bankimg.jpg";
import php from "../../Assets/Projects/php-proj.jpg";
import snack from "../../Assets/snack.png";
import movieimg from "../../Assets/Projects/movieimg.jpg";
import AIimg from "../../Assets/Projects/AI-img.png";
import Flutterimg from "../../Assets/Projects/Flutter-img.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={php}
              isBlog={false}
              title="Uni Grade Controller"
              description="PHP & MySQL Development: Successfully designed and implemented several web
                            applications using PHP and MySQL, demonstrating proficiency in backend development,
                            database management, and ensuring robust, secure, and scalable solutions"
              ghLink="https://github.com/Ahmad-Hteit/Php-MYSQL-Schedule-System"
              demoLink="https://vimeo.com/1077063812/dd1490e83e?share=copy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankimage}
              isBlog={false}
              title="Bank Website"
              description="Bank System: Developed a responsive banking website using HTML, CSS, and JavaScript with features like user authentication (login/signup), admin panel, and secure transaction cards.
                          Includes informative sections such as About Us, Services, Contact, and Our Team to enhance user experience and functionality."
              ghLink="https://github.com/Ahmad-Hteit/Bank-Website"
              demoLink="https://vimeo.com/1077063908/a23ca9763a?share=copy"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snack}
              isBlog={false}
              title="Snack Game"
              description="Developed a classic Snake game in Java, utilizing various libraries to
                          enhance functionality and user experience."
              ghLink="https://github.com/Ahmad-Hteit/Snack-Game"
              demoLink="https://vimeo.com/1077076984/5a9ac5bc78?share=copy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieimg}
              isBlog={false}
              title="Movie Website"
              description="Full Stack Movie App: Developed a dynamic full-stack application using Java Spring
               Boot, React, and MongoDB, enabling users to view trailers and post reviews, showcasing seamless
                integration of frontend and backend technologies."
              ghLink="https://github.com/Ahmad-Hteit/Movie-Website-Full-Stack"
              demoLink="https://vimeo.com/1077094942/8f778edcbb?share=copy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIimg}
              isBlog={false}
              title="AI Sentiment Analysis"
              description="Developed a Python-based AI model that performs sentiment analysis by learning from web-based data sources. This project leverages Natural Language Processing (NLP) techniques to classify and differentiate between positive, negative, and neutral sentences."
              ghLink="https://github.com/Ahmad-Hteit/AI-Sentiment-Analysis"
              // demoLink="https://vimeo.com/1077094942/8f778edcbb?share=copy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flutterimg}
              isBlog={false}
              title="Flutter Apps"
              description="Developed an E-commerce app,a To-Do List app and a QR Code reader app withFlutter, 
              integrating dynamic features and secure user authentication"
              ghLink="https://github.com/Ahmad-Hteit/Flutter-QR-Scanner"
              demoLink="https://vimeo.com/1077101925/f235f7b188?share=copy"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            /> 
          </Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
