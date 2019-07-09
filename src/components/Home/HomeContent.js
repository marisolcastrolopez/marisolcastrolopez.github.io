import React, { Component } from "react";
import "../../css/index.css";
import { Transition, animated } from "react-spring/renderprops";
import { Icon } from 'antd';
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
              position: "absolute",
              overflow: "hidden",
              height: 0,
              paddingTop: `${70}vh`,
              paddingBottom: `${5}%`,
              paddingRight: `${4}%`
            }}
            enter={[{ height: "auto" }]}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <span className="titles">
                    Hello! I'm <br />
                    <span className="boldTitle">Marisol Castro</span>
                  </span>
                  <br />
                  <span className="sizeMedium">
                    I'm a Frontend Developer and Graphic Designer.
                  </span>
                  <br />
                  <span>
                    I am a detail-oriented person. I feel passion about
                    science,technology UX and UI.
                  </span>
                  <br />
                  <br />
                  <button className="line-btn">
                    <span className="upperStyle">See Proyects <Icon className="arrow1 iconAnt" type="arrow-right" /></span>
                  </button>
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
