import React from 'react';
import s from './App.module.scss';
import Header from "./header/Header";
import Welcome from "./welcome/Welcome";
import Skills from "./skills/Skills";
import Works from "./works/Works";
import HireMe from "./hireMe/HireMe";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className={s.mainGrid}>
        <Header/>
        <Welcome/>
        <Skills/>
        <Works/>
        <HireMe/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
