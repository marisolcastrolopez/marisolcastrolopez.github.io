import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "../../css/grid.css";
import "../../css/index.css";
import FooterPort from "../Footer/FooterPort"
import bgpurple from "../../img/purplebg.png";
import mockuphones from "../../img/mockuphones.png";

import { Spring } from "react-spring/renderprops";

export default function InfoShareaSmile() {
  return (
    <Fragment>
      <Spring
        from={{
          opacity: 0,
          marginLeft: -100,
          backgroundColor: "#9788e7",
          backgroundImage: `url(${bgpurple})`,
          backgroundSize: "cover",
          backgroundPosition: `${50}% ${50}%`
        }}
        to={{
          opacity: 1,
          marginLeft: 0,
          backgroundColor: "#9788e7",
          backgroundImage: `url(${bgpurple})`,
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
                  md={21}
                  lg={21}
                  xl={21}
                >
                  <span style={{ color: "#f7f7f7" }} className="upperStyle wht">
                    Next >
                  </span>
                </Col>
              </Row>
              <Row type="flex" style={{ paddingTop: `${0}rem` }}>
                <Col xs={0} sm={0} md={3} lg={3} xl={3} />
                <Col
                  style={{ paddingLeft: `${1}rem`, paddingRight: `${1}rem` }}
                  xs={24}
                  sm={24}
                  md={21}
                  lg={21}
                  xl={21}
                >
                  {" "}
                  <img className="responsive" src={mockuphones} alt="Logo" />;
                  <span style={{ display: "block" }} className="proj-title wht">
                    Share a Smile
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
                  md={21}
                  lg={21}
                  xl={21}
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
              <FooterPort/>
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