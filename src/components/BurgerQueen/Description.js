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
        from={{ opacity: 0, marginLeft: -100 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {props => (
          <div style={props}>
            <div style={c2style}>
              <Row className="pad-bur" type="flex">
                <Col
                  style={{ paddingLeft: `${6}%`, paddingRight: `${6}%` }}
                  className="pad-textbur"
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                >
                  <span style={{ float: "right" }} className="upperStyle">
                    Next >
                  </span>
                </Col>
                <Col
                  style={{ paddingLeft: `${6}%`, paddingRight: `${6}%` }}
                  className="pad-textbur"
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                >
                  <span
                    style={{ display: "block" }}
                    className="proj-title title-orange"
                  >
                    Burger
                  </span>
                  <span
                    style={{ display: "block", marginTop: `${-0.6}rem` }}
                    className="proj-title title-orange"
                  >
                    Queen
                  </span>
                  <p>
                    <span
                      style={{
                        display: "block",
                        fontSize: `${0.85}rem`,
                        color: "#63605f"
                      }}
                    >
                      <span style={{ fontWeight: "700" }}>Credits:</span>{" "}
                      Marisol Castro
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: `${0.85}rem`,
                        color: "#63605f"
                      }}
                    >
                      <span style={{ fontWeight: "700" }}>Role:</span> Front-End
                      Developer / UI Designer
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: `${0.85}rem`,
                        color: "#63605f"
                      }}
                    >
                      <span style={{ fontWeight: "700" }}>Date:</span> May 2019
                    </span>
                  </p>
                  <p style={{ fontSize: `${0.9}rem`, paddingTop: `${3}%` }}>
                    Is a Point of Sale (POS), for a restaurant. Designed and
                    inspired in order to have the best User Experience through a
                    friendly User Interface.
                  </p>
                </Col>
                <Col
                  style={{
                    paddingLeft: `${6}%`,
                    paddingRight: `${6}%`,
                    paddingTop: `${4}%`
                  }}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                >
                  <a
                    className="inner-btn pad-btn-demo"
                    href={"https://burger-queen-gdl002marisol.firebaseapp.com/"}
                    target={"_blank"}
                    rel="nofollow noopener noreferrer"
                  >
                    <span className="upperStyle">Demo</span>
                  </a>
                  <a
                    className="inner-btn"
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
                  {/* <img className="responsive" src={bqphone} alt="bg" /> */}
                </Col>
              </Row>
            </div>
            <div style={c3style}>
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
              <span style={{ display: "block", fontWeight: 700, paddingTop: `${0.2}rem` }} className="sizeLarge">
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
  background: "#FFF",
  color: "#292525",
  // padding: "0% 6% 0% 6%",
  paddingTop: 55
  // backgroundImage: `linear-gradient(to right, #f2994a, #f2c94c)`
};
const c3style = {
  background: "#2e2e2e",
  color: "#FFF",
  // padding: "1.5rem",
  textAlign: "center",
  // position: "fixed",
  bottom: -4,
  width: `${100}%`,
  paddingTop: `${3.5}rem`,
  paddingBottom: `${3.5}rem`,
};
