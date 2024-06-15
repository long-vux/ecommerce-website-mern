import React from "react";
import Slider from "react-slick";
import { Image } from "antd";

const SliderComponent = ({ arrImages }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {arrImages.map((image) => {
        return <Image src={image} alt="slider" preview={false} with="100%" />;
      })}
    </Slider>
  );
};

export default SliderComponent;
