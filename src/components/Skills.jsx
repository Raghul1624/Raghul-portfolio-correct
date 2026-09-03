import React from 'react';
import Reveal from './Reveal';
import './Skills.css';
const SKILL_GROUPS = [
  {
    title: 'Programming',
    skills: [
      { name: 'Java', primary: true },
      { name: 'SQL' },
      { name: 'JavaScript' },
      { name: 'React.js' },
    ],
  },
  {
    title: 'Frontend',
    skills: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'Bootstrap' }],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot' },
      { name: 'Servlets' },
      { name: 'JSP' },
      { name: 'JDBC' },
      { name: 'REST API' },
    ],
  },
  {
    title: 'Database',
    skills: [{ name: 'MySQL' }],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Eclipse' },
    ],
  },
];
function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <p className="eyebrow">/ Skills</p>
            <h2 className="section-title">Technical Toolkit</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-sub">
              Core technologies I use to design, build and reason about software — with Java as
              my primary strength.
            </p>
          </Reveal>
        </div>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} className="card skill-card" delay={i * 80}>
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-tag ${skill.primary ? 'skill-tag-primary' : ''}`}
                  >
                    {skill.name}
                    {skill.primary && <span className="skill-primary-dot"></span>}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
