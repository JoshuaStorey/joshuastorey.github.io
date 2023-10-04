import { SocialIcon } from 'react-social-icons';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-scroll';
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
    /*<div className='bg-contact-black flex flex-row p-4 basis-1/2'>
      <div id='left'>
        <h1 className='text-4xl font-bold p-4 text-center  text-white'>
          Let&#39;s Connect!
        </h1>
        <p className='text-white'>Lorem ipsum</p>
      </div>
      <div id='right'>
        <form id='contact-form' ref={form} onSubmit={sendEmail}>
          <div className='mb-6'>
            <input
              type='Name'
              name='user_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='name'
              required
            />
          </div>
          <div className='mb-6'>
            <input
              type='email'
              name='user_email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='example@email.com'
              required
            />
          </div>
          <div className='mb-6'>
            <textarea
              name='message'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='message'
              required
            />
          </div>
          <button
            type='submit'
            className='text-white bg-cool-blue-color hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </form>
        {successfulSubmit ? (
          <div
            className='p-4 mb-4 text-sm mt-3 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400'
            role='alert'
          >
            <span className='font-medium'>Message Sent!</span> Thank you for
            your message! I will get back to you soon!
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
    /*      <div className="flex justify-center space-x-2 pt-4">
        <SocialIcon url="https://www.linkedin.com/in/jmstorey/" />
        <SocialIcon url="https://github.com/JoshuaStorey/" />
        <SocialIcon network="email" url="mailto:jmstorey@asu.edu" />
      </div>
      <p className="text-center p-2 text-cool-blue-color font-bold">
        © Copyright 2023. Made by Joshua Storey
      </p>*/

    <main className=''>
      <div className='flex flex-col justify-center text-center my-24 md:flex-row'>
        <div id='left' className='md:mr-36'>
          <h1 className='text-4xl font-bold pb-6 text-black'>
            Let&#39;s Connect! ✉️
          </h1>
          <p className='text-black pb-2'>
            Want to reach out? Shoot me a message using the form!
          </p>
          <p className='pb-2'>
            Alternatively click on one of the social links.
          </p>
          <p className='pb-2'> I&#39;ll get back to you as soon as possible!</p>
          <div className='flex gap-4 justify-center py-6'>
            <SocialIcon url='https://www.linkedin.com/in/jmstorey/' />
            <SocialIcon url='https://github.com/JoshuaStorey/' />
            <SocialIcon network='email' url='mailto:jmstorey@asu.edu' />
          </div>
        </div>
        <div id='right' className='items-center justify-center'>
          <form
            id='contact-form'
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col justify-center items-center'
          >
            <div className='mb-6'>
              <input
                type='Name'
                name='user_name'
                className=' bg-gray-50 border w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='name'
                required
              />
            </div>
            <div className='mb-6'>
              <input
                type='email'
                name='user_email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='example@email.com'
                required
              />
            </div>
            <div className='mb-6 justify-center'>
              <textarea
                name='message'
                className='bg-gray-50 border resize-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='message'
                required
              />
            </div>

            <button
              type='submit'
              className=' text-white bg-cool-blue-color hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-96 px-5 py-2.5 sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-60'
            >
              SEND MESSAGE
            </button>
          </form>
          {successfulSubmit ? (
            <div
              className='p-4 mb-4 text-sm mt-3 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400'
              role='alert'
            >
              <span className='font-medium'>Message Sent!</span> Thank you for
              your message! I will get back to you soon!
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
};

export default Contact;
