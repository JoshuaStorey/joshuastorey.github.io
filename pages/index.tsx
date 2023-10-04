import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import HeaderNew from '../components/HeaderNew';
import Divider from '../components/Divider';
import Projects from '../components/Projects';
require('dotenv').config();
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Joshua&apos;s Portfolio</title>
        {/*  Header */}
      </Head>

      <HeaderNew />

      {/*  Hero */}
      <section className='' id='home-section'>
        <Hero />
      </section>
      <Divider title={'ABOUT ME'} />
      {/*  About */}
      <section className='' id='about-section'>
        <About />
      </section>
      <Divider title={'PROJECTS'} />
      {/*  Experience / Projects */}
      <section className='' id='experience-section'>
        <Projects />
      </section>
      <Divider title={'CONTACT'} />
      {/*  Contact me */}
      <section className='' id='contact-section'>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
