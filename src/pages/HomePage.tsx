import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../components/common/Container";
import { SectionLabel } from "../components/common/SectionLabel";
import { ProjectCard } from "../components/work/ProjectCard";
import { projects } from "../data/projects";
import { experience } from "../data/experience";

const profileImage = "https://github.com/tushar0945.png?size=900";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" />
        <Container className="hero-inner">
          <div className="hero-kicker">SOFTWARE ENGINEER <span>/</span> PRODUCT BUILDER</div>

          <div className="hero-main">
            <div className="hero-copy">
              <p className="hero-intro">I build production software that actually ships.</p>
              <h1>TUSHAR<br /><em>PATIL</em></h1>
              <div className="hero-meta">
                <b>FULL-STACK DEVELOPER</b>
                <p>React · Node.js · APIs · Databases · Integrations · Production Systems</p>
                <Link to="/work">Explore my work <ArrowUpRight size={18} /></Link>
              </div>
            </div>

            <div className="hero-portrait-wrap">
              <div className="hero-portrait">
                <img src={profileImage} alt="Tushar Patil" />
                <span className="hero-portrait-tag">TP / 26</span>
              </div>
              <div className="hero-floating-card">
                <span>BUILDING</span>
                <strong>REAL<br />SYSTEMS</strong>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>BASED IN INDIA</span>
            <span>AVAILABLE FOR SELECTED WORK</span>
          </div>
        </Container>
      </section>

      <section className="section dark">
        <Container>
          <div className="section-head">
            <SectionLabel index="01" children="Selected work" />
            <p>Real products, real systems, real engineering constraints.</p>
          </div>
          <div className="project-grid">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.slug} project={p} featured={i === 0} />
            ))}
          </div>
          <Link className="text-link" to="/work">View all work ↗</Link>
        </Container>
      </section>

      <section className="section cream">
        <Container>
          <div className="section-head">
            <SectionLabel index="02" children="Experience" />
            <p>From shipping features to owning systems.</p>
          </div>
          <div className="experience-list">
            {experience.map((x) => (
              <article className="experience-row" key={x.period}>
                <time>{x.period}</time>
                <div>
                  <h3>{x.role}</h3>
                  <b>{x.company}</b>
                  <p>{x.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="proof">
        <Container>
          <SectionLabel index="03" children="Engineering proof" />
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
          <div><SectionLabel index="04" children="About" /><h2>I like understanding the whole system.</h2></div>
          <div>
            <p>I care about the part between the UI and the production incident: architecture, data flow, APIs, permissions, queues and the details that make software reliable.</p>
            <Link className="text-link dark-text" to="/about">More about me ↗</Link>
          </div>
        </Container>
      </section>

      <section className="contact-band">
        <Container>
          <SectionLabel index="05" children="Contact" />
          <h2>Let’s build something worth showing.</h2>
          <Link to="/contact">Start a conversation ↗</Link>
        </Container>
      </section>
    </>
  );
}
