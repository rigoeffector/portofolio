import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import isoko from "../../Assets/Projects/isoko.png";
import travela from "../../Assets/Projects/travela.jpeg";
import belle from "../../Assets/Projects/belle.png";
import midas from "../../Assets/Projects/midas.svg";
import dore from "../../Assets/Projects/dore.png";
import evryting from "../../Assets/Projects/evryting.png";
import pesa from "../../Assets/Projects/pesa.png";
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
              imgPath={midas}
              isBlog={false}
              title="Midas HR"
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
              imgPath={pesa}
              isBlog={false}
              title="PesaChoice"
              description="a company website=> We pride ourselves on providing world-class software to organizations and their employees, helping them grow exponentially. Whether it is prioritizing our clients through our reliable HR software solution; or providing salary advances to their employees. Putting people first is our priority!"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.pesachoice.com/"              
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
              imgPath={dore}
              isBlog={false}
              title="DoreVille"
              description="THE WONDER OF GROUP FUN=>
              DORE provides centralised information on the best deals, news, and activities in Rwanda. These activities range from paintballing to dancing classes, restaurant discounts, customised packages , corporate incentives, et al
              "
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.gameville.rw/dore-app/"
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
              imgPath={isoko}
              isBlog={false}
              title="ISOKO 250 "
              description="Isoko250 Ltd specializes in e-commerce development and providing digital solutions starting from website and mobile apps designing and development to giving a space for those small business for selling their products via isoko250.com platform."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.isoko250.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travela}
              isBlog={false}
              title="D Travela "
              description="DTravela is an online travel agency based in Rwanda. We offer a digital solution that facilitates travelers to access travel information about Rwanda, self-book, and pay for trips online. It provides quick and easy access to local hospitality and tourism activities in Africa, starting from Rwanda via an online booking engine. We provide the best tools to run and scale booking operations, all in one place."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://dtravela.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
