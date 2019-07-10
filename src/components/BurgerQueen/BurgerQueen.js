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
import { Layout } from "antd";
import PopupMenu from "../Menu/PopoupMenu";
const { Header } = Layout;


export default class BurgerQueen extends Component {
  render() {
    return (
    <Fragment>
      <Header>
        <PopupMenu />
      </Header>
      <Description/>
    </Fragment>
    )
  }
}
