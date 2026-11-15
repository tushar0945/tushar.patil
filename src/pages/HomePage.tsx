import { Link } from "react-router";
import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import { Container } from "../components/common/Container";
import { SectionLabel } from "../components/common/SectionLabel";
import { ProjectCard } from "../components/work/ProjectCard";
import { projects } from "../data/projects";
import { experience } from "../data/experience";

const profileImage = "https://github.com/tushar0945.png?size=1000";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orange-panel" aria-hidden="true" />
        <Container className="hero-inner">
          <div className="hero-topline">
            <span>TP / 2026</span>
            <span>SOFTWARE ENGINEER <i>/</i> PRODUCT BUILDER</span>
            <span>INDIA ↗</span>
          </div>

          <div className="hero-stage">
            <div className="hero-copy">
              <p className="hero-intro">I build production software that actually ships.</p>
              <h1><span>TUSHAR</span><em>PATIL</em></h1>

              <div className="hero-description">
                <span>FULL-STACK DEVELOPER</span>
                <p>React · Node.js · APIs · Databases · Integrations · Production Systems</p>
              </div>

              <div className="hero-actions">
                <Link className="hero-cta" to="/work">Explore my work <ArrowUpRight size={18} /></Link>
                <a className="hero-github" href="https://github.com/tushar0945" target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-shadow" aria-hidden="true" />
              <div className="portrait-frame">
                <img src={profileImage} alt="Tushar Patil" />
                <div className="portrait-overlay" />
                <div className="portrait-meta"><span>01</span><strong>TUSHAR<br />PATIL</strong></div>
              </div>

              <div className="hero-badge">
                <span>BUILDING</span>
                <strong>REAL<br />SYSTEMS</strong>
                <small>FROM 0 → PRODUCTION</small>
              </div>

              <div className="hero-product-card">
                <span>FEATURED / 01</span>
                <strong>CRAVITA-<br />HUB</strong>
                <small>CRM · HRMS · WHATSAPP</small>
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>FULL-STACK / PRODUCT ENGINEERING</span>
            <span>SELECTED WORK ↓</span>
          </div>
        </Container>
      </section>

      <section className="section dark">
        <Container>
          <div className="section-head"><SectionLabel index="01">Selected work</SectionLabel><p>Real products, real systems, real engineering constraints.</p></div>
          <div className="project-grid">{projects.slice(0, 3).map((p, i) => <ProjectCard key={p.slug} project={p} featured={i === 0} />)}</div>
          <Link className="text-link" to="/work">View all work ↗</Link>
        </Container>
      </section>

      <section className="section cream">
        <Container>
          <div className="section-head"><SectionLabel index="02">Experience</SectionLabel><p>From shipping features to owning systems.</p></div>
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
        <Container className="two-col"><div><SectionLabel index="04">About</SectionLabel><h2>I like understanding the whole system.</h2></div><div><p>I care about the part between the UI and the production incident: architecture, data flow, APIs, permissions, queues and the details that make software reliable.</p><Link className="text-link dark-text" to="/about">More about me ↗</Link></div></Container>
      </section>

      <section className="contact-band"><Container><SectionLabel index="05">Contact</SectionLabel><h2>Let’s build something worth showing.</h2><Link to="/contact">Start a conversation ↗</Link></Container></section>
    </>
  );
}
