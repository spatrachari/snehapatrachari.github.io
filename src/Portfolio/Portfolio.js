import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "./Modal";
import SectionHeader from "../components/SectionHeader";
import PDFViewer from "./PDFViewer";
import "./portfolio.scss";

import project1Thumbnail from "../assets/project_1_thumbnail.png";
import project2Thumbnail from "../assets/project_2_thumbnail.png";
import project3Thumbnail from "../assets/project_3_thumbnail.png";
import project4Thumbnail from "../assets/project_4_thumbnail.png";

import Project1PDF from "../assets/project_1_details.pdf";
import Project2PDF from "../assets/project_2_details.pdf";
import Project3PDF from "../assets/project_3_details.pdf";
import Project4PDF from "../assets/project_4_details.pdf";

const Thumbnail = (props) => {
  return (
    <div className={`preview-image ${props.color || ""}`}>
      {props.title && (
        <div className="header">
          <span className="image-title">{props.title}</span>{" "}
          <span className="image-description">{props.description}</span>
        </div>
      )}
      <div className={`${props.color ? "frame" : ""}`} onClick={props.onClick}>
        <img src={props.image} />
      </div>
    </div>
  );
};

const projectDetails = [
  {
    title: "USDA ERS Redesign",
    body: (
      <Container fluid>
        <PDFViewer file={Project1PDF} />
      </Container>
    ),
  },

  {
    title: "Smart Pill Bottle",
    body: (
      <Container fluid>
        <PDFViewer file={Project2PDF} />
      </Container>
    ),
  },

  {
    title: "Field Research Report",
    body: (
      <Container fluid>
        <PDFViewer file={Project3PDF} />
      </Container>
    ),
  },

  {
    title: "Splitwise Redesign",
    body: (
      <Container fluid>
        <PDFViewer file={Project4PDF} />
      </Container>
    ),
  },
];

export default class Portfolio extends Component {
  state = {
    openModalIndex: null,
  };

  openModal = (projectIndex) => {
    this.setState({ openModalIndex: projectIndex });
  };

  closeModal = () => {
    this.setState({ openModalIndex: null });
  };

  render() {
    const { openModalIndex } = this.state;

    return (
      <div id="portfolio">
        <SectionHeader>Portfolio</SectionHeader>
        <Container fluid>
          <Row noGutters>
            <Col md={6} className="left-col">
              <Thumbnail
                onClick={() => this.openModal(0)}
                color="green"
                title="USDA ERS Redesign"
                description="A more accessible and engaging web page for users to  gather information"
                image={project1Thumbnail}
              />
              <Thumbnail
                onClick={() => this.openModal(2)}
                color="red"
                title="Field Research Report"
                description="An analysis of customer-vendor interactions in farmer’s markets"
                image={project3Thumbnail}
              />
            </Col>
            <Col md={6} className="right-col">
              <Thumbnail
                onClick={() => this.openModal(1)}
                color="honey"
                title="Smart Pill Bottle"
                description="A product to regulate drug consumption and control substance abuse"
                image={project2Thumbnail}
              />
              <Thumbnail
                onClick={() => this.openModal(3)}
                color="navy"
                title="Splitwise Redesign"
                description="A solution to improve intuitiveness of the app interface"
                image={project4Thumbnail}
              />
            </Col>
          </Row>

          {projectDetails.map((details, i) => (
            <Modal
              key={`ProjectModal_${i}`}
              title={details.title}
              show={openModalIndex === i}
              closeModal={this.closeModal}
            >
              {details.body}
            </Modal>
          ))}
        </Container>
      </div>
    );
  }
}
