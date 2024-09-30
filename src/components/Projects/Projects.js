import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MOBILE from "../../Assets/Projects/MOBILE.png";
import belle from "../../Assets/Projects/belle.png";
import HUZA from "../../Assets/Projects/huza.png";
import sawa from "../../Assets/Projects/SAWA.png";
import evryting from "../../Assets/Projects/evryting.png";
import HUZADASH from "../../Assets/Projects/dash.png";
import zacu from "../../Assets/Projects/zacu.png";

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
              imgPath={HUZADASH}
              isBlog={false}
              title="Midas HR Dashboard"
              description="Midas is a Human Resource (HR) software developed for business needs by PesaChoice International. Midas automates most business functions such as payroll, leave management, employee service, and allowing HR personnel and management to focus on what’s important."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.usemidas.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={belle}
              isBlog={false}
              title="VERY BELLE "
              description="Very Belle is an East African retailer that offers the latest fashion trends coming from the UK at the best value on the high street. Put simply - amazing fashion at amazing prices. "
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://www.verybelle.rw/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HUZA}
              isBlog={false}
              title="Huza HR Website"
              description="a company website We pride ourselves on providing world-class software to organizations and their employees, helping them grow exponentially. Whether it is prioritizing our clients through our reliable HR software solution; or providing salary advances to their employees. Putting people first is our priority!"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.huzahr.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zacu}
              isBlog={false}
              title="ZACU TV"
              description="ZACU has produced widely acclaimed Tv series content such as Seburikoko, City Maid, Indoto and Ejo si Kera and has supplied more than 800 episodes to national television RBA. Presently, the company has a library of more than 700 hours, from local short and feature movies and TV series of different genres in drama, romance, and comedy. The company produces 150+ hours content per year."
              demoLink="https://zacuentertainment.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sawa}
              isBlog={false}
              title="Sawa Telematics "
              description="Empower government agencies with state-of-the-art telematics solutions for their diverse fleets. Our technology provides comprehensive tracking, driver scores,
              "
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://sawatelematics.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evryting}
              isBlog={false}
              title="Restaurant Management "
              description="Everything  has a mixture of cooking techniques, flavours and spices influenced by African Slaves who have inhabited the island,
              with plain php and javascript i built this restaurant management system from scratch"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://evrytingiriekigali.rw/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MOBILE}
              isBlog={false}
              title="Huza HR iOS App "
              description="HUZA is a one-stop shop for all your HR related needs! We're dedicated to offering top-tier software for organizational growth,"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://apps.apple.com/rw/app/huza-hr/id6450055105"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MOBILE}
              isBlog={false}
              title="Huza HR Android App "
              description=" HUZA is a one-stop shop for all your HR related needs! We're dedicated to offering top-tier software for organizational growth,"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://play.google.com/store/apps/details?id=com.huzahr"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
