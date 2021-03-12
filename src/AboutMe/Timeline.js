import {
  faGraduationCap,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import "./timeline.scss";

const icons = {
  school: <FontAwesomeIcon icon={faGraduationCap} />,
  work: <FontAwesomeIcon icon={faLaptopCode} />,
  custom: <span className="custom">your company here</span>,
};

const TimelineItem = (props) => {
  return (
    <Row>
      <div className="timeline-item">
        {/* <Col xs={3}> */}
        <div className={`bubble ${props.isEnd ? "end" : ""}`}>
          {icons[props.type]}
        </div>
        {/* </Col> */}
        {/* <Col xs={9}> */}
        <div>
          <Row noGutters>
            <div className="label">{props.label}</div>
          </Row>
          {props.description && (
            <Row noGutters>
              <div className="description">{props.description}</div>
            </Row>
          )}
        </div>
        {/* </Col> */}
      </div>
    </Row>
  );
};

const Timeline = () => {
  return (
    <div id="timeline">
      <Container fluid>
        <TimelineItem
          type="work"
          label="Verizon | '16"
          description="Product and Software Development Intern"
        />
        <TimelineItem
          type="school"
          label="University of California, Davis | '17"
          description="Bachelor of Arts and Sciences in Cognitive Science and Computer Science"
        />
        <TimelineItem
          type="work"
          label="Workday | '17 - '19"
          description="Site Reliability Engineer"
        />
        <TimelineItem
          type="work"
          label="PresenceLearning  | '19 - Present"
          description="Lead DevOps Engineer"
        />
        <TimelineItem
          type="school"
          label="University of California, Irvine | Expected '21"
          description="Masters of Human Computer Interaction and Design"
        />
        <TimelineItem type="custom" label="Reach out below and say hi!" isEnd />
      </Container>
    </div>
  );
};

export default Timeline;
