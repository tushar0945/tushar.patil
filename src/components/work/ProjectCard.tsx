import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { Project } from "../../types";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <Link to={`/work/${project.slug}`} className={`project-card ${featured ? "project-card--featured" : ""}`}>
    <div className="project-card__visual"><span>{project.number}</span><div className="project-card__mock"><b>{project.short}</b><i>{project.category}</i></div></div>
    <div className="project-card__body"><div><span className="eyebrow-small">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p></div><ArrowUpRight /></div>
  </Link>;
}