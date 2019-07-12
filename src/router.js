import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeLayout from './components/Home/HomeLayout';
import BurgerQueen from './components/BurgerQueen/BurgerQueen';
import ShareSmile from './components/ShareSmile/ShareSmile';
import EyeRoad from './components/EyeRoad/EyeRoad';
import AlyApp from './components/AlyApp/AlyApp';
import AboutMe from './components/AboutMe/AboutMe';


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