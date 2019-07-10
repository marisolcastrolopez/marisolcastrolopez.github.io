import React, { Component } from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "../Menu/BurgerIcon";
import Menu from "../Menu/Menu";
import "../../css/index.css";

const contentStyle = {
  background: "transparent",
  width: "80%",
  border: "none",
};

export default class PopupMenu extends Component {
  render() {
    return (
      <Popup
        modal
        overlayStyle={{ background: "rgba(253, 253, 253)" }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={open => <BurgerIcon open={open} />}
      >
        {close => <Menu close={close} />}
      </Popup>
    );
  }
}
