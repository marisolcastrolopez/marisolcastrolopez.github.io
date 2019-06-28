import React from "react";
import { render } from "react-dom";
import Popup from "reactjs-popup";
import Hello from "./Hello";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./index.css";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

const App = () => (
  <>
    <Layout>
      <Header><Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
          >
            {close => <Menu close={close} />}
          </Popup></Header>
      <Content>
        <div style={styles}>
          <Hello name="Create cool burger menu using reactjs-popup" />
          
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

render(<App />, document.getElementById("root"));
