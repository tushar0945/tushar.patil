import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export function ArrowLink({ to, children, variant = "light" }: { to: string; children: React.ReactNode; variant?: "light" | "dark" }) {
  return <Link className={`arrow-link arrow-link--${variant}`} to={to}>{children}<ArrowUpRight size={17} /></Link>;
}