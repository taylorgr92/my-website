import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const MyProjects = () => {
  return (
    <section id="projects-section">
      <Container id="projects-container">
        <Row>
          {/* Project #1 */}
          <Col>
            <Card
              style={{
                width: "25rem",
                backgroundColor: "transparent",
                border: "none",
              }}
              class="project-card"
            >
              <Card.Img
                variant="top"
                src="https://lh3.googleusercontent.com/H18ke-ZfqzKWQCDKfVL33q1uUWz3Bbgss5sSfZBrGBApiJzduagttB3FSB-sYCP1Z2E0NYGs9JMghJnKmYK9fLsAVJXQlFNYLte3elW3CqEnUNW6ntJW3q2nJCzFLvb1SwhhesPJ9Q=w2400"
              ></Card.Img>
              <Card.Body>
                <Card.Text class="project-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Project #2 */}
          <Col>
            <Card
              style={{
                width: "25rem",
                backgroundColor: "transparent",
                border: "none",
              }}
              class="project-card"
            >
              <Card.Img
                variant="top"
                src="https://lh3.googleusercontent.com/H18ke-ZfqzKWQCDKfVL33q1uUWz3Bbgss5sSfZBrGBApiJzduagttB3FSB-sYCP1Z2E0NYGs9JMghJnKmYK9fLsAVJXQlFNYLte3elW3CqEnUNW6ntJW3q2nJCzFLvb1SwhhesPJ9Q=w2400"
              ></Card.Img>
              <Card.Body>
                <Card.Text class="project-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Project #3 */}

          <Col>
            <Card
              style={{
                width: "25rem",
                backgroundColor: "transparent",
                border: "none",
              }}
              class="project-card"
            >
              {" "}
              <Card.Img
                variant="top"
                src="https://lh3.googleusercontent.com/H18ke-ZfqzKWQCDKfVL33q1uUWz3Bbgss5sSfZBrGBApiJzduagttB3FSB-sYCP1Z2E0NYGs9JMghJnKmYK9fLsAVJXQlFNYLte3elW3CqEnUNW6ntJW3q2nJCzFLvb1SwhhesPJ9Q=w2400"
              ></Card.Img>
              <Card.Body>
                <Card.Text class="project-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyProjects;
