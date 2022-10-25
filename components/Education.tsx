import React, { useState } from "react";
import Image from "next/image";
type Props = {};

const Education = () => {
  const [isMobile, setisMoble] = useState(false);
  return (
    <div className="bg-main-color text-center p-6">
      <h1 className="text-5xl font-bold p-4 text-cool-blue-color">
        Education & Certifications
      </h1>
      <div
        className="bg-cool-blue-color w-24 h-2 mx-auto
          rounded-md"
      ></div>
      <div className="md:flex items-center text-center justify-between p-4">
        <div className="mx-auto p-4">
          <Image
            src="images/asuLogo.png"
            width={300}
            height={173}
            alt="Asu Image"
          ></Image>
          <h1 className="font-bold text-cool-blue-color">
            BACHELOR OF SCIENCE IN COMPUTER SCIENCE
          </h1>
        </div>
        <div className="mx-auto">
          <Image
            src="images/salesforcebadge.png"
            width={250}
            height={245}
            alt="salesforce Image"
          ></Image>
          <h1 className="font-bold text-cool-blue-color">
            SALESFORCE CERTIFIED PLATFORM 1 DEVELOPER
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Education;
