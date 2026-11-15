import { Link } from "react-router";
import { ArrowUpRight, Github, Code2 } from "lucide-react";
import { Container } from "../components/common/Container";
import { SectionLabel } from "../components/common/SectionLabel";
import { ProjectCard } from "../components/work/ProjectCard";
import { projects } from "../data/projects";
import { experience } from "../data/experience";

const profileImage = "/images/file_00000000da0c8211923da5029eaf63e6.png";

export function HomePage() {
  return (
    <>
      <section className="hero hero-modern">
        <Container className="hero-modern__inner">
          <div className="hero-modern__top">
            <span className="hero-modern__role"><i /> FULL-STACK DEVELOPER</span>
            <span className="hero-modern__availability">AVAILABLE FOR SELECT PROJECTS</span>
          </div>

          <div className="hero-modern__main">
            <div className="hero-modern__copy">
              <p className="hero-modern__eyebrow">SOFTWARE ENGINEER / PRODUCT BUILDER</p>

              <h1>
                <span>Tushar</span>
                <strong>Patil<span>.</span></strong>
              </h1>

              <p className="hero-modern__intro">
                I build reliable web products, APIs and production systems — from the first screen to the backend that keeps everything running.
              </p>

              <div className="hero-modern__stack">
                <span>FOCUS</span>
                <p>React · TypeScript · Node.js · PostgreSQL · MongoDB · APIs · Integrations</p>
              </div>

              <div className="hero-modern__actions">
                <Link className="hero-modern__primary" to="/work">
                  View Work <ArrowUpRight size={18} />
                </Link>
                <a className="hero-modern__secondary" href="https://github.com/tushar0945" target="_blank" rel="noreferrer">
                  <Github size={19} /> GitHub
                </a>
              </div>
            </div>

            <div className="hero-modern__visual">
              <div className="hero-modern__shape" aria-hidden="true" />
              <div className="hero-modern__photo">
                <img src={profileImage} alt="Tushar Patil — Full-Stack Developer" />
              </div>

              <div className="hero-modern__card">
                <div className="hero-modern__card-icon"><Code2 size={21} /></div>
                <div>
                  <strong>Tushar Patil</strong>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-modern__bottom">
            <span>BASED IN INDIA</span>
            <span>REACT · NODE.JS · APIS · DATABASES</span>
            <span>SCROLL ↓</span>
          </div>
        </Container>
      </section>

      <section className="section dark">
        <Container>
          <div className="section-head">
            <SectionLabel index="01">Selected work</SectionLabel>
            <p>Real products and systems built across frontend, backend, integrations and production infrastructure.</p>
          </div>
          <div className="project-grid">{projects.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} project={p} featured={i === 0} />)}</div>
          <Link className="text-link" to="/work">View all work ↗</Link>
        </Container>
      </section>

      <section className="section cream">
        <Container>
          <div className="section-head">
            <SectionLabel index="02">Experience</SectionLabel>
            <p>Growing from shipping features to owning production systems.</p>
          </div>
          <div className="experience-list">{experience.map((x) => <article className="experience-row" key={x.period}><time>{x.period}</time><div><h3>{x.role}</h3><b>{x.company}</b><p>{x.detail}</p></div></article>)}</div>
        </Container>
      </section>

      <section className="proof">
        <Container>
          <SectionLabel index="03">Engineering proof</SectionLabel>
          <h2>Performance, permissions, integrations and production reliability.</h2>
          <div className="stats">
            <div><b>32ms → 15ms</b><span>Average API latency</span></div>
            <div><b>3–4×</b><span>Faster list APIs</span></div>
            <div><b>178+</b><span>Tests passing</span></div>
            <div><b>RBAC v2</b><span>Preset + override engine</span></div>
          </div>
        </Container>
      </section>

      <section className="section light">
        <Container className="two-col">
          <div><SectionLabel index="04">About</SectionLabel><h2>I like understanding the whole system.</h2></div>
          <div><p>I care about the part between the UI and the production incident: architecture, data flow, APIs, permissions, queues and the details that make software reliable.</p><Link className="text-link dark-text" to="/about">More about me ↗</Link></div>
        </Container>
      </section>

      <section className="contact-band">
        <Container><SectionLabel index="05">Contact</SectionLabel><h2>Let’s build something useful.</h2><Link to="/contact">Start a conversation ↗</Link></Container>
      </section>
    </>
  );
}
