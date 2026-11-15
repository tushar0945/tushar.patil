import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const links = [
  ["/work", "Work"],
  ["/experience", "Experience"],
  ["/about", "About"],
  ["/contact", "Contact"]
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>TP<span>/</span></Link>
      <nav className="navbar__links">
        {links.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
      </nav>
      <Link className="navbar__cta" to="/contact">Let's talk <span>↗</span></Link>
      <button className="navbar__menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      {open && <nav className="navbar__mobile">{links.map(([to,label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}<Link to="/contact" onClick={() => setOpen(false)}>Let's talk ↗</Link></nav>}
    </header>
  );
}