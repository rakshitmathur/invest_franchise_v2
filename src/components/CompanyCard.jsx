import React from "react";
import "../pages/Home.css";
import ButtonGrad from "./ButtonGrad";
import { Link } from "react-router-dom";

const CompanyCard = ({ company, updateRecentBlog, index }) => {
  const {
    title,
    desc,
    date,
    by,
    img,
    descm,
    head1,
    top1,
    head2,
    top2,
    head3,
    top3,
    head4,
    top4,
    head5,
    top5,
    head6,
    top6,
    head7,
    top7,
    head8,
    top8,
    head9,
    top9,
    title1,
    title2,
  } = company;

  const handleClick = () => {
    updateRecentBlog(
      title,
      desc,
      date,
      by,
      img,
      descm,
      head1,
      top1,
      head2,
      top2,
      head3,
      top3,
      head4,
      top4,
      head5,
      top5,
      head6,
      top6,
      head7,
      top7,
      head8,
      top8,
      head9,
      top9,
      title1,
      title2
    );
  };
  return (
    <>
      <div className="book relative " key={index}>
        <div className="pl-12 pr-2">
          <h3 className="xl:text-xl text-lg">{title}</h3>
          <p className="xl:text-lg text-base text-gray-600">{desc}</p>
          <Link
            to={`/singleblogpage/${encodeURIComponent(
              JSON.stringify(company)
            )}`}
          >
            <div className="mt-4" onClick={handleClick}>
              <ButtonGrad high={35 + "px"} wid={140 + "px"} text="READ MORE" />
            </div>
          </Link>
        </div>
        <div className="cover ">
          <img src={img} alt="" className="h-1/2 w-full object-cover pb-8" />
          <p className="">{title}</p>
          <p className="text-base  text-gray-500 mt-4">{date}</p>
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
