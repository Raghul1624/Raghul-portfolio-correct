import React from 'react';
import Reveal from './Reveal';
import './Certifications.css';
const CERTIFICATIONS = [
  { title: 'Java Certification', issuer: 'Java Programming' },
  { title: 'SNS Cyber Security', issuer: 'Cyber Security Fundamentals' },
  { title: 'ATS – PHP & Laravel', issuer: 'Web Development' },
];
function CertIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <p className="eyebrow">/ Certifications</p>
            <h2 className="section-title">Certifications</h2>
          </Reveal>
        </div>
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} className="card cert-card" delay={i * 90}>
              <div className="cert-icon"><CertIcon /></div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Certifications;
