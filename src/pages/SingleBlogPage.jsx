import React from "react";
import { useParams } from "react-router-dom";

const SingleBlogPage = () => {
  //   const { title, desc, date, by, img } = useParams();
  const { data } = useParams();
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
  } = JSON.parse(decodeURIComponent(data));
  return (
    <div>
      <div className="container-main mt-8 mb-24">
        <div className="">
          <h1 className="md:text-5xl text-3xl text-gray-800 font-bold mb-8">
            {title}
          </h1>
        </div>
        <div className="md:text-2xl text-xl font-semibold text-gray-500 mb-4">
          <span>{date}</span> | <span>By {by}</span>
        </div>
        <div className="mb-12 w-full md:h-[600px]">
          <img
            src={img}
            alt="blog_img"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-700">
            Introduction:
          </h3>
          <p className="text-gray-600 md:text-xl text-lg mt-2">{descm}</p>
        </div>
        {title1 && (
          <div className="mt-14">
            <h1 className="md:text-4xl text-2xl text-gray-700 font-bold mb-8">
              {title1}
            </h1>
          </div>
        )}
        <div className="">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-600 mb-2 mt-8">
            {head1}
          </h3>
          <p className="md:text-lg text-base text-gray-600">{top1}</p>
        </div>
        <div className="">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-600 mb-2 mt-8">
            {head2}
          </h3>
          <p className="md:text-lg text-base text-gray-600">{top2}</p>
        </div>
        <div className="">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-600 mb-2 mt-8">
            {head3}
          </h3>
          <p className="md:text-lg text-base text-gray-600">{top3}</p>
        </div>
        <div className="">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-600 mb-2 mt-8">
            {head4}
          </h3>
          <p className="md:text-lg text-base text-gray-600">{top4}</p>
        </div>
        {title2 && (
          <div className="mt-14">
            <h1 className="md:text-4xl text-2xl text-gray-700 font-bold mb-8">
              {title2}
            </h1>
          </div>
        )}
        <div className="">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-600 mb-2 mt-8">
            {head5}
          </h3>
          <p className="md:text-lg text-base text-gray-600">{top5}</p>
        </div>
        <div className="">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-600 mb-2 mt-8">
            {head6}
          </h3>
          <p className="md:text-lg text-base text-gray-600">{top6}</p>
        </div>
        <div className="">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-600 mb-2 mt-8">
            {head7}
          </h3>
          <p className="md:text-lg text-base text-gray-600">{top7}</p>
        </div>
        <div className="">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-600 mb-2 mt-8">
            {head8}
          </h3>
          <p className="md:text-lg text-base text-gray-600">{top8}</p>
        </div>
        <div className="">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-600 mb-2 mt-8">
            {head9}
          </h3>
          <p className="md:text-lg text-base text-gray-600">{top9}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
