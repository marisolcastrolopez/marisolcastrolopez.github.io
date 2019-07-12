import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
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
              <h1>Burger Queen</h1>
              <p>
                Is a Point of Sale (POS), for a restaurant. Designed and
                inspired in order to have the best User Experience through a
                friendly User Interface.
              </p>
              <a
              className="line-btn"
                href={"https://burger-queen-gdl002marisol.firebaseapp.com/"}
                target={"_blank"}
              >
                <span className="upperStyle">
                  Launch Demo
                  <Icon className="arrow1 iconAnt" type="arrow-right" />
                </span>
              </a>
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
  background: "#F9CE21",
  color: "#111",
  padding: "1.5rem"
};
const c3style = {
  background: "pink",
  color: "#111",
  padding: "1.5rem"
};
