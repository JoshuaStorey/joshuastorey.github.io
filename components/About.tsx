import React from "react";
import { Link } from "react-scroll";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="text-center mx-auto bg-cool-blue-color">
      <h1 className="text-5xl font-bold p-4 text-main-color">About Me</h1>
      <div
        className="bg-main-color w-24 h-2 mx-auto
          rounded-md mb-4"
      ></div>
      {/* <p className="text-main-color text-lg">
        Here you will find more information about me, what I do, and my current
      skills mostly in terms of programming and technology!
  </p>*/}

      <div
        id="home-section"
        className="bg-cool-blue-color flex flex-col md:flex-row items-center text-center p-1 mx-auto"
      >
        {" "}
        <div
          className="text-center pt-0 pb-2 mx-auto text-main-color md:text-left md:w-2/5 "
          id="AboutInfo"
        >
          <h1 className="text-4xl text-main-color font-bold pr-0 pl-0 pt-2 pb-2 ">
            Get to know me!
          </h1>
          <p className="text-xl pb-2 mb-8">
            I am a <b>Software Engineer graduate</b> with a passion for working
            in team environments and developing software. I have a strong drive
            to tackle intimidating or complex problems in <b>front</b> and
            <b> back-end </b>
            programming and <b>salesforce</b> applications.
          </p>
          <p className="text-xl mb-8">
            I enjoy <b>helping</b> others to understand technologies that may be
            complex or difficult to navigate. I have an <b>openness</b> and{" "}
            <b>willingness </b>
            to learn new methods, ideas, and technologies so I can continue to
            develop and improve upon my skill sets.
          </p>
          <p className="text-xl mb-8">
            I am actively seeking <b>full-time opportunities</b> in the software
            development field. Please feel free to connect.
          </p>
          <Link
            className="cursor-pointer"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="bg-white text-cool-blue-color rounded-sm pl-9 pr-9 pt-3 pb-3 text-xl font-bold mb-8 md:mb-16 ">
              Reach Out!
            </button>
          </Link>
        </div>
        <div
          className="text-center pt-0 pb-2 mx-auto md:w-2/5 "
          id="SkillSection"
        >
          <h1 className="text-4xl font-bold text-main-color text-center p-4">
            My Skills
          </h1>
          <div
            className="bg-main-color w-24 h-2 mx-auto
          rounded-md"
          ></div>

          <div
            className="flex flex-wrap p-12 xl:p-6 md:p-6 space-x-0.5 xl:space-x-2 md:space-x-2"
            id="skills"
          >
            <p className="bg-main-color p-2 rounded-md mb-4">JavaScript</p>
            <p className="bg-main-color p-2 rounded-md mb-4">HTML</p>
            <p className="bg-main-color p-2 rounded-md mb-4">CSS</p>
            <p className="bg-main-color p-2 rounded-md mb-4">ReactJS</p>
            <p className="bg-main-color p-2 rounded-md mb-4">
              Adobe Creative Suite
            </p>
            <p className="bg-main-color p-2 rounded-md mb-4">SQL</p>
            <p className="bg-main-color p-2 rounded-md mb-4">Microsoft Suite</p>
            <p className="bg-main-color p-2 rounded-md mb-4">
              TypeScript Basics
            </p>
            <p className="bg-main-color p-2 rounded-md mb-4">Salesforce APEX</p>
            <p className="bg-main-color p-2 rounded-md mb-4">Salesforce LWC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
