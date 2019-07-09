import React from "react";
import "../../css/index.css";
import { Transition, animated } from "react-spring/renderprops";
import { useSpring } from 'react-spring'

const props = useSpring({
      opacity: 0,
      from: { opacity: 0 },
    })
  return (
      <animated.h1 style={props}>hello</animated.h1>
  )

