import React from "react";
import "react-bootstrap";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../Bootstrap/index.css";
import Fade from "react-reveal/Fade";

const Experience = () => {
  return (
    <div className="bg-dark d-flex">
      <Container>
        <Row className="experience mt-5 mb-5 text-white">
          <Col md={2}></Col>
          <Col md={8} className="d-flex flex-column justify-content-center">
            <Fade bottom timeout={300}>
              <h2 className="text-center mb-5">Work Experience</h2>

              <Card
                style={{ width: "100%" }}
                className="mb-2 mt-5 text-light secondary shadow"
              >
                <Card.Header>Conceptor Weding Terlaris - Pekanbaru</Card.Header>
                <Card.Body>
                  <Card.Title>Editor (Agustus 2019 – Oktober 2019)</Card.Title>
                  <Card.Text>
                    <ul className="text-left">
                      <li>
                        Mengedit video dan membuat desain konten sosial media.
                      </li>
                      <li>Mengelola sosial media.</li>
                      <li>Mendesain banner.</li>
                      <li>
                        Membuat, mendesain, dan mengelola website dengan
                        menggunakan cms Blogger.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                style={{ width: "100%" }}
                className="mb-2 mt-5 text-light secondary shadow"
              >
                <Card.Header>
                  PT. Batara Guru Teknologi – Jakarta Selatan
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    Graphic Designer (September 2020 – September 2021)
                  </Card.Title>
                  <Card.Text>
                    <ul className="text-left">
                      <li>Mendesain konten sosial media</li>
                      <li>Mengedit konten video.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
