import ProjectPageClient from "./ProjectPageClient";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { project } = await params;
    const found = projects.find((p) => p.project === project);

    if (!found) {
        return {
            title: "Project not found — Molly Cameron Kane",
        };
    }

    return {
        title: `${found.title} — Molly Cameron Kane`,
        description: found.description,
    };
}

export default function ProjectPage({ params }) {
    return <ProjectPageClient params={params} />;
}