import React, { Fragment, Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Icon, Layout } from "antd";
import "../../css/grid.css";
import "../../css/index.css";

const { Footer } = Layout;

export default class FooterPort extends Component {
  render() {
    return (
      <Fragment>
        <Footer style={footer}>
          <Row>
            <Col
              style={{ marginBottom: `${1}rem` }}
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
            >
              <span
                style={{
                  fontSize: `${1.2}rem`,
                  color: "#f6f7fa",
                  fontWeight: 700
                }}
              >
                Let's talk :)
              </span>
            </Col>
          </Row>
          <Row
            style={{ textAlign: "center", marginBottom: `${1}rem` }}
            type="flex"
          >
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
                href={"https://twitter.com/_marisolcastro"}
                target={"_blank"}
              >
                <Icon
                  type="twitter"
                  className="padFAwe"
                  style={{ fontSize: "30px", color: "#f6f7fa" }}
                />
              </a>
            </Col>
            <Col xs={3} sm={3} md={9} lg={9} xl={9} />
          </Row>
          <Row style={{ textAlign: "center" }} type="flex">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <span
                style={{
                  fontSize: `${1.2}rem`,
                  color: "#f6f7fa",
                  fontWeight: 100
                }}
              >
                solcastrodg@gmail.com
              </span>
            </Col>
          </Row>
        </Footer>
      </Fragment>
    );
  }
}

const footer = {
  background: "#2e2e2e",
  color: "#FFF",
  textAlign: "center",
  width: `${100}%`,
  paddingTop: `${3.5}rem`,
  paddingBottom: `${3.5}rem`
};
