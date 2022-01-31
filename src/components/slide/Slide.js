import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./static/1.jpg";
import image2 from "./static/2.jpg";
import image3 from "./static/3L.jpg";
import image4 from "./static/4.jpg";
function ImageSlider() {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card">
          <img src={image1} />
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <img src={image2} />
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <img src={image3} />
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <img src={image4} />
        </div>
      </div>
    </Slider>
  );
}

export default ImageSlider;
