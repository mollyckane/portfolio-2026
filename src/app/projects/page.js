import "@/styles/projects.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faArrowUpRightFromSquare,
    faCode,
    faDatabase,
    faLayerGroup,
    faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/data/projects";

export const metadata = {
    title: "Projects — Molly Cameron Kane",
    description:
        "Selected full-stack, backend and interactive web projects by Molly Cameron Kane.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-stone-50 px-6 text-stone-800 sm:px-10">
            <section className="mx-auto max-w-5xl py-30">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
                    Selected work
                </p>

                <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                    Projects built to solve problems—and make the web feel better to use.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
                    A selection of full-stack applications, distributed systems work and
                    interactive experiments. Each project taught me something different
                    about designing, building, debugging and connecting a system’s moving
                    parts.
                </p>

                <div className="mt-12 space-y-6">
                    {projects.map((project) => (
                        <article
                            key={project.project}
                            className="group overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/70 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                                {/* Replace this preview block with a screenshot later */}
                                <div
                                    className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${project.accent} p-6 sm:p-8`}
                                >
                                    <div className="absolute inset-0 opacity-40">
                                        <div className="absolute -left-12 top-8 h-40 w-40 rounded-full bg-white/80 blur-2xl" />
                                        <div className="absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-white/70 blur-3xl" />
                                    </div>

                                    <div className="relative flex h-full min-h-52 flex-col justify-between">
                                        <div className="flex items-start justify-between">
                                            <span className="text-sm font-medium tracking-[0.2em] text-stone-500">
                                                {project.number}
                                            </span>

                                            <span
                                                className={`grid h-11 w-11 place-items-center rounded-2xl ${project.iconClass}`}
                                            >
                                                <FontAwesomeIcon icon={project.icon} aria-hidden="true" />
                                            </span>
                                        </div>

                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
                                                {project.status}
                                            </p>
                                            <p className="mt-2 max-w-xs text-xl font-semibold tracking-tight text-stone-700">
                                                {project.eyebrow}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between p-6 sm:p-8">
                                    <div>
                                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                            {project.title}
                                        </h2>

                                        <p className="mt-4 max-w-xl text-sm leading-6 text-stone-600 sm:text-base">
                                            {project.description}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {project.stack.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/projects/${project.project}`}
                                        className="group/link mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-stone-700 transition hover:text-rose-600"
                                    >
                                        Explore the project
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="transition group-hover/link:translate-x-1"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-stone-200/80 bg-white/60 px-5 py-5 backdrop-blur sm:px-6">
                    <div>
                        <p className="text-sm font-semibold text-stone-800">
                            More work is always in progress.
                        </p>
                        <p className="mt-1 text-sm text-stone-500">
                            I’m currently exploring creative code, accessible mobile-first
                            design and more experimental web interactions.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-md"
                    >
                        Get in touch
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            className="text-xs"
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}