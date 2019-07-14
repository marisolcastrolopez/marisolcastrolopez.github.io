import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeLayout from './components/Home/HomeLayout';
import BurgerQueen from './components/BurgerQueen/BurgerQueen';
import ShareSmile from './components/ShareSmile/ShareSmile';
import EyeRoad from './components/EyeRoad/EyeRoad';
import AlyApp from './components/AlyApp/AlyApp';
import AboutMe from './components/AboutMe/AboutMe';



const AppRouter = () => {
  return (
    <Router>
    <Switch>
        <Route exact path="/" component={HomeLayout} />
        <Route path="/burgerqueen" component={BurgerQueen} />
        <Route path="/sharesmile" component={ShareSmile} />
        <Route path="/eyeroad" component={EyeRoad} />
        <Route path="/alyapp" component={AlyApp} />
        <Route path="/aboutme" component={AboutMe} />
        </Switch>
    </Router>
  );
}

export default AppRouter;
//Change in webpackDevServer.config.js line 74 react-scripts/config/webpackDevServer.config.js