import { Col, Container } from "react-bootstrap";
import SectionHeader from "../components/SectionHeader";
import "./aboutMe.scss";
import Skills from "./Skills";
import Timeline from "./Timeline";

const Dash = () => <span className="dash">————</span>;

const Subheading = ({ text }) => (
  <div className="subheading">
    <Dash />
    <div className="subheading-text">{text}</div>
    <Dash />
  </div>
);

const AboutMe = () => {
  return (
    <div id="aboutMe">
      <SectionHeader>About Me</SectionHeader>
      <Container fluid>
        <Subheading text="Skills" />
        <Col xs={12} lg={{ span: 8, offset: 2 }}>
          <Skills />
        </Col>

        <Subheading text="My Journey" />
        <Col xs={12} lg={{ span: 8, offset: 2 }}>
          <Timeline />
        </Col>
      </Container>
    </div>
  );
};

export default AboutMe;
