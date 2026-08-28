import Link from "next/link";
import { projects } from "@/data/projects";

export default async function ProjectPage({ params }) {
    const { project } = await params;
    const selectedProject = projects.find((p) => p.project === project);

    if (!selectedProject) {
        return (
            <main className="min-h-screen bg-stone-50 px-6 text-stone-800 sm:px-10">
                <section className="mx-auto max-w-4xl py-30">
                    <h1 className="text-4xl font-semibold tracking-tight">
                        Project not found
                    </h1>

                    <p className="mt-4 text-stone-600">
                        This project does not exist yet.
                    </p>

                    <Link
                        href="/projects"
                        className="mt-8 inline-block text-sm font-medium text-rose-600 transition hover:text-rose-700"
                    >
                        ← Back to projects
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-stone-50 px-6 text-stone-800 sm:px-10">
            <section className="mx-auto max-w-4xl py-30">
                <Link
                    href="/projects"
                    className="text-sm font-medium text-stone-500 transition hover:text-rose-600"
                >
                    ← Back to projects
                </Link>

                <p className="mt-10 text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
                    {selectedProject.eyebrow}
                </p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
                    {selectedProject.title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                    {selectedProject.description}
                </p>

                {/* Tech stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {selectedProject.stack.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
                {/* Optional: link */}
                {selectedProject.link && (
                    <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-block text-sm font-semibold text-rose-600 transition hover:text-rose-700 hover:translate-x-0.5"
                    >
                        Visit project →
                    </a>
                )}

                {/* Status */}
                <p className="mt-6 text-sm text-stone-500">
                    {selectedProject.status}
                </p>

                {/* Optional: more content later: screenshots, case study, etc. */}
            </section>
        </main>
    );
}