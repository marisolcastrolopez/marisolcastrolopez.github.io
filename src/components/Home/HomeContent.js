import React, { Component, Fragment } from "react";
import "../../css/index.css";
import "../../css/grid.css";
import { Row, Col, Icon } from "antd";
import { Transition, animated } from "react-spring/renderprops";
import { Link } from "react-router-dom";

export default class HomeContent extends Component {
  state = { show: true };
  render() {
    return (
      <Fragment>
      <div className="pad-section">
        <div className="reveals-main">
          <Transition
            native
            items={this.state.show}
            from={{
              position: "relative",
              overflow: "hidden",
              height: `${100}vh`,
              paddingTop: `${12}vh`,
              paddingBottom: `${5}%`,
              paddingRight: `${4}%`,
              transform: 'translate3d(0,-120px,0)'
            }}
            enter={[{
              transform: 'translate3d(0,0px,0)'
               }]}
               leave={ {opacity: 0} }
          >
            {show =>
              show &&
              (props => (
                <animated.div style={props}>
                <Row type="flex">
                <Col xs={0} sm={0} md={4} lg={4} xl={4} />
                <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                  <span className="titles whiteFont">
                    Hello! I'm <br />
                    <span className="boldTitle whiteFont">Marisol Castro</span>
                  </span>
                  <br />
                  <span className="sizeMedium whiteFont">
                    I'm a Frontend Developer and Graphic Designer.
                  </span>
                  <br />
                  <span className="whiteFont">
                    I am a detail-oriented person. I feel passion about
                    science,technology UX and UI.
                  </span>
                  <br />
                  <br />
                  <br />
                  </Col>
                  <Col xs={0} sm={0} md={4} lg={4} xl={4} />
                  </Row>
                  <Row>
                  <Col xs={0} sm={0} md={4} lg={4} xl={4} />
                  <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                  <Link className="line-btn" to="/burgerqueen">
                    <span className="upperStyle">
                      See Proyects
                      <Icon className="arrow1 iconAnt" type="arrow-right" />
                    </span>       
                  </Link>
                  </Col>
                  <Col xs={0} sm={0} md={12} lg={12} xl={12} />
                  </Row>
                </animated.div>
              ))
            }
          </Transition>
        </div>
        <br />
        <br />
        <br />
      </div>
      </Fragment>
    );
  }
}
