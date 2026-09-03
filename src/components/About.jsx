import React from 'react';
import Reveal from './Reveal';
import './About.css';
const FOCUS_AREAS = ['Java', 'Backend Development', 'SQL & Database', 'Problem Solving'];
function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <p className="eyebrow">/ About me</p>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text">
            <h2 className="section-title">
              Hi, I'm Raghul. I build <em>clean and reliable</em> Java applications.
            </h2>
            <p className="about-desc">
              I'm an enthusiastic and detail-oriented Computer Science and Engineering graduate
              with a strong foundation in Java programming, Object-Oriented Programming, Data
              Structures, Collections, SQL, and Java 8 features. I have hands-on experience
              developing academic projects and solving programming problems using Java, and I'm
              familiar with JDBC, database concepts, HTML, and Python.
            </p>
            <p className="about-desc">
              I'm a quick learner with strong problem-solving and analytical skills, looking for
              an entry-level Java Developer opportunity to contribute to building reliable and
              scalable applications.
            </p>
          </Reveal>
          <Reveal className="about-chips" delay={120}>
            {FOCUS_AREAS.map((area) => (
              <span key={area} className="chip">{area}</span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
export default About;
