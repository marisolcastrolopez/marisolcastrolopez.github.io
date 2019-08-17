import React, { Component, Fragment } from "react";
import Description from "../BurgerQueen/Description"
import { Layout } from "antd";
import PopupMenu from "../Menu/PopoupMenu";
const { Header } = Layout;


export default class ShareSmile extends Component {
  render() {
    return (
    <Fragment>
    <PopupMenu />
      <Header style={{ position: "absolute" }}/>
      <Description/>
    </Fragment>
    )
  }
}

