import React, { useState } from 'react';
import Image from 'next/image';
type Props = {};

const Projects = (props: Props) => {
  return (
    <div id='parent' className='flex flex-col m-12'>
      <h1 className='text-5xl font-bold p-4 text-center text-black'>
        Projects
      </h1>
      <p className='text-center p-4'>
        <a
          href='https://github.com/JoshuaStorey'
          className='text-md p-4 text-center text-black'
        >
          Here you will find some of the personal projects I have created.
        </a>
      </p>
      <div
        className='bg-black w-12 h-0.5 mx-auto
          rounded-md mb-4'
      ></div>
      <div
        id='container'
        className='xl:flex xl:flex-row items-center text-center pb-24'
      >
        <div id='p1'>
          <Image
            src='images/project-1.png'
            width={690}
            height={408}
            className='rounded-3xl'
            alt='Asu Image'
          ></Image>
        </div>
        <div className='text-header-text-color px-12'>
          <h1 className='text-2xl font-bold pb-2 text-black text-break'>
            Typing Test
          </h1>
          <h1 className='py-2'>
            Typing test is a web application built to test your typing speed.
            Completing the test displays your words per minute WPM and accuracy.
            Built using Nextjs and TailwindCSS.
          </h1>
          <span className=' bg-white inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 '>
            Nextjs
          </span>
          <span className=' bg-white inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 '>
            TailwindCSS
          </span>
          <span className=' bg-white inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 '>
            Javascript
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://typing-test-speed.vercel.app/';
            }}
            className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border mx-2 border-gray-400 rounded shadow'
          >
            Live Demo 🡥
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://github.com/JoshuaStorey/typing-test-speed';
            }}
            className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          >
            Github
          </button>
        </div>
      </div>
      <div
        id='container2'
        className='xl:flex xl:flex-row md:flex md:flex-row items-center  justify-center text-center pb-24'
      >
        <div id='p1'>
          <Image
            src='images/project-2.png'
            width={240}
            height={454}
            className='rounded-3xl'
            alt='Asu Image'
          ></Image>
          <Image
            src='images/project-2-2.png'
            width={240}
            height={454}
            className='rounded-3xl'
            alt='Asu Image'
          ></Image>
        </div>
        <div className='text-header-text-color px-12 py-4'>
          <h1 className='text-2xl font-bold pb-2 text-black text-break'>
            Hiking Data
          </h1>
          <h1 className='py-2'>
            Hiking Data is a mobile application built to track your hiking data
            and find nearby hikes. <br />
            Utilizes a public api to fetch hikes nearby your location and
            returns locations.
          </h1>
          <span className=' bg-white inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 '>
            Swift
          </span>
          <span className=' bg-white inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 '>
            CoreData
          </span>
          <span className=' bg-white inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 '>
            API
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://github.com/JoshuaStorey/HikingSwiftApp';
            }}
            className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          >
            Github
          </button>
        </div>
      </div>
      <div
        id='container3'
        className='xl:flex xl:flex-row items-center text-center pb-24'
      >
        <div id='p1'>
          <Image
            src='images/project-3.png'
            width={690}
            height={408}
            className='rounded-3xl'
            alt='Asu Image'
          ></Image>
        </div>
        <div className='text-header-text-color px-12 py-4'>
          <h1 className='text-2xl font-bold pb-2 text-black text-break'>
            Map Tracker
          </h1>
          <h1 className='py-2'>
            React Web Application built to track the video game Apex Legends
            gamemode rotation. <br />
            Application pulled data from a public API and displayed the current
            gamemodes and time remaining until next.
          </h1>
          <span className=' bg-white inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 '>
            React
          </span>
          <span className=' bg-white inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 '>
            HTML
          </span>
          <span className=' bg-white inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 '>
            CSS
          </span>
          <span className=' bg-white inline-block border-2 border-black rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2 '>
            API
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://github.com/JoshuaStorey/apexmaptracker';
            }}
            className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
