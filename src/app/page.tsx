"use client";

import React, { useRef } from "react";
import Header from './components/header'
import Main1 from './components/main-screen'
import About from './components/about'
import Projects from './components/projects'
import Connect from './components/connect'
import Footer from './components/footer'

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
config.autoAddCss = false;

export default function Home() {


  //About Section Scrolling
  const aboutRef = useRef<HTMLDivElement>(null);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Projects Section Scrolling
  const ProjectsRef = useRef<HTMLDivElement>(null);
  const scrollToProjects = () => {
    if (ProjectsRef.current) {
      ProjectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Contact Section Scrolling
  const ContactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    if (ContactRef.current) {
      ContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className='bg-zinc-900'>
      <Header scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact}/>
      <Main1 />
      <About aboutRef={aboutRef}/>
      <Projects ProjectsRef={ProjectsRef}/>
      <Connect ContactRef={ContactRef}/>
      <Footer />
    </main>
  );
}
