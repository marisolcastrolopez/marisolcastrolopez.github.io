import React, { Component, Fragment } from "react";
import InfoShareaSmile from "../ShareSmile/InfoShareaSmile"
import { Layout } from "antd";
import { Link } from "react-router-dom";
import PopupMenu from "../Menu/PopoupMenu";
import logoImg from "../../img/logo-port-m.png";
const { Header } = Layout;


export default class ShareSmile extends Component {
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
              paddingTop: `${3}%`,
              height: "auto",
              float: "left",
              zIndex: 9999,
              position: "absolute",
            }}
            alt="logo-img"
          />
        </Link>
      <InfoShareaSmile/>
    </Fragment>
    )
  }
}

