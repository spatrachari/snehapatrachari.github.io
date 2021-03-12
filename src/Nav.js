import { Component, useRef } from "react";
import { Col, Nav as BNav, Navbar, Row } from "react-bootstrap";
import { Element, Link as ScrollLink } from "react-scroll";
import Home from "./Home/Home";
import { SelfDescription } from "./Home/SelfDescription";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import "./nav.scss";

class Link extends Component {
  state = { active: false };
  handleSetActive = (e) => {
    this.setState({
      active: true,
    });
  };
  handleSetInactive = () => {
    this.setState({
      active: false,
    });
  };
  render() {
    return (
      <div className={`link ${this.state.active ? "active" : ""}`}>
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to={this.props.to}
          {...this.props}
          onSetActive={this.handleSetActive}
          onSetInactive={this.handleSetInactive}
        >
          {this.props.children}
        </ScrollLink>
      </div>
    );
  }
}

export default class Nav extends Component {
  state = { active: false };

  handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    this.setState({ active: scrollPosition > 772 });
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <div>
        <Row
          className={`nav ${this.state.active ? "active" : "inactive"}`}
          noGutters
        >
          <Navbar className="bootstrap-nav" expand="md" collapseOnSelect>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <BNav>
                <Col md={{ span: 2, offset: 3 }}>
                  <BNav.Item>
                    <Link to="portfolio">Portfolio</Link>
                  </BNav.Item>
                </Col>
                <Col md={2}>
                  <BNav.Item>
                    <Link to="aboutMe">About Me</Link>
                  </BNav.Item>
                </Col>
                <Col md={2}>
                  <BNav.Item>
                    <Link to="contact">Contact Me</Link>
                  </BNav.Item>
                </Col>
              </BNav>
            </Navbar.Collapse>
          </Navbar>
        </Row>

        <div className="page">
          <Element name="home">
            <Home />
          </Element>
          <SelfDescription />
          <Element name="porfolio">
            <Portfolio />
          </Element>
          <Element name="aboutMe">
            <AboutMe />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </div>
    );
  }
}
