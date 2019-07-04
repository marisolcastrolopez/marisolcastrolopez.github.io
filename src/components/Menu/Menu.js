import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={close}>
        <Link to="/burgerqueen">Burger Queen</Link>
      </li>
      <li onClick={close}>
        <Link to="/sharesmile">Share a Smile</Link>
      </li>
      <li onClick={close}>
        <Link to="/eyeroad">Eye Road</Link>
      </li>
      <li onClick={close}>
        <Link to="/alyapp">Aly App</Link>
      </li>
      <li onClick={close}>
        <Link to="/aboutme">About Me</Link>
      </li>
      <li onClick={close}>
        <Link to="/burgerqueen">Let's talk</Link>
      </li>
      <br />
      <li>
        <a
          href={"https://www.linkedin.com/in/marisolcastrolopez/"}
          target={"_blank"}
        >
          <Icon
            type="linkedin"
            className="padFAwe"
            style={{ fontSize: "35px", color: "#7D7987" }}
          />
        </a>
        <a href={"https://github.com/marisolcastrolopez/"} target={"_blank"}>
          <Icon
            type="github"
            className="padFAwe"
            style={{ fontSize: "35px", color: "#7D7987" }}
          />
        </a>
        <a
          href={"https://www.linkedin.com/in/marisolcastrolopez/"}
          target={"_blank"}
        >
          <Icon
            type="mail"
            className="padFAwe"
            style={{ fontSize: "35px", color: "#7D7987" }}
          />
        </a>
      </li>
    </ul>
  </div>
);
/*dev branch*/
