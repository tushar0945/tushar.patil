import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, ChevronRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./styles.css";

const projects = [
  { title: "Cravita-HUB", type: "Enterprise business platform", stack: "CRM · HRMS · WhatsApp · RBAC", tone: "featured" },
  { title: "QuickBid", type: "Real-time auction platform", stack: "MERN · WebSockets · Redis", tone: "dark" },
  { title: "BreezeBnB", type: "Property booking platform", stack: "MERN · Maps · Cloudinary", tone: "light" },
  { title: "FormaFit", type: "Fitness management product", stack: "Next.js · Prisma · PostgreSQL", tone: "light" },
];

const nav = ["Work", "Experience", "About", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(progress, [0, 0.2], [0, -90]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="nav">
        <button className="brand" onClick={() => go("home")} aria-label="Go home">
          <span className="brand-mark">TP<span>/</span></span>
          <span>TUSHAR PATIL</span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <button key={item} onClick={() => go(item.toLowerCase())}>{item}</button>
          ))}
        </nav>

        <button className="talk-btn" onClick={() => go("contact")}>Let's Talk <ArrowUpRight size={16} /></button>
        <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {nav.map((item) => (
            <button key={item} onClick={() => go(item.toLowerCase())}>{item}<ArrowUpRight /></button>
          ))}
        </motion.div>
      )}

      <main>
        <section id="home" className="hero" ref={heroRef}>
          <div className="grid-overlay" />
          <div className="hero-orb" />
          <motion.div className="hero-copy" style={{ y: heroY }}>
            <div className="eyebrow"><span /> SOFTWARE ENGINEER&nbsp;&nbsp;/&nbsp;&nbsp;PRODUCT BUILDER</div>
            <h1>TUSHAR<br /><em>PATIL</em></h1>
            <div className="hero-role">FULL-STACK DEVELOPER</div>
            <p>I build production software<br />that actually ships.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("work")}>View Work <ArrowUpRight /></button>
              <a className="secondary" href="https://github.com/tushar0945" target="_blank" rel="noreferrer"><Github /> GitHub</a>
            </div>
            <div className="stack-strip">
              <span>React</span><span>Node.js</span><span>TypeScript</span><span>PostgreSQL</span><span>Docker</span>
            </div>
          </motion.div>

          <motion.div className="hero-portrait" style={{ y: heroY }}>
            <div className="portrait-placeholder">
              <div className="portrait-glow" />
              <div className="portrait-head" />
              <div className="portrait-body" />
              <div className="portrait-label">YOUR PHOTO<br /><small>replace /public/tushar.webp</small></div>
            </div>
          </motion.div>

          <motion.div className="product-preview" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .25, duration: .7 }}>
            <div className="product-window">
              <div className="window-top"><strong>▮ Cravita-HUB</strong><span>⌄</span></div>
              <div className="window-body">
                <aside><b>▦</b><span>Dashboard</span><span>CRM</span><span>HRMS</span><span>Payroll</span><span>Inventory</span><span>Projects</span></aside>
                <div className="dashboard">
                  <h3>Good Morning, Team 👋</h3>
                  <div className="metrics"><b>25,480<small>Total Leads</small></b><b>1,24,560<small>WhatsApp Sent</small></b><b>186<small>Active Employees</small></b></div>
                  <div className="chart"><div className="line-chart" /><span>Lead Performance</span></div>
                </div>
              </div>
            </div>
            <div className="product-caption"><span>●</span> Cravita-HUB <i>/ Enterprise Platform</i><ArrowUpRight /></div>
          </motion.div>

          <div className="year">©2026</div>
          <div className="cursor-dot" />
        </section>

        <section id="work" className="work section-light">
          <div className="section-head">
            <span>01 / SELECTED WORK</span>
            <h2>Real Products.<br /><em>Real Impact.</em></h2>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <motion.article key={p.title} className={"project-card " + p.tone} whileHover={{ y: -8 }} transition={{ duration: .2 }}>
                <div className="project-ui">
                  <div className="mini-top"><b>{p.title}</b><span>↗</span></div>
                  <div className="mini-content">
                    <div className="mini-sidebar" />
                    <div className="mini-main"><i /><i /><i /><div /></div>
                  </div>
                </div>
                <div className="project-info">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.title} <ArrowUpRight /></h3>
                  <p>{p.type}</p>
                  <small>{p.stack}</small>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience section-dark">
          <div className="experience-title"><span>02 / EXPERIENCE</span><h2>From building<br />features to<br /><em>owning systems.</em></h2></div>
          <div className="timeline">
            <div className="timeline-item"><time>APR 2026 — NOW</time><div><h3>Full-Stack Developer</h3><b>Cravita Technologies India Pvt Ltd</b><p>Building and maintaining Cravita-HUB across CRM, HRMS, WhatsApp, billing and platform infrastructure. Working across React, Node.js, Express, PostgreSQL, MongoDB, Redis/BullMQ, Meta APIs and RBAC.</p></div></div>
            <div className="timeline-item"><time>JUN 2025 — MAR 2026</time><div><h3>Software Development Intern</h3><b>Cravita Technologies India Pvt Ltd</b><p>Worked on production web applications, full-stack features, debugging, APIs and real product delivery.</p></div></div>
          </div>
        </section>

        <section className="proof section-light">
          <div className="proof-head"><span>03 / ENGINEERING PROOF</span><p>Measured, built and optimized for real-world scale.</p></div>
          <div className="stats">
            <div><strong>15ms</strong><span>Avg API latency<br /><small>↓ 53% from 32ms</small></span></div>
            <div><strong>49ms</strong><span>p95 latency<br /><small>↓ 56% from 111ms</small></span></div>
            <div><strong>RBAC v2</strong><span>Permission presets,<br /><small>overrides & multi-tenant</small></span></div>
            <div><strong>WhatsApp +</strong><span>Meta integrations<br /><small>templates, webhooks & credits</small></span></div>
          </div>
        </section>

        <section id="about" className="about section-dark">
          <div className="about-photo"><div className="portrait-placeholder small"><div className="portrait-glow" /><div className="portrait-head" /><div className="portrait-body" /></div></div>
          <div className="about-copy"><span>04 / ABOUT</span><h2>A builder who cares about the <em>whole system.</em></h2></div>
          <div className="about-text"><p>I’m Tushar Patil, a Full-Stack Developer who likes to take ideas from 0 → production. I focus on scalable, maintainable and business-impacting systems, not just features.</p><div><span>📍 Pune, India</span><span>☕ Coffee + Code + Product</span></div></div>
        </section>

        <section id="contact" className="contact section-light">
          <div><span>05 / CONTACT</span><h2>LET’S BUILD<br />SOMETHING<br /><em>WORTH SHIPPING.</em></h2></div>
          <div className="contact-right"><p>Open to full-stack engineering opportunities, product work and technology-driven collaborations.</p><a className="primary" href="mailto:tusharpatil.dev@gmail.com">Let's Talk <ArrowUpRight /></a><div className="socials"><a href="https://github.com/tushar0945" target="_blank" rel="noreferrer"><Github /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin /></a><a href="mailto:tusharpatil.dev@gmail.com"><Mail /></a></div></div>
        </section>
      </main>
      <footer>FULL-STACK DEVELOPER / TUSHAR PATIL <span>2026</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);