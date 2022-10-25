import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="bg-main-color flex flex-col pt-3">
      <div className="flex justify-center space-x-2">
        <SocialIcon url="https://www.linkedin.com/in/jmstorey/" />
        <SocialIcon url="https://github.com/JoshuaStorey/" />
        <SocialIcon network="email" url="jmstorey@asu.edu" />
      </div>
      <p className="text-center p-2 text-cool-blue-color font-bold">
        © Copyright 2022. Made by Joshua Storey
      </p>
    </div>
  );
};

export default Contact;
