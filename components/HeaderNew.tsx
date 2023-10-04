import React from "react";
import { Link } from "react-scroll";

type Props = {};

const HeaderNew = (props: Props) => {
  return (
    <div className="bg-white sticky top-0 z-20 flex flex-row justify-between font-kanit font-semibold text-xs text-header-text-color py-4 px-14">
      <div>
        <Link
          className="cursor-pointer"
          to="home-section"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <h1>joshua storey</h1>
        </Link>
      </div>
      <div>
        <Link
          className="cursor-pointer hover:text-cool-blue-color"
          to="contact-section"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <h1>contact</h1>
        </Link>
      </div>
    </div>
  );
};

export default HeaderNew;
