import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import ButtonGrad from "./ButtonGrad";
import logo from "../assets/logo1.webp";
import { IoMdArrowDropdown } from "react-icons/io";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropOpen, setDropOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: "",
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
      const mailtoLink = `mailto:consultant@investinfranchise.in?subject=${formData.interestedIn}&body=Name: ${formData.name}%0APhone : ${formData.phone}%0AEmail: ${formData.email}%0AInterestedIn: ${formData.interestedIn}%0AMessage: ${formData.message}`;
      window.location.href = mailtoLink;
      // console.log("Form data:", formData);
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        interestedIn: "",
        message: "",
      });
      // Clear errors
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const openDropDown = () => {
    setDropOpen(!isDropOpen);
  };
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
    document.body.classList.remove("nav-open");
  };

  const handleNavLinkClick = (event) => {
    const isServicesElement = event.target.closest("#services");
    // Close the navbar only if the clicked element is not the "Services" label or its child
    if (!isServicesElement) {
      setNavOpen(false);
      document.body.classList.remove("nav-open");
    }
  };

  // const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <div className="nav-main h-24 shadow-2xl sticky top-0  bg-white z-40">
        <div className="lg:block hidden ">
          <div className="flex justify-between px-8 md:px-12 ">
            <Link to={"/"}>
              <div className="   h-24 py-2 logo-nav  cursor-pointer">
                <span>
                  <img src={logo} alt="logo_img" className="h-full" />
                </span>
              </div>
            </Link>
            <div className="mid-nav flex items-center lg:mt-1 xl:mt-2 navbar-links navbar-cont">
              <ul className="flex text-black justify-between xl:gap-10 lg:gap-6 md:gap-2 ">
                <Link to={"/"}>
                  <li className="cursor-pointer  xl:text-xl lg:text-lg font-bold  nav-item ">
                    Home
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="cursor-pointer  xl:text-xl lg:text-lg font-bold  nav-item ">
                    About Us
                  </li>
                </Link>

                <Link
                  className="relative cursor-pointer"
                  onClick={openDropDown}
                  id="services"
                >
                  <li className="   xl:text-xl lg:text-lg font-bold  nav-item ">
                    <label htmlFor="services" className="relative">
                      Services{" "}
                      <span className="absolute top-[5px] ">
                        <IoMdArrowDropdown />
                      </span>
                    </label>
                  </li>
                  <div
                    className={` ${
                      isDropOpen ? "block" : "hidden"
                    } absolute  left-0 top-[40px] border border-gray-300 py-2 shadow-xl  flex flex-col gap-2  bg-white`}
                  >
                    <Link to={"/forinvestors"}>
                      <option
                        value="fiv"
                        className=" py-2 pl-4 pr-8 hover:bg-gray-200 lg:text-lg text-base font-semibold hover:text-blue-700"
                      >
                        {" "}
                        Franchise Investment
                      </option>
                    </Link>

                    <Link to={"/forbrands"}>
                      <option
                        value="fob"
                        className=" py-2 pl-4 pr-8 hover:bg-gray-200 lg:text-lg text-base font-semibold hover:text-blue-700"
                      >
                        Franchise Expansion
                      </option>
                    </Link>

                    <Link to={"/resell"}>
                      <option
                        value="rs"
                        className="py-2 pl-4 pr-8 hover:bg-gray-200 lg:text-lg text-base font-semibold hover:text-blue-700"
                      >
                        Business Re-sale
                      </option>
                    </Link>

                    <Link to={"/realestate"}>
                      <option
                        value="re"
                        className="py-2 pl-4 pr-8 hover:bg-gray-200 lg:text-lg text-base font-semibold hover:text-blue-700"
                      >
                        Real Estate Services
                      </option>
                    </Link>
                  </div>
                </Link>

                <Link to={"/blogs"}>
                  <li className="cursor-pointer  xl:text-xl lg:text-lg font-bold  nav-item ">
                    Blogs
                  </li>
                </Link>

                <Link to={"/events"}>
                  <li className="cursor-pointer  xl:text-xl lg:text-lg font-bold  nav-item ">
                    Events & Exhibition
                  </li>
                </Link>

                <Link to={"/contact"}>
                  <li className="cursor-pointer  xl:text-xl lg:text-lg font-bold  nav-item ">
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>

            {/* Modal Contact */}
            <div className="flex gap-12">
              <div className="flex flex-col gap-1 justify-center">
                <div className="" onClick={() => setOpenModal(true)}>
                  <ButtonGrad
                    text="Consult Now"
                    high={42 + "px"}
                    wid={160 + "px"}
                  />
                </div>
                <div className="">
                  <p className="xl:text-xl text-lg font-bold ml-4">
                    +91 8852926842
                  </p>
                </div>
                <Modal
                  show={openModal}
                  size="xl"
                  onClose={onCloseModal}
                  popup
                  className=""
                >
                  <Modal.Header />
                  <Modal.Body>
                    <form action="" onSubmit={handleSubmit}>
                      <div className="space-y-3">
                        <h3 className="text-xl  text-gray-900 dark:text-white text-center font-bold">
                          Looking to Invest in Franchise? <br />
                          <span className=" mt-1">Consult Us!</span>
                        </h3>
                        <div>
                          <div className="mb-1 block">
                            <Label
                              htmlFor="name"
                              value="Name"
                              className="text-sm font-semibold"
                            />{" "}
                            <span className="text-red-600">*</span>
                          </div>
                          <TextInput
                            id="name"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && (
                            <p className="text-red-600">{errors.name}</p>
                          )}
                        </div>

                        <div>
                          <div className="mb-1 block">
                            <Label
                              htmlFor="phone"
                              value="Phone"
                              className="text-sm font-semibold"
                            />{" "}
                            <span className="text-red-600">*</span>
                          </div>
                          <TextInput
                            id="phone"
                            placeholder="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && (
                            <p className="text-red-600">{errors.phone}</p>
                          )}
                        </div>

                        <div>
                          <div className="mb-1 block">
                            <Label
                              htmlFor="email"
                              value="Email"
                              className="text-sm font-semibold"
                            />{" "}
                            <span className="text-red-600">*</span>
                          </div>
                          <TextInput
                            id="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <p className="text-red-600">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <div className="mb-1 block">
                            <label
                              htmlFor="interested"
                              className="text-sm font-semibold"
                            >
                              Interested In{" "}
                              <span className="text-red-600">*</span>
                            </label>
                          </div>
                          <select
                            className="  rounded-md border border-1 border-gray-300 p-1 md:p-2 w-full   transition ease-in-out duration-150"
                            id="interested"
                            name="interestedIn"
                            value={formData.interestedIn}
                            onChange={handleChange}
                          >
                            <option value="Investing in a Frenchise">
                              Franchise Investment (Investors)
                            </option>
                            <option value="Expand your Franchise">
                              Franchise Expansion (Brands){" "}
                            </option>
                            <option value="Sell or Buy Business">
                              Business Re-sale ( Investors / Brands){" "}
                            </option>
                            <option value="Lease out of property">
                              Real Estate Services (Property Owners / Property
                              Seekers){" "}
                            </option>
                          </select>
                          {errors.interestedIn && (
                            <p className="text-red-600">
                              {errors.interestedIn}
                            </p>
                          )}
                        </div>

                        <div className="mb-1 block">
                          <label
                            htmlFor="message"
                            className="text-sm font-semibold text-gray-800 "
                          >
                            Remark (Optional)
                          </label>

                          <div className=" mb-2">
                            <textarea
                              name="message"
                              id="message"
                              rows="3"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Enter Your Message..."
                              className="w-full border border-1 border-gray-300"
                            ></textarea>
                          </div>
                        </div>

                        <div className="mt-2 md:mt-8">
                          <ButtonGrad
                            text="Submit"
                            wid="100%"
                            high={2.8 + "em"}
                          />
                        </div>
                      </div>
                    </form>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className={`lg:hidden  xs:block relative pt-[0.1px] z-40`}>
          <div className=" ">
            <div className="ml-4 mt-4">
              <Link to={"/"}>
                <div className="logo-nav   h-20 py-2 logo-nav  cursor-pointer">
                  <span>
                    <img src={logo} alt="logo_img" className="h-full" />
                  </span>
                </div>
              </Link>
            </div>
            <div className="">
              <div className="h-0 ">
                <div
                  className={` transition-all duration-300 md:w-[300px] sm:w-[250px] w-[220px] pt-9 min-h-[950px] bg-white px-8 absolute top-[-15px]   ${
                    isNavOpen
                      ? " open-nav right-0 block"
                      : " close-nav right-[-300px] hidden "
                  } `}
                >
                  <div className="mid-nav flex flex-col items-center mt-20 navbar-links navbar-cont mb-10 ">
                    <ul
                      className="flex flex-col justify-between md:gap-6 gap-4 "
                      onClick={handleNavLinkClick}
                    >
                      <Link to={"/"}>
                        <li className="cursor-pointer  md:text-xl text-lg   nav-item ">
                          Home
                        </li>
                      </Link>

                      <Link to={"/about"}>
                        <li className="cursor-pointer  md:text-xl text-lg   nav-item ">
                          About Us
                        </li>
                      </Link>

                      <li
                        className=" cursor-pointer   md:text-xl text-lg font-bold nav-item "
                        onClick={openDropDown}
                        id="services"
                      >
                        <label htmlFor="services" className="relative">
                          Services{" "}
                          <span className="absolute top-[4px] ">
                            <IoMdArrowDropdown />
                          </span>
                        </label>
                      </li>

                      <div
                        className={` ${
                          isDropOpen ? "block" : "hidden"
                        } absolute  right-20 top-[210px] border border-gray-300 py-2 shadow-xl  flex flex-col gap-2  bg-white`}
                      >
                        <Link to={"/forinvestors"}>
                          <option
                            value="fiv"
                            className=" py-2 pl-4 pr-8 hover:bg-gray-200 lg:text-lg text-base font-semibold hover:text-blue-700"
                          >
                            {" "}
                            Franchise Investment
                          </option>
                        </Link>

                        <Link to={"/forbrands"}>
                          <option
                            value="fob"
                            className=" py-2 pl-4 pr-8 hover:bg-gray-200 lg:text-lg text-base font-semibold hover:text-blue-700"
                          >
                            Franchise Expansion
                          </option>
                        </Link>

                        <Link to={"/resell"}>
                          <option
                            value="rs"
                            className="py-2 pl-4 pr-8 hover:bg-gray-200 lg:text-lg text-base font-semibold hover:text-blue-700"
                          >
                            Business Re-sale
                          </option>
                        </Link>

                        <Link to={"/realestate"}>
                          <option
                            value="re"
                            className="py-2 pl-4 pr-8 hover:bg-gray-200 lg:text-lg text-base font-semibold hover:text-blue-700"
                          >
                            Real Estate Services
                          </option>
                        </Link>
                      </div>

                      <Link to={"/blogs"}>
                        <li className="cursor-pointer  md:text-xl text-lg    nav-item ">
                          Blogs
                        </li>
                      </Link>

                      <Link to={"/events"}>
                        <li className="cursor-pointer  md:text-xl text-lg    nav-item ">
                          Events & Exhibition
                        </li>
                      </Link>

                      <Link to={"/contact"}>
                        <li className="cursor-pointer  md:text-xl text-lg    nav-item ">
                          Contact Us
                        </li>
                      </Link>

                      <div className=" flex flex-col gap-4">
                        <div className="flex flex-col gap-2 justify-center">
                          <div className="" onClick={() => setOpenModal(true)}>
                            <ButtonGrad
                              text="Consult Now"
                              high={42 + "px"}
                              wid={160 + "px"}
                            />
                          </div>
                          <p className="md:text-xl text-lg xl:text-xl text-gray-900 font-bold">
                            +91 8852926842
                          </p>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                <div
                  className="flex items-center absolute right-10 top-10 text-3xl justify-center cursor-pointer"
                  onClick={isNavOpen ? closeNav : toggleNav}
                >
                  {isNavOpen ? <FaTimes /> : <GiHamburgerMenu />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
