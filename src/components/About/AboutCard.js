import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">ABAYEZU Rene Rigobert </span>
            from <span className="purple"> Kigali city, Rwanda.</span>
            <br />I am currently a Lead Software Engineer, self-motivated IT professional,result-oriented, ambitious quickly adjust to new challenges, God-fearing, hardworking polite and responsible person. I am excellent at working with others to achieve a certain objective on time and with excellence and never afraid of challenging tasks.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing keybaord
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rigo Ninja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
