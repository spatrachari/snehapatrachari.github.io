import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import { Background0 } from "./Background0";
import { Background1 } from "./Background1";
import { Background2 } from "./Background2";
import { Background3 } from "./Background3";
import { Background4 } from "./Background4";
import { TwinklingStars } from "./TwinklingStars";
import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <Container fluid>
          <div className="splash">
            <div className="header">
              <Parallax y={["0px", "150px"]}>
                <span className="gradient-text">Hello.</span>
              </Parallax>
            </div>
            {/* <Parallax y={["0px", "500px"]} className="stars">
              <TwinklingStars />
            </Parallax> */}
            <div className="background">
              <Parallax y={["0px", "300px"]}>
                <Background0 />
              </Parallax>
              <Parallax y={["0px", "225px"]}>
                <Background1 />
              </Parallax>
              <Parallax y={["0px", "150px"]}>
                <Background2 />
              </Parallax>
              <Parallax y={["0px", "75px"]}>
                <Background3 />
              </Parallax>
              <Background4 />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
