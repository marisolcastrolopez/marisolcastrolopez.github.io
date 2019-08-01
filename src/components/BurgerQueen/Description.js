import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import { Button, Row, Col } from "antd";
import "../../css/grid.css";
import "../../css/index.css";
import bqphone from "../../img/bg-bq-phone.png";

import { Spring } from "react-spring/renderprops";

export default function Description() {
  return (
    <Fragment>
      <Spring
        from={{ opacity: 0, marginLeft: -100, backgroundColor: "#ea821f" }}
        to={{ opacity: 1, marginLeft: 0, backgroundColor: "#ea821f" }}
      >
        {props => (
          <div style={props}>
            <div style={c2style}>
              <Row type="flex">
                <Col
                  style={{
                    paddingLeft: `${1}rem`,
                    paddingRight: `${1}rem`,
                    paddingTop: `${3}rem`
                  }}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                >
                  <span
                    style={{ float: "right", color: "#f7f7f7" }}
                    className="upperStyle wht"
                  >
                    Next >
                  </span>
                </Col>
                <Col
                  style={{ paddingLeft: `${1}rem`, paddingRight: `${1}rem` }}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                >
                  <span
                    style={{ display: "block" }}
                    className="proj-title wht"
                  >
                    Burger
                  </span>
                  <span
                    style={{ display: "block", marginTop: `${-0.6}rem` }}
                    className="proj-title wht"
                  >
                    Queen
                  </span>
                </Col>
                <Col
                  style={{
                    paddingLeft: `${1}rem`,
                    paddingRight: `${1}rem`,
                    paddingTop: `${1}rem`
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
                      fontSize: `${0.85}rem`,
                      
                    }}
                    className="wht"
                  >
                    <span style={{ fontWeight: "700" }}>Credits:</span> Marisol
                    Castro
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: `${0.85}rem`,
                      
                    }}
                    className="wht"
                  >
                    <span style={{ fontWeight: "700" }}>Role:</span> Front-End
                    Developer / UI Designer
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: `${0.85}rem`,
                      
                    }}
                    className="wht"
                  >
                    <span style={{ fontWeight: "700" }}>Date:</span> May 2019
                  </span>
                </Col>
                <Col
                  style={{
                    paddingLeft: `${1}rem`,
                    paddingRight: `${1}rem`
                  }}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                >
                  <p style={{ fontSize: `${0.9}rem`, color: "#f7f7f7", }}>
                    Point of Sale (POS, Webapp), for a restaurant.
                  </p>
                </Col>
                <Col
                  style={{
                    paddingLeft: `${1}rem`,
                    paddingRight: `${1}rem`,
                    paddingTop: `${1.2}rem`
                  }}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
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
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <img className="responsive" src={bqphone} alt="bg" />
                </Col>
                <Col
                  style={{
                    paddingLeft: `${1}rem`,
                    paddingRight: `${1}rem`,
                    backgroundColor: "#f7f7f7",
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
                    Technologies used
                  </span>
                  <span style={{ fontSize: `${0.9}rem`, color: "#63605f" }}>
                    ReactJS, React Router, JSX, HTML, CSS, Firebase
                    deployment, Antd Design UI framework, Figma.
                  </span>
                </Col>
                <Col
                  style={{
                    paddingLeft: `${1}rem`,
                    paddingRight: `${1}rem`
                  }}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                >
                  {/* <span
                    style={{
                      display: "block",
                      fontWeight: 700,
                      fontSize: `${1.4}rem`,
                      paddingTop: `${1.5}rem`,
                      color: "#f2994a"
                    }}
                  >
                   Devices
                  </span> */}
                  <span style={{ fontSize: `${0.9}rem`, color: "#63605f" }}>
                  For Tablet and Desktop
                  </span>
                </Col>
                
              </Row>
            </div>
            <div style={footer}>
              {/* <p>Technologies:</p>
              <ul>
                <li>ReactJS</li>
                <li>React Router</li>
                <li>JSX</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Firebase deployment</li>
                <li>Antd Design UI framework</li>
              </ul> */}
              <span style={{ display: "block" }} className="upperStyle">
                Next project
              </span>
              <span
                style={{
                  display: "block",
                  fontWeight: 700,
                  paddingTop: `${0.2}rem`
                }}
                className="sizeLarge"
              >
                Share a Smile
              </span>
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
const footer = {
  background: "#2e2e2e",
  color: "#FFF",
  textAlign: "center",
  position: "relative",
  bottom: -10,
  width: `${100}%`,
  paddingTop: `${3.5}rem`,
  paddingBottom: `${3.5}rem`
};
