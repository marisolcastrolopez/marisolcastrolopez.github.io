
import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Icon, Layout } from "antd";
import "../../css/grid.css";
// import "../../css/index.css";
// import bqphone from "../../img/bg-bq-phone.png";
// import { Link } from "react-router-dom";
import mockupviews from "../../img/mockups-bqueeen.jpg";
import mockupfirst from "../../img/mockups-bqueeen-firstui.jpg";
import mockupsecond from "../../img/mockups-bqueeen-secondui.jpg";
import mockupbgshare from "../../img/shareasmile-other.jpg";

import { Spring } from "react-spring/renderprops";
const { Footer } = Layout;

export default function InfoShareaSmile() {
  return (
    <Fragment>
      <Spring
        from={{
          opacity: 0,
          marginLeft: -100,
          backgroundColor: "#9788e7",
          backgroundImage: `url(${mockupbgshare})`,
          backgroundSize: "cover",
          // height: `${100}vh`,
          backgroundPosition: `${50}% ${50}%`
        }}
        to={{
          opacity: 1,
          marginLeft: 0,
          backgroundColor: "#9788e7",
          backgroundImage: `url(${mockupbgshare})`,
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
                  <span style={{ color: "#f7f7f7" }} className="upperStyle wht">
                    Next >
                  </span>
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
                    Share a
                  </span>
                  <span
                    style={{ display: "block", marginTop: `${-0.6}rem` }}
                    className="proj-title wht"
                  >
                    Smile
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
                    <span style={{ fontWeight: "700" }}>Credits:</span> Developed with Lucy Mendez and Karla Valenzuela
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
                  This is a Social Network App made for people who wants to connect with others to buy, sell or donate children's items.
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
              <Footer style={footer}>
                <Row>
                  <Col style={{marginBottom: `${1}rem`}} xs={24} sm={24} md={24} lg={24} xl={24}>
                    <span
                      style={{
                        fontSize: `${1.2}rem`,
                        color: "#f6f7fa",
                        fontWeight: 700,
                      }}
                    >
                      Let's talk :)
                    </span>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center", marginBottom: `${1}rem`}} type="flex">
                <Col xs={3} sm={3} md={9} lg={9} xl={9} />
                <Col xs={6} sm={6} md={2} lg={2} xl={2}>
                    <a
                      href={"https://www.linkedin.com/in/marisolcastrolopez/"}
                      target={"_blank"}
                    >
                      <Icon
                        type="linkedin"
                        className="padFAwe"
                        style={{ fontSize: "30px", color: "#f6f7fa" }}
                      />
                    </a>
                  </Col>
                  <Col xs={6} sm={6} md={2} lg={2} xl={2}>
                    <a
                      href={"https://github.com/marisolcastrolopez/"}
                      target={"_blank"}
                    >
                      <Icon
                        type="github"
                        className="padFAwe"
                        style={{ fontSize: "30px", color: "#f6f7fa" }}
                      />
                    </a>
                  </Col>
                  <Col xs={6} sm={6} md={2} lg={2} xl={2}>
                    <a
                      href={"https://www.linkedin.com/in/marisolcastrolopez/"}
                      target={"_blank"}
                    >
                      <Icon
                        type="twitter"
                        className="padFAwe"
                        style={{ fontSize: "30px", color: "#f6f7fa" }}
                      />
                    </a>
                  </Col>
                  <Col xs={3} sm={3} md={9} lg={9} xl={9}/>
                </Row>
                <Row style={{ textAlign: "center" }} type="flex">
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <span style={{ fontSize: `${1.2}rem`, color: "#f6f7fa", fontWeight: 100, }}>
                      solcastrodg@gmail.com
                    </span>
                  </Col>
                </Row>
              </Footer>
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
  width: `${100}%`,
  paddingTop: `${3.5}rem`,
  paddingBottom: `${3.5}rem`
};
