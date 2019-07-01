import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>Home</li>
      <li onClick={close}>Eye Road</li>
      <li onClick={close}>Share a Smile</li>
      <li onClick={close}>Burger Queen</li>
      <li onClick={close}>About</li>
    </ul>
  </div>
);


