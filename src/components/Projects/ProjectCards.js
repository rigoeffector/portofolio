import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <div style={{ height: "200px", width: "100%", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover", // Fills the space without distortion
          }}
        />
      </div>

      <Card.Body
        className="d-flex flex-column justify-content-between"
        style={{ height: "100%" }}
      >
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "12px" }}>
            {props.description}
          </Card.Text>
        </div>

        {!props.isBlog && props.demoLink && (
          <div className="mt-auto">
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="w-100"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
