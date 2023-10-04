import React from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <main className='flex flex-col items-center justify-center text-center gap-16 my-32 md:flex-row md:gap-64'>
        <div id='left' className='items-center'>
          <h2 className='text-5xl font-bold '>Hello! I&#39;m Joshua.</h2>
          <h2 className=' text-header-text-color font-semibold text-base py-6'>
            I&#39;m a software engineer based in Arizona.
            <br />
            Passionate about front-end development.
          </h2>
        </div>
        <div id='right'>
          <Image
            src='images/avataaars2.png'
            width={256}
            height={256}
            alt='Hero Image'
          ></Image>
        </div>
      </main>
      <div className='justify-center items-center text-center pb-8'>
        <Link
          className='cursor-pointer'
          to='about-section'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <Image
            className='animate-bounce'
            src='images/down-arrow-5-svgrepo-com.svg'
            width={50}
            height={50}
            alt='downarrow'
          ></Image>
        </Link>
      </div>
    </>
  );
};

export default Hero;
