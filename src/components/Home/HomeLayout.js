import React, { Component } from "react";
import "../../css/index.css";
// import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { Layout } from "antd";
import PopupMenu from "../Menu/PopoupMenu";
import HomeContent from "../Home/HomeContent";
import logoImg from "../../img/logo-port-m.png";
const { Header, Footer, Content } = Layout;

class Home extends Component {
  render() {
    return (
      <Layout className="container-home-bg">
        <Header>
        <Link style={{ zIndex: 9999}} to="/burgerqueen">
        <img
            className="logo-img"
            src={logoImg}
            style={{
              width: `${30}%`,
              maxWidth: `${7.5}em`,
              paddingLeft: `${2}%`,
              height: "auto",
              float: "left",
              zIndex: 9999
            }}
            alt="logo-img"
          />
        </Link>
          <PopupMenu />
        </Header>
        <Content>
          <HomeContent />
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    );
  }
}

export default Home;

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
