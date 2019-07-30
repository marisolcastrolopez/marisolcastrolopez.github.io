import React, { Component } from "react";
import "../../css/index.css";
import { Transition, animated } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import { Icon } from "antd";
// import { useSpring } from "react-spring";
// import Test from "../Home/Test"
// import 'antd/dist/antd.css';

// const props = useSpring({
//   opacity: 1,
//   from: { opacity: 0 },
// })
// return <animated.h1 style={props}>hello</animated.h1>

export default class HomeContent extends Component {
  state = { show: true };
  render() {
    return (
      <div className="pad-section">
        <div className="reveals-main">
          <Transition
            native
            items={this.state.show}
            from={{
              position: "relative",
              overflow: "hidden",
              height: `${100}vh`,
              paddingTop: `${12}vh`,
              paddingBottom: `${5}%`,
              paddingRight: `${4}%`,
              // opacity: 0
              transform: 'translate3d(0,-120px,0)'
            }}
            enter={[{
              // opacity: 1,
              transform: 'translate3d(0,0px,0)'
               }]}
               leave={ {opacity: 0} }
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <span className="titles whiteFont">
                    Hello! I'm <br />
                    <span className="boldTitle whiteFont">Marisol Castro</span>
                  </span>
                  <br />
                  <span className="sizeMedium whiteFont">
                    I'm a Frontend Developer and Graphic Designer.
                  </span>
                  <br />
                  <span className="whiteFont">
                    I am a detail-oriented person. I feel passion about
                    science,technology UX and UI.
                  </span>
                  <br />
                  <br />
                  <br />
                  <Link className="line-btn" to="/burgerqueen">
                    <span className="upperStyle">
                      See Proyects
                      <Icon className="arrow1 iconAnt" type="arrow-right" />
                    </span>
                  </Link>
                </animated.div>
              ))
            }
          </Transition>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
