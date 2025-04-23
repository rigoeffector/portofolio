import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import belle from "../../Assets/Projects/carzone.png";
import HUZA from "../../Assets/Projects/huza_hr_logo.jpeg";
import sawa from "../../Assets/Projects/SAWA.png";
import HUZADASH from "../../Assets/Projects/dash.png";
import zacu from "../../Assets/Projects/zacu.png";
import inzu from "../../Assets/Projects/girainzu.png";
import huzahrapp from "../../Assets/Projects/huzahrapp.png";
import Facial from "../../Assets/Projects/facial.png";
import mayso from "../../Assets/Projects/mayso.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Web Projects */}
        <h2 className="project-heading mt-5">🌐 Web Projects</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={inzu}
              isBlog={false}
              title="Gira Inzu"
              description="Strategically located real estate in Kigali near Bugesera Airport with secure environment, ideal for families and investors."
              demoLink="https://girinzu.com/en/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={belle}
              isBlog={false}
              title="Car Zone"
              description="Designed the website for Car Zone, a fast-growing automotive service provider in Rwanda with a responsive and clean UI."
              demoLink="https://carzone.co.rw/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={HUZA}
              isBlog={false}
              title="Huza HR Website"
              description="Corporate website for a company offering reliable HR software and salary advances for employees."
              demoLink="https://www.huzahr.com/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={zacu}
              isBlog={false}
              title="ZACU TV"
              description="Media website showcasing 700+ hours of local Rwandan TV content including Seburikoko and City Maid."
              demoLink="https://zacuentertainment.com/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={sawa}
              isBlog={false}
              title="Sawa Telematics"
              description="Web platform for government fleet tracking, providing driver scores and real-time insights."
              demoLink="https://sawatelematics.com/"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={HUZADASH}
              isBlog={false}
              title="Huza HR Dashboard"
              description="Enterprise dashboard for HR automation including payroll, leave, and employee services."
              demoLink="https://www.usemidas.io/"
            />
          </Col>
        </Row>

        {/* Mobile Projects */}
        <h2 className="project-heading mt-5">📱 Mobile Apps</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={sawa}
              isBlog={false}
              title="Sawa Telematics App"
              description="Mobile app providing real-time fleet tracking, fuel analysis, and driver behavior insights."
              demoLink="https://apps.apple.com/us/app/sawa-telematics/id6478764536?platform=iphone"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={huzahrapp}
              isBlog={false}
              title="Huza HR iOS App"
              description="iOS app for employee HR services including attendance, payroll, and benefits."
              demoLink="https://apps.apple.com/rw/app/huza-hr/id6450055105"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={huzahrapp}
              isBlog={false}
              title="Huza HR Android App"
              description="Android app version of the Huza HR software for employee management."
              demoLink="https://play.google.com/store/apps/details?id=com.huzahr"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={Facial}
              isBlog={false}
              title="Huza Facial Recognition"
              description="Android app for facial attendance system using facial recognition technology."
              demoLink="https://play.google.com/store/apps/details?id=com.huzahr.faceRecognition&pli=1"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={mayso}
              isBlog={false}
              title="May Sochic App"
              description="Official municipal app for the Commune of Chiconi in Mayotte, offering digital administration services."
              demoLink="https://play.google.com/store/apps/details?id=com.chiconisohoa.maysochic&hl=en"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
