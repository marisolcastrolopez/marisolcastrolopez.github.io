import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Icon } from "antd";
import "../../css/grid.css";
import "../../css/index.css";
import { Link } from "react-router-dom";
import FooterPort from "../Footer/FooterPort"
import mockupviews from "../../img/mockups-bqueeen.jpg";
import mockupfirst from "../../img/mockups-bqueeen-firstui.jpg";
import mockupsecond from "../../img/mockups-bqueeen-secondui.jpg";
import mockupbg from "../../img/mockups-bqueeen-bg.jpg";

import { Spring } from "react-spring/renderprops";


export default function Description() {
  return (
    <Fragment>
      <Spring
        from={{
          opacity: 0,
          marginLeft: -100,
          backgroundColor: "#ea821f",
          backgroundImage: `url(${mockupbg})`,
          backgroundSize: "cover",
          // height: `${100}vh`,
          backgroundPosition: `${50}% ${50}%`
        }}
        to={{
          opacity: 1,
          marginLeft: 0,
          backgroundColor: "#ea821f",
          backgroundSize: "cover",
          // height: `${100}vh`,
          backgroundPosition: `${50}% ${50}%`
        }}
      >
        {props => (
          <div style={props}>
            <div style={c2style}>
              <Row type="flex">
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
                <Col
                  style={{
                    paddingLeft: `${1.2}rem`,
                    paddingRight: `${1}rem`,
                    paddingTop: `${3}rem`
                  }}
                  xs={24}
                  sm={24}
                  md={21}
                  lg={21}
                  xl={21}
                >
                  <Link className="menu-links" to="/sharesmile"> <span style={{ color: "#f7f7f7" }} className="upperStyle wht">
                    Next >
                  </span></Link>
                 
                </Col>
              </Row>
              <Row type="flex" style={{ paddingTop: `${8}rem` }}>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
                <Col
                  style={{ paddingLeft: `${1}rem`, paddingRight: `${1}rem` }}
                  xs={24}
                  sm={24}
                  md={21}
                  lg={21}
                  xl={21}
                >
                  <span style={{ display: "block" }} className="proj-title wht">
                    Burger
                  </span>
                  <span
                    style={{ display: "block", marginTop: `${-0.6}rem` }}
                    className="proj-title wht"
                  >
                    Queen
                  </span>
                </Col>
              </Row>
              <Row>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
                <Col
                  style={{
                    paddingLeft: `${1}rem`,
                    paddingRight: `${1}rem`,
                    paddingTop: `${1}rem`
                  }}
                  xs={24}
                  sm={24}
                  md={21}
                  lg={21}
                  xl={21}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: `${0.85}rem`
                    }}
                    className="wht"
                  >
                    <span style={{ fontWeight: "700" }}>Credits:</span> Marisol
                    Castro
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: `${0.85}rem`
                    }}
                    className="wht"
                  >
                    <span style={{ fontWeight: "700" }}>Role:</span> Front-End
                    Developer / UI Designer
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: `${0.85}rem`
                    }}
                    className="wht"
                  >
                    <span style={{ fontWeight: "700" }}>Date:</span> May 2019
                  </span>
                </Col>
              </Row>
              <Row>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
                <Col
                  style={{
                    paddingLeft: `${1}rem`,
                    paddingRight: `${1}rem`
                  }}
                  xs={24}
                  sm={24}
                  md={21}
                  lg={21}
                  xl={21}
                >
                  <p style={{ fontSize: `${0.9}rem`, color: "#f7f7f7" }}>
                    Point of Sale (POS, Webapp), for a restaurant.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
                <Col
                  style={{
                    paddingLeft: `${1}rem`,
                    paddingRight: `${1}rem`,
                    paddingTop: `${1.2}rem`,
                    paddingBottom: `${4}rem`
                  }}
                  xs={24}
                  sm={24}
                  md={21}
                  lg={21}
                  xl={21}
                >
                  <a
                    className="inner-btn pad-btn-demo btn-orange"
                    href={"https://burger-queen-gdl002marisol.firebaseapp.com/"}
                    target={"_blank"}
                    rel="nofollow noopener noreferrer"
                  >
                    <span className="upperStyle">Demo</span>
                  </a>
                  <a
                    className="inner-btn btn-orange"
                    href={
                      "https://github.com/marisolcastrolopez/gdl002-burger-queen"
                    }
                    target={"_blank"}
                    rel="nofollow noopener noreferrer"
                  >
                    <span className="upperStyle">Code {`<>`} </span>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    paddingLeft: `${1}rem`,
                    paddingRight: `${1}rem`,
                    backgroundColor: "#f7f7f7",
                    textAlign: "center"
                  }}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                >
                  <span
                    style={{
                      display: "block",
                      fontWeight: 700,
                      fontSize: `${1.4}rem`,
                      paddingTop: `${1.5}rem`,
                      color: "#f2994a"
                    }}
                  >
                    <Icon type="tool" style={{ fontSize: "35px" }} />
                    <br />
                    Technologies used
                  </span>
                  <span
                    style={{
                      fontSize: `${0.9}rem`,
                      color: "#63605f",
                      backgroundColor: "#f6f7fa"
                    }}
                  >
                    ReactJS, React Router, JSX, HTML, CSS, Firebase deployment,
                    Antd Design UI framework, Figma.
                  </span>
                  <p />
                  <span
                    style={{
                      fontSize: `${0.9}rem`,
                      color: "#63605f",
                      display: "block",
                      fontWeight: 700
                    }}
                  >
                    For Tablet and Desktop
                  </span>
                </Col>
              </Row>
              <Row
                style={{
                  backgroundColor: "#f6f7fa"
                }}
              >
                <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                  <img className="responsive" src={mockupfirst} alt="bg" />
                </Col>
                <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                  <img className="responsive" src={mockupsecond} alt="bg" />
                </Col>
                <Col
                  style={{
                    paddingLeft: `${2}rem`,
                    paddingRight: `${2}rem`
                  }}
                  xs={0}
                  sm={0}
                  md={24}
                  lg={24}
                  xl={24}
                >
                  <img className="responsive" src={mockupviews} alt="bg" />
                </Col>
              </Row>
              <FooterPort/>
            </div>
          </div>
        )}
      </Spring>
    </Fragment>
  );
}

const c2style = {
  paddingTop: 55,
  height: `${100}vh`
};

