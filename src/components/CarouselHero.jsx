import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import vid1 from "../assets/vids1.webm";
import vid2 from "../assets/vids2.webm";
import vid3 from "../assets/vids3.webm";
import vid4 from "../assets/vids4.webm";

export function CarouselHero() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden slider-container">
      <Slider {...settings} className="">
        <div className="md:h-[650px] h-full w-[100%] relative">
          <video autoPlay muted loop className="h-full w-full object-cover">
            <source src={vid1} />
          </video>
        </div>
        <div className="md:h-[650px] h-full w-[100%] relative">
          <video autoPlay muted loop className="h-full w-full object-cover">
            <source src={vid2} />
          </video>
        </div>
        <div className="md:h-[650px] h-full w-[100%] relative">
          <video autoPlay muted loop className="h-full w-full object-cover">
            <source src={vid3} />
          </video>
        </div>
        <div className="md:h-[650px] h-full w-[100%] relative">
          <video autoPlay muted loop className="h-full w-full object-cover">
            <source src={vid4} />
          </video>
        </div>
      </Slider>
    </div>
  );
}
