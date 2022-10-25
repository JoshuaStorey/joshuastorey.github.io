import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
type Props = {};

const Hero = (props: Props) => {
  const [Headertext, headerCount] = useTypewriter({
    words: ["Hi, I'm Joshua."],
    loop: 1,
    typeSpeed: 100,
  });
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
    >
      <div className="flex flex-col items-center text-center p-24 mx-auto md:p-44 md:items-center md:text-center">
        <div className="flex text-6xl font-bold pb-6 text-hero-text">
          <h1>{Headertext}</h1>
        </div>
        <div className="flex font-mono pb-6  text-hero-text">
          <p>
            Software Engineer graduate with a passion for working on front-end
            web applications and salesforce applications.
          </p>
        </div>
        <div className="p-8">
          <Image
            src="/images/avataaars2.png"
            width={256}
            height={256}
            alt="Hero Image"
          ></Image>
        </div>
        <div>
          <Link
            className="cursor-pointer"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="bg-cool-blue-color text-white rounded-sm pl-9 pr-9 pt-3 pb-3 text-xl font-bold">
              See More!
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
