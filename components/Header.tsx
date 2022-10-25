import React, { useState } from "react";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
import Image from "next/image";
type Props = {};

const Header = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-main-color sticky top-0 z-20 shadow-md">
      <div className="p-1 font-bold flex text-lg justify-between mx-auto text-gray-800 md: pl-12 pr-12">
        <div className="flex flex-row items-center  hover:text-cool-blue-color">
          <Link
            className="cursor-pointer"
            to="home-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Image
              src="images/logo-no-background.svg"
              width={70}
              height={70}
              alt="logo"
            ></Image>
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center space-x-4 xl:space-x-6 ">
          <Link
            className="cursor-pointer  hover:text-cool-blue-color "
            to="about-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            ABOUT
          </Link>
          <Link
            className="cursor-pointer  hover:text-cool-blue-color "
            to="education-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            EDUCATION
          </Link>
          <Link
            className="cursor-pointer  hover:text-cool-blue-color"
            to="experience-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            PROJECTS
          </Link>
          <Link
            className="cursor-pointer hover:text-cool-blue-color"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            CONTACT
          </Link>
        </div>
        <div className="pt-4 md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#656acd" />
        </div>
      </div>
      {isOpen ? (
        <div className="flex flex-col pd-4 md:hidden">
          <ul className="bg-main-color outline outline-2 outline-cool-blue-color">
            <Link
              className="cursor-pointer   hover:text-cool-blue-color "
              to="about-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="flex flex-row justify-end items-center p-2 h-12">
                About
              </li>
            </Link>
            <Link
              className="cursor-pointer hover:text-cool-blue-color"
              to="education-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {" "}
              <li className="flex flex-row justify-end items-center p-2 h-12 outline outline-2 outline-cool-blue-color">
                Education
              </li>
            </Link>
            <Link
              className="cursor-pointer hover:text-cool-blue-color"
              to="experience-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="flex flex-row justify-end items-center p-2 h-12">
                Projects
              </li>
            </Link>
            <Link
              className="cursor-pointer hover:text-cool-blue-color"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li className="flex flex-row justify-end items-center p-2 h-12 outline outline-2 outline-cool-blue-color">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
