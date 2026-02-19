import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const category = props.category || null;
  const isIcon = props.imgContain === true;
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <div className={`project-card-img-wrap${isIcon ? " project-card-img-wrap--icon" : ""}`}>
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            height: "100%",
            width: "100%",
            objectFit: isIcon ? "contain" : "cover",
          }}
        />
        {category && (
          <span className="project-category-badge project-card-badge">{category}</span>
        )}
      </div>

      <Card.Body
        className="d-flex flex-column justify-content-between"
        style={{ height: "100%" }}
      >
        <div>
          <Card.Title className="project-card-title">{props.title}</Card.Title>
          <Card.Text className="project-card-desc">
            {props.description}
          </Card.Text>
        </div>

        {!props.isBlog && props.demoLink && (
          <div className="mt-auto pt-2">
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="w-100 project-demo-btn"
            >
              <CgWebsite /> &nbsp; View demo
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
