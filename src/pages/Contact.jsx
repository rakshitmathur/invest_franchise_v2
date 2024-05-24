import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import ButtonGrad from "../components/ButtonGrad";
import cont2 from "../assets/contvec8.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
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
      const mailtoLink = `mailto:consultant@investinfranchise.in?subject=${formData.subject}&body=Name: ${formData.name}%0APhone : ${formData.phone}%0AEmail: ${formData.email}%0AInterested In: ${formData.interestedIn}`;
      window.location.href = mailtoLink;
      // console.log("Form data:", formData);
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        interestedIn,
      });
      // Clear errors
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };
  return (
    <div className="h-[100%] light-bg pt-16">
      <div className="cont-form container-main">
        <h3 className="text-3xl text-center xl:text-5xl font-bold text-gray-800">
          Contact Us Now
        </h3>
        <hr className="mt-6 h-1 bg-gray-400" />
        <form
          onSubmit={handleSubmit}
          className="bg-white md:p-12 p-6 shadow-xl border-cont-form flex justify-between lg:flex-row flex-col lg:gap-4 gap-12"
        >
          <div className="lg:w-1/2 ">
            <h3 className="xl:text-3xl text-2xl mb-12">Let's Connect</h3>

            <div className="form-img bg-white cont-img h-[390px] mt-20">
              <img src={cont2} alt="form_img " className="bg-white h-full" />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-lg xl:text-xl text-lg font-semibold text-gray-800"
            >
              Name <span className="text-red-600">*</span>
            </label>

            <div className="  w-full h-12  flex  ">
              <span className="p-4 flex items-center justify-center bg-gray-50 icons-border-cont ">
                <FaUser />
              </span>

              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="h-full md:w-2/3 w-full border border-1 border-gray-400   px-4 py-1 focus:outline-none inp-border-cont"
                placeholder="Enter Your Name..."
              />
            </div>
            {errors.name && <p className="text-red-600">{errors.name}</p>}

            <label
              htmlFor="email"
              className="text-lg xl:text-xl text-lg font-semibold text-gray-800"
            >
              Email <span className="text-red-600">*</span>
            </label>

            <div className=" w-full h-12  flex    ">
              <span className="p-4 flex items-center justify-center bg-gray-50  icons-border-cont">
                <MdEmail />
              </span>

              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-full md:w-2/3 w-full border border-1 border-gray-400   px-4 py-1 focus:outline-none inp-border-cont"
                placeholder="Enter Your Email..."
              />
            </div>
            {errors.email && <p className="text-red-600">{errors.email}</p>}

            <label
              htmlFor="phone"
              className="text-lg xl:text-xl text-lg font-semibold text-gray-800"
            >
              Phone <span className="text-red-600">*</span>
            </label>

            <div className=" w-full h-12  flex    ">
              <span className="p-4 flex items-center justify-center bg-gray-50  icons-border-cont">
                <FaPhone />
              </span>

              <input
                type="number"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="h-full md:w-2/3 w-full border border-1 border-gray-400   px-4 py-1 focus:outline-none inp-border-cont"
                placeholder="Enter Your Mobile..."
              />
            </div>
            {errors.phone && <p className="text-red-600">{errors.phone}</p>}

            <label
              htmlFor="interestedi"
              className="text-lg xl:text-xl text-lg font-semibold text-gray-800"
            >
              Interested In <span className="text-red-600">*</span>
            </label>

            <div className=" w-full h-12  flex  mb-4  ">
              <select
                className="  h-full xl:w-3/4 lg:w-4/5 md:w-3/4 w-full border border-1 border-gray-400   px-4 py-1 focus:outline-none    transition ease-in-out duration-150"
                id="interestedIn"
                name="interestedIn"
                value={formData.interestedIn}
                onChange={handleInputChange}
              >
                <option value="Franchise Investment (Investors)">
                  Franchise Investment (Investors)
                </option>
                <option value="Franchise Expansion (Brands)">
                  Franchise Expansion (Brands){" "}
                </option>
                <option value="Business Re-sale ( Investors / Brands)">
                  Business Re-sale ( Investors / Brands){" "}
                </option>
                <option value="Real Estate Services">
                  Real Estate Services{" "}
                </option>
              </select>
              {errors.interestedIn && (
                <p className="text-red-600">{errors.interestedIn}</p>
              )}
            </div>

            <label
              htmlFor="message"
              className="text-lg xl:text-xl text-lg font-semibold text-gray-800"
            >
              Remark (Optional)
            </label>

            <div className=" mb-4">
              <textarea
                name="message"
                id="message"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter Your Message..."
                className="xl:w-3/4 lg:w-4/5 w-full md:w-3/4"
              ></textarea>
            </div>

            <div className="">
              <ButtonGrad high={50 + "px"} wid={150 + "px"} text="SUBMIT" />
            </div>
          </div>
        </form>
      </div>

      <hr className="w-full  bg-gray-800 mt-20" />
      <div className="py-16 ">
        <div className="container-main flex lg:flex-row flex-col gap-24 xl:gap-32 overflow-hidden">
          <div className="right-cont xl:w-2/3 lg:w-1/2 h-96 lg:h-[390px]  w-full shadow-2xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.7007398081146!2d75.73268737543953!3d26.912991076646957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU0JzQ2LjgiTiA3NcKwNDQnMDYuOSJF!5e0!3m2!1sen!2sin!4v1710346770108!5m2!1sen!2sin"
              className="w-full map-cont h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-1/2 w-full left-cont ">
            <h1 className="xl:text-3xl text-2xl mb-4 font-bold text-gray-900">
              Contact Us
            </h1>
            <h2 className="xl:text-4xl text-3xl mb-4 font-bold blue-light-text">
              We Serve You Best
            </h2>

            <div>
              <p className="text-base xl:text-xl mt-4 text-gray-700 ">
                Shivay Franchise Investment Solutions LLP,
              </p>
              <p className="text-base xl:text-xl text-gray-700 ">
                A-352, Vaishali Nagar,
              </p>
              <p className="text-base xl:text-xl text-gray-700 ">
                Jaipur - 302021{" "}
              </p>
              <p className="text-base xl:text-xl text-gray-700 ">
                Rajasthan, India
              </p>
              <p className="mt-4 text-lg xl:text-xl">
                Email Us:{" "}
                <span className="xl:text-lg text-base underline blue-light-text ml-2">
                  consultant@investinfranchise.in
                </span>
              </p>
              <p className="mt-2 text-lg xl:text-xl">
                Call Us:{" "}
                <span className="xl:text-lg text-base underline blue-light-text ml-2">
                  +91 8852926842
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
