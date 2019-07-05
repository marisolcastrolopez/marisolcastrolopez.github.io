import React, { Component } from "react";
import "../../css/index.css";
import { Transition, animated } from "react-spring/renderprops";
// import { useSpring } from 'react-spring'
// import 'antd/dist/antd.css';

// const props = useSpring({
//   opacity: 1,
//   from: { opacity: 0 },
// })
// return <animated.h1 style={props}>hello</animated.h1>
// function Demo() {
//   let elseA = useSpring({
//       opacity: 0,
//       from: { opacity: 0 },
//     })
//   return (
//       <animated.h1 style={elseA}>hello</animated.h1>
//   )
// }

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
                </animated.div>
              ))
            }
          </Transition>
        </div>
        <br />
        <br />
        <br />
        {/* <div className="reveals-main">
          <Transition
            native
            items={this.state.show}
            from={{ position: "absolute", overflow: "hidden", height: 0 }}
            enter={[{ height: "auto" }]}
          >
            {show =>
              show &&
              (props => (
                <animated.div style={{ opacity: 1, from: { opacity: 0 }}}>
                  <span className="sizeMedium">
                    I'm a Frontend Developer and Graphic Designer.
                  </span>
                </animated.div>
              ))
            }
          </Transition>
        </div> */}
        {/* <span className="sizeMedium">
          I'm a Frontend Developer and Graphic Designer.
        </span> */}
        <br />
        <br />
        <span>
          I am a detail-oriented person, I tend to be meticulous in everthing
          that I do. I feel passion about science,technology UX and UI.
        </span>
        {/* <Demo/> */}
      </div>
    );
  }
}
