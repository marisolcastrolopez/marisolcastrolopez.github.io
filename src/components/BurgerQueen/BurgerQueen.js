// import React, { Component } from "react";
// import "../../css/index.css";
// import { Layout } from "antd";
// import PopupMenu from "../Menu/PopoupMenu";
// import HomeContent from "../Home/HomeContent";
// const { Header, Footer, Content } = Layout;

// export default class BurgerQueen extends Component {
//   render() {
//     return (
//       <Layout className="container-home-bg">
//       <Header>
//         <PopupMenu />
//       </Header>
//       <Content>
//         <HomeContent />
//       </Content>
//       {/* <Footer>Footer</Footer> */}
//     </Layout>
//     );
//   }
// }
import React, { Component, Fragment } from "react";
import Description from "../BurgerQueen/Description"
import { Link } from "react-router-dom";
import logoImg from "../../img/logo-port-m.png";
import { Layout } from "antd";
import PopupMenu from "../Menu/PopoupMenu";
const { Header } = Layout;


export default class BurgerQueen extends Component {
  render() {
    return (
    <Fragment>
    <PopupMenu />
      <Header style={{ position: "absolute" }}/>
      <Link style={{ zIndex: 9999}} to="/">
        <img
            className="logo-img"
            src={logoImg}
            style={{
              width: `${30}%`,
              maxWidth: `${7.5}em`,
              paddingLeft: `${2}%`,
              // paddingTop: `${3}%`,
              height: "auto",
              float: "left",
              zIndex: 9999,
              position: "absolute",
            }}
            alt="logo-img"
          />
        </Link>
      <Description/>
    </Fragment>
    )
  }
}
