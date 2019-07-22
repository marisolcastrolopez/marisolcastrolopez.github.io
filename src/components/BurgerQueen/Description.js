import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import { Icon, Row, Col } from "antd";
import "../../css/grid.css";
import "../../css/index.css"

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
              <span>Burger Queen</span>
              <span className="upperStyle">Year: 2019</span>
              <p>
                Is a Point of Sale (POS), for a restaurant. Designed and
                inspired in order to have the best User Experience through a
                friendly User Interface.
              </p>
              <Row type="flex">
                <Col xs={20} sm={20} md={12} lg={12} xl={12}>
                  <a
                    className="inner-btn"
                    href={"https://burger-queen-gdl002marisol.firebaseapp.com/"}
                    target={"_blank"}
                    rel="nofollow noopener noreferrer"
                  >
                    <span className="upperStyle">Launch Demo</span>
                  </a>
                </Col>
                <Col className="abs-icon" xs={4} sm={4} md={12} lg={12} xl={12}>
                  <a
                    href={
                      "https://github.com/marisolcastrolopez/gdl002-burger-queen"
                    }
                    target={"_blank"}
                    rel="nofollow noopener noreferrer"
                  >
                    <Icon type="github" style={{ fontSize: "35px" }} />
                  </a>
                </Col>
              </Row>
            </div>
            <div style={c3style}>
              <p>Technologies:</p>
              <ul>
                <li>ReactJS</li>
                <li>React Router</li>
                <li>JSX</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Firebase deployment</li>
                <li>Antd Design UI framework</li>
              </ul>
            </div>
          </div>
        )}
      </Spring>
    </Fragment>
  );
}

const c2style = {
  // background: "#F9CE21",
  color: "#292525",
  padding: "1.5rem",
  paddingTop: 55,
  backgroundImage: `linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)`
};
const c3style = {
  background: "pink",
  color: "#111",
  padding: "1.5rem",
};
