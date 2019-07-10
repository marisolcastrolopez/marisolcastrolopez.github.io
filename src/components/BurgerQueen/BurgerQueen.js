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
import React, { Fragment } from "react";
import { Spring } from "react-spring/renderprops";
import { Layout } from "antd";
import PopupMenu from "../Menu/PopoupMenu";
const { Header, Footer, Content } = Layout;

export default function BurgerQueen() {
  return (
    <Fragment>
      <Header>
        <PopupMenu />
      </Header>
      <Spring
        from={{ opacity: 0, marginLeft: -8000 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {props => (
          <div style={props}>
            <div style={c2style}>
              <h1>Hi there</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat numquam, nulla nostrum, officia soluta inventore
                repellendus, eaque nihil sed voluptas ea? Deserunt iure,
                suscipit exercitationem earum aliquam iusto nihil nulla!
              </p>
            </div>
          </div>
        )}
      </Spring>
    </Fragment>
  );
}

const c2style = {
  background: "#F9CE21",
  color: "#111",
  padding: "1.5rem"
};
