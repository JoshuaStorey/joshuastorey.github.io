import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { motion, useScroll } from "framer-motion";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Joshua&apos;s Portfolio</title>
        {/*  Header */}
      </Head>

      <Header />

      {/*  Hero */}
      <section className="bg-main-color" id="home-section">
        <Hero />
      </section>
      {/*  About */}
      <section className="" id="about-section">
        <About />
      </section>

      {/*  Education / Projects */}
      <section className="" id="education-section">
        <Education />
      </section>
      {/*  Experience / Projects */}
      <section className="" id="experience-section">
        <Experience />
      </section>
      {/*  Contact me */}
      <section className="" id="contact-section">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
