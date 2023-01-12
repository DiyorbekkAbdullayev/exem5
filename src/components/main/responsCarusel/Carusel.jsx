import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// import { Products } from "../../../config/base";
import { Next, Prev } from "./Arrows";
// import Card from "../../Card/Card";
import "./index.css";
const Sliderr = styled(Slider)`
  height: 460px;
  padding: 10px;
  width: 100%;
`;
export const Paad = styled.div`
  margin-right: 30px;
`;
export const Carusel2 = ({ children }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Sliderr {...settings}>{children}</Sliderr>;
};
