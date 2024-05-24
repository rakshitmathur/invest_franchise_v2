import React from "react";
import "../pages/Resell.css";
import { Link } from "react-router-dom";

const ResellCard = ({ title, desc, icon }) => {
  return (
    <Link to={"/contact"}>
      <div>
        <div className="card m-auto ">
          <div className="bg px-4 pt-12">
            <div className="md:text-5xl text-3xl blue-light-text flex items-center justify-center font-bold mb-2">
              {icon}
            </div>
            <h1 className="md:text-2xl text-xl font-bold text-center mb-8 text-black">
              {title}
            </h1>
            <p className="md:text-lg text-base text-center">{desc}</p>
          </div>
          <div className="blob"></div>
        </div>
      </div>
    </Link>
  );
};

export default ResellCard;
