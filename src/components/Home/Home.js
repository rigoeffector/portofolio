import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/homologo.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Rigobert Rene</strong>
              </h1>

              <div style={{ padding: "40px 50px 24px 50px", textAlign: "left" }}>
                <Type />
              </div>

              <div className="d-flex flex-wrap gap-2 mt-3" style={{ paddingLeft: 50 }}>
                <Button
                  as={Link}
                  to="/project"
                  variant="primary"
                  className="btn-cta btn-cta-primary"
                >
                  <AiOutlineFundProjectionScreen style={{ marginRight: 6 }} />
                  View work
                </Button>
                <Button
                  as={Link}
                  to="/resume"
                  variant="outline"
                  className="btn-cta btn-cta-outline"
                >
                  <CgFileDocument style={{ marginRight: 6 }} />
                  Resume
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="d-flex align-items-center justify-content-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-hero-img"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
