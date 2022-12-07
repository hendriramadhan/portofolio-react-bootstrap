import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import Fade from "react-reveal/Fade";
import hendri from "../Assets/Image/hendri.png";
import "./index.scss";

import { Container, Col, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Value Import

export default class Profile extends React.Component {
  render() {
    return (
      <div className="home d-flex bg-dark">
        <Container>
          <Row className="mb-5 mt-5">
            <Col xs={12} md={4} className="pt-5">
              <Fade left time={300}>
                <p className="text-white text-end fs-5">Hello, I'm </p>
                <h2 className="text-white fs-1 text-end">Hendri Ramadhan</h2>
              </Fade>
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <Fade bottom time={300}>
                <Image
                  src={hendri}
                  alt="Hendri Ramadhan"
                  width={300}
                  roundedCircle
                />
              </Fade>
            </Col>
            <Col xs={12} md={4} className="pt-5">
              <Fade right time={1000}>
                <h2 className="text-white fs-1 text-start">
                  Junior Front End <br />
                  Web Developer
                </h2>
              </Fade>
            </Col>
          </Row>
          <Row className=" mb-5">
            <Col md={3}></Col>
            <Col md={2} className="d-flex justify-content-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className="text-white"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </Col>
            <Col md={2} className="d-flex justify-content-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className="text-white"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Col>
            <Col md={2} className="d-flex justify-content-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className="text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
