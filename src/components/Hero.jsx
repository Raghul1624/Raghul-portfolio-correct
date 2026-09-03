import React from 'react';
import Reveal from './Reveal';
import './Hero.css';
function Hero(){return <section id="home" className="hero">
  <div className="hero-top container"><div className="monogram">RR</div><div><span>JAVA DEVELOPER</span><br/><span>& SOFTWARE ENGINEER</span></div><div className="hero-year">2026</div></div>
  <div className="hero-word">PORTFOLIO</div>
  <div className="container hero-main">
    <Reveal className="hero-copy"><p className="eyebrow">Computer Science & Engineering Graduate</p><h1>Raghul <em>R.</em></h1><p>Java Developer focused on building clean, reliable and scalable backend solutions with Java, SQL and modern development practices.</p><div className="hero-actions"><a href="#projects" className="btn btn-primary">View Selected Work</a><a href="#contact" className="btn btn-outline">Let's Connect</a></div></Reveal>
    <Reveal className="hero-portrait" delay={120}><div className="portrait-inner"><div className="portrait-initials">RR</div><span>JAVA<br/>DEVELOPER</span></div></Reveal>
    <Reveal className="hero-side" delay={180}><p>BUILDING SOFTWARE<br/>THAT SOLVES REAL<br/>PROBLEMS.</p><div className="rule"></div><span>BASED IN CHENNAI<br/>AVAILABLE WORLDWIDE</span></Reveal>
  </div>
  <div className="hero-strip container"><span>01 / ABOUT ME</span><span>02 / SKILLS</span><span>03 / SELECTED WORK</span><span>04 / EXPERIENCE</span><span>05 / EDUCATION</span><span>06 / CONTACT</span></div>
</section>}
export default Hero;
