import useInView from "react-cool-inview";
import { Col, Container, Form } from "react-bootstrap";
import SocialMediaLinks from "./SocialMediaLinks";
import SectionHeader from "../components/SectionHeader";
import "./contact.scss";

const Contact = () => {
  const { ref, inView } = useInView({ rootMargin: "-50px 0px" });

  return (
    <div id="contact">
      <SectionHeader>Contact Me</SectionHeader>
      <SocialMediaLinks />
      <Container fluid>
        <Col md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
          <Form
            className="form"
            action="https://formspree.io/xledbnda"
            method="POST"
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Your email address:</Form.Label>
              <Form.Control
                name="_replyto"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" name="message" rows={4} />
            </Form.Group>
            <button type="submit">Send</button>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default Contact;
