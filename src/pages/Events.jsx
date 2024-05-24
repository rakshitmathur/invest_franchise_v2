import React from "react";
import vid1 from "../assets/event1.webm";
import vid2 from "../assets/event2.webm";
import Slider from "react-slick";

const Events = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <div className="overflow-hidden slider-container">
        <Slider {...settings} className="">
          <div className="md:h-[650px] h-full w-[100%] relative">
            <div className="absolute h-full w-full  m-auto md:top-[35%] top-[12%]">
              <h1 className="text-xl xl:text-5xl md:text-3xl text-white font-bold md:w-1/2 w-full m-auto text-center text-shadow">
                Discover Your Next Venture <br /> <br /> #Coming Soon!
              </h1>
              <button className=" md:px-10 px-4 md:py-4 py-1 border border-2 border-white md:w-1/5 w-[140px] m-auto rounded-full cursor-pointer hover:drop-shadow-xl hover:shadow-black text-black font-bold xl:text-lg text-base flex items-center justify-center md:mt-8 mt-2 text-white">
                Book Now
              </button>
            </div>

            <video autoPlay muted loop className="h-full w-full object-cover">
              <source src={vid1} />
            </video>
          </div>
          <div className="md:h-[650px] h-full w-[100%] relative">
            <div className="absolute h-full w-full  m-auto md:top-[35%] top-[14%]">
              <h1 className="text-xl xl:text-5xl md:text-3xl text-white font-bold md:w-1/2 w-full m-auto text-center text-shadow">
                Discover Your Next Venture <br /> <br /> Coming Soon!
              </h1>
              <button className=" md:px-10 px-4 md:py-4 py-1 border border-2 border-white md:w-1/5 w-[140px] m-auto rounded-full cursor-pointer hover:drop-shadow-xl hover:shadow-black text-black font-bold xl:text-lg text-base flex items-center justify-center md:mt-8 mt-2 text-white">
                Book Now
              </button>
            </div>
            <video autoPlay muted loop className="h-full w-full object-cover">
              <source src={vid2} />
            </video>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Events;
