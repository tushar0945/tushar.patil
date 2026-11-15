import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "../common/Container";

export function Footer() {
  return <footer className="footer"><Container className="footer__inner">
    <div><strong>TUSHAR PATIL</strong><p>Full-Stack Developer · Product Engineer</p></div>
    <div className="footer__links">
      <a href="https://github.com/tushar0945" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
      <a href="mailto:"><Mail size={18}/></a>
    </div>
    <small>© {new Date().getFullYear()} Tushar Patil</small>
  </Container></footer>;
}