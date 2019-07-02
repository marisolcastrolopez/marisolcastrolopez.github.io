import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>Home</li>
      <li onClick={close}>Eye Road</li>
      <li onClick={close}>Share a Smile</li>
      <li onClick={close}>Burger Queen</li>
      <li onClick={close}>About Me</li>
      <li onClick={close}>Let's talk</li>
      <br/>
      <li>
        <i class="fab fa-linkedin-in fa-lg padFAwe"></i>
        <i class="fab fa-github fa-lg padFAwe"></i>
        <i class="far fa-envelope fa-lg padFAwe"></i>
      </li>
    </ul>
  </div>
);
/*dev branch*/