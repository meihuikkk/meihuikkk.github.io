import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hihi, this is <span className="purple">Fu Meihui </span>
            aka Mayhui
            <br />
            I am currently a final year student at <span className="purple">Singapore University of Technology and Design</span>
            <br />
            I am majoring in <span className="purple">Computer Science and Design</span>, taking Computer Science and Design & Fintech double tracks
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Aquatic Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Music: Piano + Percussion + Chinese flute 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
