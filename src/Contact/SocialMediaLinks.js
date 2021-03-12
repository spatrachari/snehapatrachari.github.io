import {
  faDribbble,
  faGithubAlt,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRef } from "react";
import {
  Col,
  Container,
  OverlayTrigger,
  Popover as BPopover,
  Row,
} from "react-bootstrap";

const popover = () => (
  <div className="media-popover">
    <BPopover placement="right">
      <BPopover.Content>Coming soon!</BPopover.Content>
    </BPopover>
  </div>
);

export default function SocialMediaLinks() {
  const ref = createRef();

  return (
    <Container fluid className="social-media-links">
      <Row className="justify-content-sm-center">
        <Col md={3} lg={2}>
          <a href="https://github.com/spatrachari" target="_blank">
            <span className="tile github">
              <FontAwesomeIcon icon={faGithubAlt} />
              <p> - GitHub</p>
            </span>
          </a>
        </Col>
        <Col md={3} lg={2}>
          <a
            href="https://www.linkedin.com/in/snehapatrachari/"
            target="_blank"
          >
            <span className="tile linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
              <p> - LinkedIn</p>
            </span>
          </a>
        </Col>
        <Col md={3} lg={2}>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
            container={ref}
          >
            <div ref={ref}>
              <span className="tile dribbble">
                <FontAwesomeIcon icon={faDribbble} />
                <p> - Dribble</p>
              </span>
            </div>
          </OverlayTrigger>
        </Col>
      </Row>
    </Container>
  );
}
