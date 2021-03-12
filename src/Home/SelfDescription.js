import { Col, Container, Row } from "react-bootstrap";
import WavingHandEmoji from "../wavingHand.png";
import "./home.scss";

export const SelfDescription = () => (
  <Container fluid>
    <Row>
      <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
        <div className="self-description">
          <img className="handwavey" src={WavingHandEmoji} />
          I'm Sneha, a DevOps Engineer and Designer whose mind is always in the
          cloud.
        </div>
      </Col>
    </Row>
  </Container>
);
