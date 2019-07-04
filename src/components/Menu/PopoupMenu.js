import React, { Component } from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "../Menu/BurgerIcon";
import Menu from "../Menu/Menu";
import "../../css/index.css";

const contentStyle = {
  background: "white",
  width: "80%",
  border: "none",
  color: "gray"
};

export default class PopupMenu extends Component {
  render() {
    return (
      <Popup
        modal
        overlayStyle={{ background: "rgba(255,255,255,0.98" }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={open => <BurgerIcon open={open} />}
      >
        {close => <Menu close={close} />}
      </Popup>
    );
  }
}
