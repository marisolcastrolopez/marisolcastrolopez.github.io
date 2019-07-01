/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";
import { dataArray } from "./data.js";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./index.css";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center",
//   marginTop: "40px"
// };
const contentStyle = {
  background: "pink",
  width: "80%",
  border: "none"
};

class MultipleElements extends Component {
  constructor(props) {
    super(props);
    // logo container
    this.logoContainer = null;
    // logo tween
    this.logoTween = null;
  }

  componentDidMount() {
    // create logo tween
    this.logoTween = new TimelineLite({ paused: true }).to(
      this.logoContainer,
      1,
      { autoAlpha: 0, y: 10 },
      0.1
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            <h3 className="text-center">Simple Tween</h3>
            <p>
              Animates the GSAP logo to the right of it's original position and
              finally does a 360 degrees rotation. You can use the buttons to
              control the animation.
            </p>
            <p>
              Uses the <strong>ref</strong> inline callback to create a
              reference to the DOM element, which is then used in the{" "}
              <strong>componentDidMount</strong> event to create the GSAP
              instance.
            </p>
            <hr />
          </div>

          <div className="col-12">
            <h3 className="text-center">Control Logo Tween</h3>
            <p>Use the buttons to control the Logo Tween</p>
            <div className="mb-2 btn-group">
              <button
                className="btn gsap-btn"
                onClick={() => this.logoTween.play()}
              >
                Play
              </button>
              <button
                className="btn gsap-btn"
                onClick={() => this.logoTween.pause()}
              >
                Pause
              </button>
              <button
                className="btn gsap-btn"
                onClick={() => this.logoTween.reverse()}
              >
                Reverse
              </button>
              <button
                className="btn gsap-btn"
                onClick={() => this.logoTween.restart()}
              >
                Restart
              </button>
            </div>
            <hr />
          </div>
          <Layout>
            <Header>
              <div ref={img => (this.logoContainer = img)}>
                <Popup
                  modal
                  overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                  contentStyle={contentStyle}
                  closeOnDocumentClick={false}
                  trigger={open => <BurgerIcon open={open}  />}
                >
                  {close => <Menu close={close} />}
                </Popup>
              </div>
            </Header>
            <Content />
            <Footer>Footer</Footer>
          </Layout>
        </div>
      </div>
    );
  }
}

export default MultipleElements;

//   constructor(props) {
//     super(props);
//     // cards, elements tha will be used in the tween
//     this.cards = <div style={{backgroundColor: "white"}}><p>Hola</p></div>;
//     // the timeline instance
//     this.tl = new TimelineLite({ paused: true });
//     // eslint-disable-next-line no-unused-expressions
//     this.cardsTween;
//   }

//   componentDidMount() {
//     this.tl.staggerTo(this.cards, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
//   }

//   render() {
//     this.tl
//       .kill()
//       .clear()
//       .pause(0);
//     return (
//       <div className="container">
//         <div className="row mt-3">
//           <div className="col-12">
//             <h3 className="text-center">Multiple Elements Animation</h3>
//             <p>
//               This sample uses an array of data to create a group of cards. For
//               each card we add a instance to a single timeline, which can be
//               controlled with the buttons present below.
//             </p>
//             <p>
//               In this sample we use the ref inline callback to create a{" "}
//               <i>from</i> instance in the timeline and the index value from the
//               map array helper, to create the stagger effect.
//             </p>
//             <hr />
//             {/* buttons */}
//             <h3 className="text-center">Control Timeline</h3>
//             <p>Use the buttons to control the cards Timeline</p>
//             <div className="mb-2 btn-group">
//               <button className="btn gsap-btn" onClick={() => this.tl.play()}>
//                 Play
//               </button>
//               <button className="btn gsap-btn" onClick={() => this.tl.pause()}>
//                 Pause
//               </button>
//               <button
//                 className="btn gsap-btn"
//                 onClick={() => this.tl.reverse()}
//               >
//                 Reverse
//               </button>
//               <button
//                 className="btn gsap-btn"
//                 onClick={() => this.tl.restart()}
//               >
//                 Restart
//               </button>
//             </div>
//             <hr />
//           </div>

//               <Layout>
//                 <Header>
//                 <div ref={div => (this.cards = div)}>
//                   <Popup

//                     modal
//                     overlayStyle={{ background: "rgba(255,255,255,0.98" }}
//                     contentStyle={contentStyle}
//                     closeOnDocumentClick={false}
//                     trigger={open => <BurgerIcon open={open} />}
//                   >
//                     {close => <Menu close={close} />}
//                   </Popup>
//                   </div>
//                 </Header>
//                 <Content />
//                 <Footer>Footer</Footer>
//               </Layout>
//         </div>
//       </div>
//     );
//   }
