import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Icon } from "antd";
import "../../css/grid.css";
import "../../css/index.css";
import FooterPort from "../Footer/FooterPort";
import bgpurple from "../../img/purplebg.png";
import mockuphones from "../../img/mockuphones.png";
import deepurple from "../../img/purple-deep.png";
import teddy from "../../img/againteddy.jpg"

import { Spring } from "react-spring/renderprops";

export default function InfoShareaSmile() {
  return (
    <Fragment>
      <Spring
        from={{
          opacity: 0,
          marginLeft: -100,
          backgroundColor: "#9788e7",
          backgroundImage: `url(${deepurple})`,
          backgroundSize: "cover",
          backgroundPosition: `${50}% ${50}%`
        }}
        to={{
          opacity: 1,
          marginLeft: 0,
          backgroundColor: "#9788e7",
          backgroundImage: `url(${deepurple})`,
          backgroundSize: "cover",
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
                  md={18}
                  lg={18}
                  xl={18}
                >
                  <Link className="menu-links" to="/burgerqueen">
                    {" "}
                    <span
                      style={{ color: "#f7f7f7", float: "left" }}
                      className="upperStyle wht"
                    >
                      {"<"} Back
                    </span>
                  </Link>
                  <Link className="menu-links" to="/sharesmile">
                    {" "}
                    <span
                      style={{ color: "#f7f7f7", float: "right" }}
                      className="upperStyle wht"
                    >
                      Next {">"}
                    </span>
                  </Link>
                </Col>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
              </Row>
              <Row type="flex" style={{ paddingTop: `${0}rem` }}>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
                <Col
                  style={{ paddingLeft: `${1}rem`, paddingRight: `${1}rem` }}
                  xs={24}
                  sm={24}
                  md={9}
                  lg={9}
                  xl={9}
                >
                  <img className="responsive" src={mockuphones} alt="Logo" />
                </Col>
                <Col xs={0} sm={0} md={9} lg={9} xl={9}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      height: `${20}vh`,
                      paddingTop: `${12}%`,
                      paddingBottom: `${1}%`
                    }}
                  >
                    <span style={{}} className="proj-title wht">
                      Share a Smile
                    </span>
                    <span
                      style={{
                        fontSize: `${0.85}rem`
                      }}
                      className="wht"
                    >
                      <span style={{ fontWeight: "700" }}>Credits:</span>{" "}
                      Developed with Lucy Mendez and Karla Valenzuela
                    </span>
                    <span
                      style={{
                        fontSize: `${0.85}rem`
                      }}
                      className="wht"
                    >
                      <span
                        style={{
                          fontWeight: "700"
                        }}
                      >
                        Role:
                      </span>{" "}
                      Front-End Developer / UI Designer
                    </span>
                    <span
                      style={{
                        fontSize: `${0.85}rem`
                      }}
                      className="wht"
                    >
                      <span style={{ fontWeight: "700" }}>Date:</span> March
                      2019
                    </span>
                  </div>
                  <a
                    className="inner-btn pad-btn-demo btn-purple"
                    href={"https://burger-queen-gdl002marisol.firebaseapp.com/"}
                    target={"_blank"}
                    rel="nofollow noopener noreferrer"
                  >
                    <span className="upperStyle">Demo</span>
                  </a>
                  <a
                    className="inner-btn btn-purple"
                    href={
                      "https://github.com/marisolcastrolopez/gdl002-burger-queen"
                    }
                    target={"_blank"}
                    rel="nofollow noopener noreferrer"
                  >
                    <span className="upperStyle">Code {`<>`} </span>
                  </a>
                </Col>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
              </Row>
              <Row type="flex" style={{ paddingTop: `${0}rem` }}>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
                <Col
                  style={{ paddingLeft: `${1}rem`, paddingRight: `${1}rem` }}
                  xs={24}
                  sm={24}
                  md={0}
                  lg={0}
                  xl={0}
                >
                  <span style={{ display: "block" }} className="proj-title wht">
                    Share a Smile
                  </span>
                </Col>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
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
                  md={0}
                  lg={0}
                  xl={0}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: `${0.85}rem`
                    }}
                    className="wht"
                  >
                    <span style={{ fontWeight: "700" }}>Credits:</span>{" "}
                    Developed with Lucy Mendez and Karla Valenzuela
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
                    <span style={{ fontWeight: "700" }}>Date:</span> March 2019
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
                  md={0}
                  lg={0}
                  xl={0}
                >
                  <p style={{ fontSize: `${0.9}rem`, color: "#f7f7f7" }}>
                    This is a Social Network App made for people who wants to
                    connect with others to buy, sell or donate children's items.
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
                  md={0}
                  lg={0}
                  xl={0}
                >
                  <a
                    className="inner-btn pad-btn-demo btn-purple"
                    href={"https://burger-queen-gdl002marisol.firebaseapp.com/"}
                    target={"_blank"}
                    rel="nofollow noopener noreferrer"
                  >
                    <span className="upperStyle">Demo</span>
                  </a>
                  <a
                    className="inner-btn btn-purple"
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
              {/* -----------Next Section--------------- */}
              <Row>
                <Col
                  style={{
                    paddingLeft: `${0.5}rem`,
                    paddingRight: `${0.5}rem`,
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
                      color: "#9788e7"
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
                    Javascript ES6 , HTML , CSS , Firebase, Single Page Application,
                    Sweet Alert, Foundation UI framework, UX Research, Figma, Wireframing.
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
                    For Mobile, Tablet and Desktop
                  </span>
                  <img style={{
                    paddingTop: `${2}rem`,
                    paddingBottom: `${2}rem`,
                  }} className="responsive" src={teddy} alt="Logo" />
                </Col>
              </Row>
              <FooterPort />
            </div>
          </div>
        )}
      </Spring>
    </Fragment>
  );
}

const c2style = {
  paddingTop: 55
  // height: `${100}vh`
};
