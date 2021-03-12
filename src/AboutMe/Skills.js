import { Col, Container, Row } from "react-bootstrap";
import "./skills.scss";

const TagRow = (props) => {
  return (
    <div className={`tag-row ${props.color}`}>
      <Row>
        <Col xs={12} md={4}>
          <div className="label">{props.label}</div>
        </Col>
        <Col xs={12} md={7}>
          <div className="tags">
            {props.tags.map((tag, i) => (
              <div key={`tag_${tag}_${i}`} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills">
      <Container fluid>
        <TagRow
          label="Visual Design Technologies"
          color="red"
          tags={[
            "Figma",
            "Procreate",
            "Adobe InDesign",

            "Adobe Illustrator",
            "Adobe PhotoShop",
          ]}
        />
        <TagRow
          label="Frontend Languages"
          color="honey"
          tags={["HTML5", "CSS", "JavaScript"]}
        />
        <TagRow
          label="Backend Languages"
          color="green"
          tags={["NodeJS", "Python", "C++"]}
        />
        <TagRow
          label="DevOps Technologies"
          color="blue"
          tags={[
            "AWS",
            "Kubernetes",
            "Ansible",
            "Jenkins",
            "Nginx",
            "Bash",
            "Docker",
            "Terraform",
          ]}
        />
        <TagRow
          label="Workflow Tools"
          color="navy"
          tags={["Git/Github", "Jira", "Confluence"]}
        />
      </Container>
    </div>
  );
};

export default Skills;
