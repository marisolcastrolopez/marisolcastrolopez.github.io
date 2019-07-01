// import React, { Component } from "react";
// import { render } from "react-dom";
// import Popup from "reactjs-popup";
// import BurgerIcon from "./BurgerIcon";
// import Menu from "./Menu";
// import "./index.css";
// import { Layout } from "antd";
// import { TimelineLite, CSSPlugin, TweenLite } from "gsap/all";
// // import 'antd/dist/antd.css';

// const { Header, Footer,  Content } = Layout;

// // const styles = {
// //   fontFamily: "sans-serif",
// //   textAlign: "center",
// //   marginTop: "40px"
// // };
// const contentStyle = {
//   background: "pink",
//   width: "80%",
//   border: "none",

// };
import React, { Component } from 'react';
import './style.css';
import MultipleElements from "./multiple-elements.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="container">
        <MultipleElements />
      </div>
    );
  }
}

// const App = () => (
//   <>
//     <Layout>
//       <Header>
//         <Popup
//           modal
//           overlayStyle={{ background: "rgba(255,255,255,0.98" }}
//           contentStyle={contentStyle}
//           closeOnDocumentClick={false}
//           trigger={open => <BurgerIcon open={open} />}
//         >
//           {close => <Menu close={close} />}
//         </Popup>
//       </Header>
//       <Content>

//       </Content>
//       <Footer>Footer</Footer>
//     </Layout>
//   </>
// );

// export default App;
