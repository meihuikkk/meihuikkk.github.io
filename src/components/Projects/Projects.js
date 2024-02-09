import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/Asenda.png";
import emotion from "../../Assets/Projects/emotion.png";
import bb from "../../Assets/Projects/BreakBrick.png";
import cghmap from "../../Assets/Projects/cghmap.png";
import suicide from "../../Assets/Projects/suicide.png";
import hive from "../../Assets/Projects/hive.png";

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
              imgPath={bb}
              isBlog={false}
              title="Brick Break"
              description=" Decentralized Escrow Exchange Project Open Source Ethereum Smart Contract Dapp with a simple front end that allows 2 transacting parties, a buyer and seller, to trade both physical and crypto items with a POS staking system who act as arbitrators."
              ghLink="https://github.com/meihuikkk/Blockchain-Decentralized-Escrow-Exchange"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hive}
              isBlog={false}
              title="Hive"
              description="An Android smartphone app that provides better desk management for smarter, more flexible offices. With Hive, seats are allocated more efficiently where users can log in to a seat only when needed. Together with a desk control panel, which allows control of light brightness and temperature through simple clicks of buttons and shaking gestures, makes office space more personalized to user’s preferences, allowing workers to be comfortable in the office space. "
              ghLink="https://github.com/rphly/hive"
              demoLink="https://github.com/meihuikkk/Portfolio/blob/main/src/Assets/Projects/Screenshot%202024-02-09%20at%2009.37.51.png"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cghmap}
              isBlog={false}
              title="CGH Interactive Map"
              description="An interactive 3D searchable map I developed for Changi General Hospital LEAD Department, allowing students during orientation session to search for the location they are looking for and get familiar with the hospital quickly"
              ghLink="https://github.com/meihuikkk/CGH-Map"
              demoLink="https://cghmap.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Asenda Loyalty Hotel Booking"
              description="A hotel booking system developed in cooperation with Asenda Loyalty. The system allows users to make hotel reservation seamlessly. With the boom of the Millennial traveler, now more than 700 million people are expected to book primarily online by 2023. With that in mind, we are working on a hotel booking system software where guests can choose how long they will stay, the type of room they want, get add-ons, and pay securely online through a payment platform."
              ghLink="https://github.com/joshidevanshi/HotelbookingsysG8"
            />
          </Col>

          <Col md={4} className="project-card">
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
