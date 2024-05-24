import React, { useEffect, useState } from "react";

import frenb5 from "../assets/fre19.webp";
import BrandCrad from "../components/BrandCrad";

import ButtonGrad from "../components/ButtonGrad";
import Aos from "aos";
import "aos/dist/aos.css";

const ForBrands = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    industries: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // Validate required fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email address";
      }
    });

    if (Object.keys(newErrors).length === 0) {
      // Send form data to backend for email processing
      const mailtoLink = `mailto:ankit.bhatt.8953@gmail.com?subject=${formData.industries}&body=Name: ${formData.name}%0APhone : ${formData.phone}%0AEmail: ${formData.email}%0Aindustries: ${formData.industries}%0Abudget: ${formData.budget}`;
      window.location.href = mailtoLink;
      // console.log("Form data:", formData);
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",

        industries: "",
        budget: "",
      });
      // Clear errors
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <div className="h-[100%]  pb-16 ">
      <div className=" md:mb-20 mb-12">
        <div className="md:h-[750px] w-full relative h-[580px]">
          <div className="image-banner-brands absolute xl:w-2/3 lg:w-2/3 h-full w-full  absolute  top-0">
            <div className="absolute left-6 md:left-20 left-0 md:w-2/3 xl:w-1/2 w-5/6  xl:h-[84%] md:h-[74%] h-[86%]   lg:top-10 md:top-[5%] top-6  z-20 hero-form-background  rounded-lg light-bg shadow-2xl md:p-8 py-4 p-4 border  ">
              <h3 className="form-heading xl:text-4xl lg:text-3xl text-xl font-semibold md:mb-4 mb-2 ">
                List Your Brand
              </h3>
              <form
                className="flex flex-col w-full h-full"
                onSubmit={handleSubmit}
              >
                <label className="text-base lg:text-lg font-semibold mb-1  cursor-pointer">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-2 border-gray-700 rounded-md p-1 md:p-2 w-full   transition ease-in-out duration-150"
                  type="text"
                />
                {errors.name && <p className="text-red-600">{errors.name}</p>}

                <label className="text-base lg:text-lg font-semibold mb-1 cursor-pointer mt-2 md:mt-4">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className=" rounded-md border border-2 border-gray-700 p-1 md:p-2 w-full   transition ease-in-out duration-150"
                  type="text"
                />
                {errors.phone && <p className="text-red-600">{errors.phone}</p>}

                <label className="text-base lg:text-lg font-semibold mb-1 cursor-pointer mt-2 md:mt-4">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className=" rounded-md border border-2 border-gray-700 p-1 md:p-2   transition ease-in-out duration-150"
                  type="email"
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>}

                <label
                  className="text-base lg:text-lg font-semibold mb-1 cursor-pointer mt-2 md:mt-4"
                  htmlFor="industries"
                >
                  Industries <span className="text-red-600">*</span>
                </label>
                <select
                  className="  rounded-md border  border-2 border-gray-700 p-1 md:p-2   transition ease-in-out duration-150"
                  id="industries"
                  name="industries"
                  value={formData.industries}
                  onChange={handleChange}
                >
                  <option value="Food & Beverages">Food & Beverages</option>
                  <option value="Retail">Retail</option>
                  <option value="Education">Education</option>
                  <option value="Service Industry">Service Industry</option>
                  <option value="Beauty & Fitness">Beauty & Fitness</option>
                  <option value="Health & Wellness">Health & Wellness</option>
                  <option value="Others">Others</option>
                </select>
                {errors.industries && (
                  <p className="text-red-600">{errors.industries}</p>
                )}

                <div className="lg:mt-8 mt-4">
                  <ButtonGrad text="Submit" wid="100%" high={2.8 + "em"} />
                </div>
              </form>
            </div>
            {/* </div> */}
          </div>

          <div
            className="absolute xl:right-20 xl:w-2/5 xl:h-5/6 xl:top-10 lg:h-2/3 lg:w-2/5 lg:right-10 lg:top-20 w-full h-full md:p-12 px-4 py-2 glass-morph overflow-y-hidden lg:block hidden  "
            data-aos="fade-up-left "
          >
            <h3 className="text-white xl:text-6xl md:text-3xl text-lg font-bold lg:text-start md:text-center lg:block hidden ">
              Elevate Your Brand with Strategic Consulting Solutions
            </h3>
            <p className="text-white xl:text-xl text-xl text-lg lg:block md:hidden  block">
              Invest in Franchise offers a comprehensive suite of strategic
              consulting solutions designed to empower brands to reach their
              full potential in the competitive marketplace.
            </p>
            <p className="text-white xl:text-xl text-xl text-lg lg:block hidden">
              {" "}
              Our seasoned consultants provide personalized guidance, innovative
              strategies, and actionable insights to drive sustainable growth
              and success.
            </p>
          </div>
          {/* </div> */}
          <img src={frenb5} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="">
        <div className="container-main">
          <h1 className="xl:text-5xl lg:text-3xl text-2xl text-gray-800 text-center font-bold md:mb-8 mb-4">
            Franchise Expansion (Brands)
          </h1>
          <p className="xl:text-xl lg:text-lg text-base text-gray-600 md:mb-16 mb-8 text-center">
            For your brands, we provide end-to-end solutions based on your
            needs. Our services include:-
          </p>

          <div className="ml-[-20px] md:ml-none">
            <BrandCrad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForBrands;
