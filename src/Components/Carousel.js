import { Carousel } from "react-bootstrap";
import React from "react";
import slider1 from "../Assets/slider1.jpg";
import slider2 from "../Assets/slider2.jpg";
import slider3 from "../Assets/slider3.jpg";
import slider4 from "../Assets/slider4.jpg";
import "../AllCss/fadding.css";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={slider4} width="100%" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={slider1} width="100%" />
          <Carousel.Caption>
            <h3>Happy Gaming</h3>
            <p>
              Just your everyday gamer just trying to fulfill your entertainment
              needs! Come stop by and watch Python_GamingHD stream all sorts of
              games! Remember to hit that follow button for notifications for
              when I go live!! HAPPY GAMING!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={slider2} width="100%" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={slider3} width="100%" />
        </Carousel.Item>
      </Carousel>
      <div className="fadded-image"></div>
    </div>
  );
};

export default Slider;
