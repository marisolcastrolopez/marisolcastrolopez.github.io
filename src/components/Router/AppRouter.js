import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeLayout from '../Home/HomeLayout';
import BurgerQueen from '../BurgerQueen/BurgerQueen';
import ShareSmile from '../ShareSmile/ShareSmile';
import EyeRoad from '../EyeRoad/EyeRoad';
import AlyApp from '../AlyApp/AlyApp';
import AboutMe from '../AboutMe/AboutMe';


const AppRouter = () => {
  return (
    <Router>
        <Route exact path="/" component={HomeLayout} />
        <Route path="/burgerqueen" component={BurgerQueen} />
        <Route path="/sharesmile" component={ShareSmile} />
        <Route path="/eyeroad" component={EyeRoad} />
        <Route path="/alyapp" component={AlyApp} />
        <Route path="/aboutme" component={AboutMe} />
    </Router>
  );
}

export default AppRouter;