import React, { Component } from "react";
import "../../css/index.css";
import { Transition, animated } from "react-spring/renderprops";
// import 'antd/dist/antd.css';

export default class HomeContent extends Component {
  state = { show: true };
  render() {
    return (
      <div className="pad-section">
        <div className="reveals-main">
          <Transition
            native
            items={this.state.show}
            from={{ position: "absolute", overflow: "hidden", height: 0 }}
            enter={[{ height: "auto" }]}
            leave={{ height: 0 }}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                  <span className="titles">
                    Hello! I'm <br />
                    <span className="boldTitle">Marisol Castro</span>
                  </span>
                </animated.div>
              ))
            }
          </Transition>
        </div>
        <br />
        <br />
        <br />

        {/* <span className="titles">Hello! I'm <br/><span className="boldTitle">Marisol Castro</span></span> */}
        <br />
        <span className="sizeMedium">
          I'm a Frontend Developer and Graphic Designer.
        </span>
        <br />
        <br />
        <span>
          I love details, I like to be meticulous in everthing that I do. I feel
          passion about science,technology UX and UI, it amuse me.
        </span>
      </div>
    );
  }
}
