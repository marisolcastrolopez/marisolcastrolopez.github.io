// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from "react";
import { render } from "react-dom";
import Popup from "reactjs-popup";
import Hello from "./Hello";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./index.css";

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
  <div style={styles}>
    <Hello name="Create cool burger menu using reactjs-popup" />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
  </div>
);

render(<App />, document.getElementById("root"));

