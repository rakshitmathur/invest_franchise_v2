import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const RealCard = ({ icon, title, desc, index }) => {
  return (
    <Card className="max-w-sm hover-card-real group">
      <div className="md:text-5xl text-3xl blue-light-text flex items-center justify-center group-hover:text-white">
        {icon}
      </div>
      <h3 className="md:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center group-hover:text-white">
        {title}
      </h3>
      <p className="text-base text-gray-700 dark:text-gray-400 text-center group-hover:text-white">
        {desc}
      </p>
    </Card>
  );
};

export default RealCard;
