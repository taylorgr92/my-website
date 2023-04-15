import React from "react";
import Card from "react-bootstrap/Card";
import {Container, Row , Col } from 'react-bootstrap';

const MainSect = () => {
  return (
    <section id="main-section">
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} id="title-card">
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Card.Text>
            </Card>
          </Col>
          
        </Row>

      </Container>
    </section>
  );
};

export default MainSect;
