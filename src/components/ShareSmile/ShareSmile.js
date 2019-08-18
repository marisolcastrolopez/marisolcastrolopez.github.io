import React, { Component, Fragment } from "react";
import InfoShareaSmile from "../ShareSmile/InfoShareaSmile"
import { Layout } from "antd";
import PopupMenu from "../Menu/PopoupMenu";
const { Header } = Layout;


export default class ShareSmile extends Component {
  render() {
    return (
    <Fragment>
    <PopupMenu />
      <Header style={{ position: "absolute" }}/>
      <InfoShareaSmile/>
    </Fragment>
    )
  }
}

