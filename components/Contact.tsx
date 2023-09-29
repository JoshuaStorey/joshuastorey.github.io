import { SocialIcon } from "react-social-icons";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
type Props = {};

const Contact = (props: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const [successfulSubmit, setsuccessfulSubmit] = useState(false);
  const sendEmail = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    e.target.clear;
    if (form.current == null) return;
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          //console.log(result.text);
          e.target.reset();
          setsuccessfulSubmit(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-main-color flex flex-col p-4 pb-2 xl:">
      <h1 className="text-5xl font-bold p-4 text-center  text-cool-blue-color">
        Contact Me!
      </h1>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="Name"
            name="user_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@email.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Message
          </label>
          <textarea
            name="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="message"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-cool-blue-color hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      {successfulSubmit ? (
        <div
          className="p-4 mb-4 text-sm mt-3 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Message Sent!</span> Thank you for your
          message! I will get back to you soon!
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex justify-center space-x-2 pt-4">
        <SocialIcon url="https://www.linkedin.com/in/jmstorey/" />
        <SocialIcon url="https://github.com/JoshuaStorey/" />
        <SocialIcon network="email" url="mailto:jmstorey@asu.edu" />
      </div>
      <p className="text-center p-2 text-cool-blue-color font-bold">
        © Copyright 2023. Made by Joshua Storey
      </p>
    </div>
  );
};

export default Contact;
