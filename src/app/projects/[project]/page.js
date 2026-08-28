"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectPage({ params }) {
    const resolvedParams = typeof params.then === "function" ? params : Promise.resolve(params);
    const [projectParam, setProjectParam] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const progressRef = useRef(null);

    // Resolve params (Next 15/16 compatibility)
    useEffect(() => {
        resolvedParams.then(({ project }) => {
            setProjectParam(project);
            const found = projects.find((p) => p.project === project);
            setSelectedProject(found || null);
        });
    }, [resolvedParams]);

    // Scroll progress
    useEffect(() => {
        function onScroll() {
            if (!progressRef.current) return;
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressRef.current.style.width = `${progress}%`;
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!selectedProject) {
        return (
            <main className="min-h-screen bg-stone-50 px-6 text-stone-800 sm:px-10">
                <div ref={progressRef} className="project-scroll-progress" />
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
        <main className="relative min-h-screen bg-stone-50 px-6 text-stone-800 sm:px-10">
            {/* Scroll progress bar */}
            <div ref={progressRef} className="project-scroll-progress" />

            {/* Hero / header */}
            <section className="mx-auto max-w-4xl py-30">
                <Link
                    href="/projects"
                    className="project-animate text-sm font-medium text-stone-500 transition hover:text-rose-600"
                >
                    ← Back to projects
                </Link>

                <p className="project-animate project-animate-delay-1 mt-10 text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
                    {selectedProject.eyebrow}
                </p>

                <h1 className="project-animate project-animate-delay-2 mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
                    {selectedProject.title}
                </h1>

                <p className="project-animate project-animate-delay-3 mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                    {selectedProject.description}
                </p>

                {/* Tech stack */}
                <div className="project-animate project-animate-delay-4 mt-6 flex flex-wrap gap-2">
                    {selectedProject.stack.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {/* Status */}
                <p className="project-animate project-animate-delay-4 mt-6 text-sm text-stone-500">
                    {selectedProject.status}
                </p>

                {/* External link */}
                {selectedProject.link && (
                    <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-animate project-animate-delay-4 mt-8 inline-block text-sm font-semibold text-rose-600 transition hover:text-rose-700"
                    >
                        Visit project →
                    </a>
                )}
            </section>

            {/* Optional: Case study / details section */}
            <section className="mx-auto max-w-4xl border-t border-stone-200 py-20">
                <h2 className="project-animate project-animate-delay-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Overview
                </h2>

                <div className="project-animate project-animate-delay-1 mt-6 space-y-4 text-stone-700">
                    <p>
                        This section can describe the problem, your role, constraints, and
                        what you learned. You can expand this into multiple paragraphs as
                        needed.
                    </p>
                    <p>
                        You can add more sections below: design decisions, architecture
                        diagrams, screenshots, challenges, outcomes, and future ideas.
                    </p>
                </div>
            </section>

            {/* Optional: Gallery / screenshots */}
            <section className="mx-auto max-w-4xl border-t border-stone-200 py-20">
                <h2 className="project-animate text-3xl font-semibold tracking-tight sm:text-4xl">
                    Screenshots
                </h2>

                {selectedProject.images && selectedProject.images.length > 0 ? (
                    <div className="project-animate project-animate-delay-1 mt-6 grid gap-6 sm:grid-cols-2">
                        {selectedProject.images.map((src, i) => (
                            <figure key={src} className="overflow-hidden rounded-xl bg-stone-100">
                                <img
                                    src={src}
                                    alt={`${selectedProject.title} screenshot ${i + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </figure>
                        ))}
                    </div>
                ) : (
                    <p className="project-animate project-animate-delay-1 mt-6 text-stone-600">
                        Screenshots coming soon.
                    </p>
                )}
            </section>

            {/* Optional: Conclusion / next steps */}
            <section className="mx-auto max-w-4xl border-t border-stone-200 py-20">
                <h2 className="project-animate text-3xl font-semibold tracking-tight sm:text-4xl">
                    What’s next
                </h2>

                <div className="project-animate project-animate-delay-1 mt-6 space-y-4 text-stone-700">
                    <p>
                        Describe future improvements, features you’d add, or how this
                        project fits into your broader practice.
                    </p>
                </div>

                <div className="project-animate project-animate-delay-2 mt-8">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-md"
                    >
                        Back to all projects
                    </Link>
                </div>
            </section>
        </main>
    );
}