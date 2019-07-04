import React from "react";
import { Icon } from 'antd';

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
        <Icon type="linkedin" className="padFAwe" style={{ fontSize: '35px', color: '#7D7987' }}/>
        <Icon type="github" className="padFAwe" style={{ fontSize: '35px', color: '#7D7987' }}/>
        <Icon type="mail" className="padFAwe" style={{ fontSize: '35px', color: '#7D7987' }}/>
      </li>
    </ul>
  </div>
);
/*dev branch*/