import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import MyProjects from "./MyProjects.js";

const MainSect = () => {
  return (
    <>
      <section id="main-section">
        <Container id="main-container">
          <Row>
            <Col>
              <Card style={{ width: "32rem" }} id="title-card">
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
              </Card>
            </Col>

            <Col>
              <Image
                src="https://lh3.googleusercontent.com/pw/AJFCJaV5xGzVd5yQoNjebA1gPqsyJVc9Cky0Y5ERjgS6lFqZpnRtknjSdOF4BcxK0Wpb73Cf2arzsuRUjZXq_IXN5YbFihPysNEik-m4el7XoWVZ3gYRxgw=w2400"
                alt="Woman in glasses facing camera and smiling"
                id="my-portrait"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <MyProjects />
    </>
  );
};

export default MainSect;
