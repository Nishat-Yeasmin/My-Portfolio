import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetails from "./ProjectDetails";

export default async function Page({ params }) {
  const { id } = await params;

  const project = projects.find(
    (item) => item.id.toString() === id
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}