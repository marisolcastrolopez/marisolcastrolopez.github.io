import React, { Fragment } from "react";
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
                Is a Point of Sale (POS), for a restaurant.
              </p>
            </div>
          </div>
        )}
      </Spring>
    </Fragment>
  );
}

const c2style = {
  // background: "#F9CE21",
  color: "#111",
  padding: "1.5rem"
};
