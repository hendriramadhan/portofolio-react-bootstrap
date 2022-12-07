import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="about d-flex">
      <Container>
        <Row className="mb-5 mt-5 text-white">
          <Col md={2}></Col>

          <Col
            md={8}
            className="d-flex flex-column justify-content-center text-center"
          >
            <Fade bottom>
              <h2>About Me</h2>
            </Fade>
            <Fade left time={300}>
              <p className="mt-5 mb-5 fs-5">
                Perkenalkan saya Hendri Ramadhan, lahir di jakarta 11 Januari
                1997. Memiliki passion dalam dunia Ilmu Teknologi membuat saya
                ingin mengetahui banyak hal tentang desain web, dan programming.
                Saya adalah orang yang ingin terus mengupdate ilmu saya dalam
                bidang SEO, desain web, dan programming.
              </p>
            </Fade>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
