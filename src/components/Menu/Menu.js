import React, { Fragment } from "react";
import { Icon, Row, Col } from "antd";
import { Link } from "react-router-dom";
import logoImgPurple from "../../img/logo-port-m-purple.png";
import { Spring } from "react-spring/renderprops";

export default ({ close }) => (
  <Spring
    delay={150}
    from={{ opacity: 0, marginLeft: 0 }}
    to={{ opacity: 1, marginLeft: 0 }}
    leave={{ opacity: 0 }}
    // style={{backgroundColor: "#ea821f"}}
  >
    {props => (
      <Fragment>
        <div style={props} className="menu">
          <ul>
            <li>
              <img
                className="logo-img"
                src={logoImgPurple}
                style={{
                  width: `${40}%`,
                  maxWidth: `${5}em`,
                  height: "auto",
                  zIndex: 9999
                }}
                alt="logo-img-purple"
              />
            </li>
            <li onClick={close}>
              <Link className="menu-links" to="/">
                Home
              </Link>
            </li>
            <li onClick={close}>
              <Link className="menu-links" to="/burgerqueen">
                Burger Queen
              </Link>
            </li>
            <li onClick={close}>
              <Link className="menu-links" to="/sharesmile">
                Share a Smile
              </Link>
            </li>
            <li onClick={close}>
              <Link className="menu-links" to="/eyeroad">
                Eye Road
              </Link>
            </li>
            <li onClick={close}>
              <Link className="menu-links" to="/alyapp">
                Aly App
              </Link>
            </li>
            <li onClick={close}>
              <Link className="menu-links" to="/aboutme">
                About Me
              </Link>
            </li>
          </ul>
        </div>
        <Row style={{ textAlign: "center", paddingBottom: `${1}rem`, paddingTop: `${2}rem`, }} type="flex">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
          >
              <span style={{ fontSize: `${1.2}rem`, color: "#db32ab", fontWeight: 700, }}>Let's talk :)</span>
        </Col>
        </Row>
        <Row style={{ textAlign: "center" }} type="flex">
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
            xl={8}
          >
              <a
                href={"https://www.linkedin.com/in/marisolcastrolopez/"}
                target={"_blank"}
              >
                <Icon
                  type="linkedin"
                  className="padFAwe"
                  style={{ fontSize: "30px", color: "#da32ab" }}
                />
              </a>
          </Col>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
            xl={8}
          >
              <a
                href={"https://github.com/marisolcastrolopez/"}
                target={"_blank"}
              >
                <Icon
                  type="github"
                  className="padFAwe"
                  style={{ fontSize: "30px", color: "#da32ab" }}
                />
              </a>
          </Col>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
            xl={8}
          >
              <a
                href={"https://www.linkedin.com/in/marisolcastrolopez/"}
                target={"_blank"}
              >
                <Icon
                  type="twitter"
                  className="padFAwe"
                  style={{ fontSize: "30px", color: "#da32ab" }}
                />
              </a>
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }} type="flex">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
          >
              <span style={{ fontSize: `${1.2}rem`, color: "#db32ab" }}>solcastrodg@gmail.com</span>
          </Col>
        </Row>
      </Fragment>
    )}
  </Spring>
);
