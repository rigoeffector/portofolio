import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" , fontSize:'16px', color:"#d4c8c8"}}>
            Hi Everyone, I am <span className="purple">ABAYEZU Rene Rigobert </span>
            from <span className="purple"> Kigali city, Rwanda.</span>
            <br />I am currently a Lead Software Engineer, self-motivated IT professional,result-oriented, ambitious quickly adjust to new challenges, God-fearing, hardworking polite and responsible person. I am excellent at working with others to achieve a certain objective on time and with excellence and never afraid of challenging tasks.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />   Circling 
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading fantasy books
            </li>
          </ul>

          <p style={{ color: "#ffc107",    fontSize: '16px' }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rigobert Rene ABAYEZU</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
