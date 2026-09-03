import React from 'react';
import Reveal from './Reveal';
import './Education.css';
const COMPACT_EDUCATION = [
  { label: 'Higher Secondary (12th)', value: '57.1%' },
  { label: 'SSLC (10th)', value: '66.3%' },
];
function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <p className="eyebrow">/ Education</p>
            <h2 className="section-title">Academic Background</h2>
          </Reveal>
        </div>
        <Reveal className="education-main card">
          <span className="badge">2026</span>
          <h3 className="education-degree">B.E. Computer Science and Engineering</h3>
          <p className="education-college">Dhaanish Ahmed Institute of Technologies</p>
          <div className="education-cgpa">
            <span className="cgpa-value">7.58</span>
            <span className="cgpa-scale">/ 10 CGPA</span>
          </div>
        </Reveal>
        <div className="education-compact-grid">
          {COMPACT_EDUCATION.map((item, i) => (
            <Reveal key={item.label} className="card education-compact-card" delay={i * 100}>
              <p className="education-compact-label">{item.label}</p>
              <p className="education-compact-value">{item.value}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
