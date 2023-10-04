import React from 'react';
import { Link } from 'react-scroll';

type Props = {};

const About = (props: Props) => {
  return (
    <div className='text-center mx-auto bg-white'>
      <h1 className='text-5xl font-bold p-4 text-black'>About Me</h1>
      <div
        className='bg-black w-24 h-0.5 mx-auto
          rounded-md mb-4'
      ></div>
      <div
        id='home-section'
        className='bg-white flex flex-col md:flex-row items-center text-center p-1 mx-auto'
      >
        <div
          className='text-center pt-0 pb-2 px-6 mx-auto text-header-text-color md:text-left md:w-2/5 '
          id='AboutInfo'
        >
          <h1 className='text-4xl text-black text-center font-bold pr-0 pl-0 pt-2 pb-6 '>
            Get to know me!
          </h1>
          <p className='text-xl mb-8 indent-6'>
            I am a <b>Software Engineer graduate</b> with a passion for working
            in team environments and developing software. I have a strong drive
            to tackle intimidating or complex problems in <b>front</b> and
            <b> back-end </b>
            programming and <b>salesforce</b> applications.
          </p>
          <p className='text-xl mb-8'>
            I enjoy <b>helping</b> others to understand technologies that may be
            complex or difficult to navigate. I have an <b>openness</b> and{' '}
            <b>willingness </b>
            to learn new methods, ideas, and technologies so I can continue to
            develop and improve upon my skill sets.
          </p>
          <p className='text-xl mb-8'>
            I am actively seeking <b>full-time opportunities</b> in the software
            development field. Please feel free to connect.
          </p>
          <Link
            className='cursor-pointer'
            to='contact-section'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          ></Link>
        </div>
        <div
          className='text-center pt-0 pb-2 mx-auto md:w-2/5 '
          id='SkillSection'
        >
          <h1 className='text-4xl font-bold text-black text-center p-4'>
            My Skills
          </h1>

          <div
            className='flex flex-wrap justify-center p-12 xl:p-6 md:p-6 space-x-0.5 xl:space-x-2 md:space-x-2'
            id='skills'
          >
            <p className='bg-white outline outline-black outline-2 p-2 rounded-xl mb-4'>
              JavaScript
            </p>
            <p className='bg-white outline outline-black outline-2 p-2 rounded-xl mb-4'>
              HTML
            </p>
            <p className='bg-white outline outline-black outline-2 p-2 rounded-xl mb-4'>
              CSS
            </p>
            <p className='bg-white outline outline-black outline-2 p-2 rounded-xl mb-4'>
              ReactJS
            </p>
            <p className='bg-white outline outline-black outline-2 p-2 rounded-xl mb-4'>
              Adobe Creative Suite
            </p>
            <p className='bg-white outline outline-black outline-2 p-2 rounded-xl mb-4'>
              SQL
            </p>
            <p className='bg-white outline outline-black outline-2 p-2 rounded-xl mb-4'>
              Microsoft Suite
            </p>
            <p className='bg-white outline outline-black outline-2 p-2 rounded-xl mb-4'>
              TypeScript Basics
            </p>
            <p className='bg-white outline outline-black outline-2 p-2 rounded-xl mb-4'>
              Salesforce APEX
            </p>
            <p className='bg-white outline outline-black outline-2 p-2 rounded-xl mb-4'>
              Salesforce LWC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
