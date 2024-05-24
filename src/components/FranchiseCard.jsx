import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../pages/Invest.css";
import { Link } from "react-router-dom";

const FranchiseCard = ({ icon, title, desc }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Link
        to={"/contact"}
        className="shadow-2xl px-8 py-6 bg-white rounded-3xl border border-gray-100 border-1 "
        data-aos="fade-up"
      >
        <div>
          <div className="xl:text-6xl lg:text-4xl text-3xl blue-light-text flex justify-center mb-8">
            {icon}
          </div>
          <h3 className="text-xl xl:text-2xl font-semibold text-gray-800  mb-4 text-center">
            {title}
          </h3>
          <p className="text-base xl:text-lg font-semibold text-gray-700 text-center ">
            {desc}
          </p>
        </div>
      </Link>
    </>
  );
};

export default FranchiseCard;
