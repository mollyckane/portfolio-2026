"use client";

import { useEffect, useRef, useState } from "react";
import Lightbox from "@/components/effects/Lightbox";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFont,
    faSeedling,
    faLanguage,
    faVialCircleCheck,
    faArrowsRotate,
    faExpand
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/data/projects";
import { missyVoya } from "../../fonts";
import FiadhLeaves from "@/components/effects/FiadhLeaves";
import WobblyBorder from "@/components/effects/WobblyBorder";

const overviewDetails = {
    fiadh: [
        {
            label: "The problem",
            text: "Independent artists often manage contracts, invoices and accounts across scattered spreadsheets and note apps. Fiadh brings that into one bilingual workspace.",
            icon: faSeedling,
        },
        {
            label: "Why the name",
            text: "Fiadh is the Irish word for deer, and carries the sense of wild and free, how I think about being an artist, and a quiet symbol of Irish heritage.",
            icon: faLanguage,
        },
        {
            label: "The stack",
            text: "Node.js, Express and MySQL on the back end, with the front end as plain HTML, CSS and JavaScript. JWT and bcrypt handle authentication, Chart.js powers the dashboard.",
            icon: faFont,
        },
        {
            label: "Bilingual by design",
            text: "Translations run on i18n, with files I wrote myself rather than machine translation. As a native Irish speaker, that mattered given how few software tools treat Irish as a first-class language.",
            icon: faVialCircleCheck,
        },
        {
            label: "What I'd do differently",
            text: "I hadn't learned React yet when I built this, so the front end is vanilla JavaScript manipulating the DOM directly. Rebuilding it in React is the first thing on my list.",
            icon: faArrowsRotate,
        },
    ],
};

const overviewIntro = {
    fiadh: "Working on Fiadh taught me how much authentication and data modelling decisions ripple outward, and pushed me to think more like the people using it: an artist who wants to spend five minutes on admin, not fifty, in a language that actually feels like their own.",
};

const projectTheme = {
    fiadh: {
        heroFontClass: missyVoya.className,
        headingSize: "text-7xl",
        vars: {
            "--fiadh-bg": "#e5e9f4",
            "--fiadh-surface": "#fffdf8",
            "--fiadh-brand": "#213a31",
            "--fiadh-text-primary": "#355c4e",
            "--fiadh-text-secondary": "#507756",
            "--fiadh-text-paragraph": "#564f49",
            "--fiadh-text-muted": "#605d5d",
            "--fiadh-border": "#6c806f",
            "--fiadh-focus": "#ca604e",
        },
        textClass: "text-[color:var(--fiadh-text-primary)]",
        accentText: "text-[color:var(--fiadh-focus)]",
        headingClass: "text-[color:var(--fiadh-brand)]",
        paragraphClass: "text-[color:var(--fiadh-text-paragraph)]",
        mutedClass: "text-[color:var(--fiadh-text-secondary)]",
        borderClass: "border-[color:var(--fiadh-border)]",
    },
};

function useFontReveal() {
    const [showDecorative, setShowDecorative] = useState(true);
    return [showDecorative, setShowDecorative];
}

export default function ProjectPageClient({ params }) {
    const resolvedParams = typeof params.then === "function"
        ? params
        : Promise.resolve(params);

    const [projectKey, setProjectKey] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [bgVisible, setBgVisible] = useState(false);
    const progressRef = useRef(null);
    const [activeImageIndex, setActiveImageIndex] = useState(null);

    const [heroScroll, setHeroScroll] = useState(0);
    const heroRef = useRef(null);

    const theme = projectKey ? projectTheme[projectKey] : null;
    const [showDecorative, setShowDecorative] = useFontReveal();

    useEffect(() => {
        function onHeroScroll() {
            if (!heroRef.current) return;
            const zoneHeight = heroRef.current.offsetHeight;
            const progress = Math.min(window.scrollY / zoneHeight, 1);
            setHeroScroll(progress);
        }
        onHeroScroll();
        window.addEventListener("scroll", onHeroScroll, { passive: true });
        return () => window.removeEventListener("scroll", onHeroScroll);
    }, []);

    useEffect(() => {
        resolvedParams.then(({ project }) => {
            setProjectKey(project);
            const found = projects.find((p) => p.project === project);
            setSelectedProject(found || null);
            setLoaded(true);
        });
    }, [resolvedParams]);

    useEffect(() => {
        if (!loaded) return;
        const frame = window.requestAnimationFrame(() => setBgVisible(true));
        return () => window.cancelAnimationFrame(frame);
    }, [loaded]);

    useEffect(() => {
        function onScroll() {
            if (!progressRef.current) return;
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            progressRef.current.style.width = `${progress}%`;
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!loaded) {
        return (
            <main className="relative min-h-screen bg-stone-50 px-6 text-stone-800 sm:px-10">
                <div ref={progressRef} className="project-scroll-progress" />
                <section className="mx-auto max-w-4xl py-30">
                    <p className="text-sm text-stone-500">Loading project…</p>
                </section>
            </main>
        );
    }

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
        <main
            className={`relative min-h-screen ${theme ? theme.textClass : "bg-stone-50 text-stone-800"}`}
            style={theme?.vars}
        >
            {theme && (
                <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-[1400ms] ease-out ${bgVisible ? "opacity-100" : "opacity-0"}`}
                    style={{ backgroundColor: "var(--fiadh-bg)" }}
                />
            )}

            <div ref={progressRef} className="project-scroll-progress" />

            {selectedProject.project === "fiadh" && <FiadhLeaves />}

            {/*
              HERO ZONE: full width, no max-w and no px here.
              Sits directly in <main>, NOT inside the max-w-4xl section below.
              No py-30 either, the h-[70vh] itself defines the zone height.
            */}
            <div ref={heroRef} className="relative z-10 min-h-[70vh] overflow-visible sm:h-[70vh] sm:overflow-hidden">
                {selectedProject.images?.[0] && (
                    <div
                        className="absolute inset-0 -z-10"
                        style={{ transform: `translateY(${-heroScroll * 140}%)` }}
                    >
                        <img
                            src={selectedProject.images[0]}
                            alt=""
                            className="h-full w-full scale-110 object-cover object-center opacity-35 blur-sm"
                        />
                    </div>
                )}

                <div className="static sm:sticky top-0 z-10 flex min-h-[70vh] sm:h-[70vh] flex-col items-start justify-center px-6 pt-24 pb-12 sm:px-10 sm:pt-25 sm:pb-0">
                    <div className="mx-auto w-full max-w-4xl">
                        <Link
                            href="/projects"
                            className={`project-animate text-sm font-medium transition ${theme ? theme.mutedClass : "text-stone-500 hover:text-rose-600"}`}
                        >
                            ← Back to projects
                        </Link>

                        <p
                            className={`project-animate project-animate-delay-1 mt-6 text-xs font-medium uppercase tracking-[0.28em] ${theme ? theme.mutedClass : "text-stone-500"}`}
                        >
                            {selectedProject.eyebrow}
                        </p>

                        <div className="mt-3 flex flex-wrap items-end gap-4">
                            <h1
                                className={`project-animate project-animate-delay-2 tracking-tight transition-all duration-700 ease-out ${theme
                                    ? `${showDecorative ? `${theme.heroFontClass} ${theme.headingSize}` : "text-6xl font-semibold"} ${theme.headingClass}`
                                    : "text-6xl font-semibold"
                                    }`}
                            >
                                {selectedProject.title}
                            </h1>

                            {theme && (
                                <button
                                    type="button"
                                    onClick={() => setShowDecorative(!showDecorative)}
                                    aria-label={showDecorative ? "Switch to legible font" : "Switch to decorative font"}
                                    className={`project-animate project-animate-delay-2 mb-1 inline-flex cursor-pointer items-center gap-2 rounded-full border bg-[color:var(--fiadh-surface)] px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5 hover:shadow-sm ${theme.borderClass} ${theme.accentText}`}
                                >
                                    <FontAwesomeIcon icon={faFont} aria-hidden="true" />
                                    Aa
                                </button>
                            )}
                        </div>

                        <p
                            className={`project-animate project-animate-delay-3 mt-6 max-w-2xl text-lg leading-8 ${theme ? theme.paragraphClass : "text-stone-600"}`}
                        >
                            {selectedProject.description}
                        </p>

                        {/* Stack pills, status and link now live here, inside the sticky wrapper */}
                        <div className="project-animate project-animate-delay-4 mt-6 flex flex-wrap gap-2">
                            {selectedProject.stack.map((technology) => (
                                <span
                                    key={technology}
                                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${theme
                                        ? `bg-[color:var(--fiadh-surface)] ${theme.borderClass} ${theme.mutedClass}`
                                        : "border-stone-200 bg-stone-50 text-stone-600"
                                        }`}
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        <p
                            className={`project-animate project-animate-delay-4 mt-6 text-sm ${theme ? theme.mutedClass : "text-stone-500"}`}
                        >
                            {selectedProject.status}
                        </p>

                        {selectedProject.link && (
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`project-animate project-animate-delay-4 mt-8 inline-block text-sm font-semibold transition hover:translate-x-1 ${theme ? theme.accentText : "text-rose-600 hover:text-rose-700"}`}
                            >
                                Visit project →
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <section
                className={`relative z-10 mx-auto max-w-4xl border-t px-6 py-20 sm:px-10 ${theme ? theme.borderClass : "border-stone-200"}`}
            >
                <h2
                    className={`project-animate text-3xl font-semibold tracking-tight sm:text-4xl ${theme ? theme.headingClass : ""}`}
                >
                    Overview
                </h2>

                {overviewIntro[selectedProject.project] && (
                    <p
                        className={`project-animate project-animate-delay-1 mt-6 max-w-2xl text-lg leading-8 ${theme ? theme.paragraphClass : "text-stone-700"}`}
                    >
                        {overviewIntro[selectedProject.project]}
                    </p>
                )}

                {overviewDetails[selectedProject.project] ? (
                    <div
                        className={`project-animate project-animate-delay-2 mt-10 overflow-hidden rounded-3xl border shadow-sm ${theme ? `${theme.borderClass} bg-[color:var(--fiadh-surface)]/70` : "border-stone-200/80 bg-white/70"}`}
                    >
                        {overviewDetails[selectedProject.project].map((item, index) => (
                            <div key={item.label}>
                                <div className="flex gap-4 px-5 py-5 sm:px-6">
                                    <div
                                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${theme
                                            ? "bg-[color:var(--fiadh-surface)] text-[color:var(--fiadh-text-secondary)]"
                                            : "bg-stone-100 text-stone-600"
                                            }`}
                                    >
                                        <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
                                    </div>

                                    <div>
                                        <h3 className={`text-sm font-semibold ${theme ? theme.mutedClass : "text-stone-800"}`}>
                                            {item.label}
                                        </h3>
                                        <p className={`mt-1 max-w-2xl text-sm leading-6 ${theme ? theme.paragraphClass : "text-stone-500"}`}>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>

                                {index < overviewDetails[selectedProject.project].length - 1 && (
                                    <div className={`mx-5 border-t sm:mx-6 ${theme ? theme.borderClass : "border-stone-200/80"}`} />
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={`project-animate project-animate-delay-1 mt-6 ${theme ? theme.paragraphClass : "text-stone-600"}`}>
                        Overview coming soon.
                    </p>
                )}
            </section>

            <section
                className={`relative z-10 mx-auto max-w-4xl border-t px-6 py-20 sm:px-10 ${theme ? theme.borderClass : "border-stone-200"}`}
            >
                <h2 className={`project-animate text-3xl font-semibold tracking-tight sm:text-4xl ${theme ? theme.headingClass : ""}`}>
                    Screenshots
                </h2>

                {selectedProject.images && selectedProject.images.filter(Boolean).length > 0 ? (
                    <div className="project-animate project-animate-delay-1 mt-6 grid gap-6 sm:grid-cols-2">
                        {selectedProject.images.filter(Boolean).map((src, i) => (
                            <button
                                key={src}
                                type="button"
                                onClick={() => setActiveImageIndex(i)}
                                className="group relative overflow-hidden rounded-xl bg-stone-100 p-1.5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                            >
                                <figure className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={src}
                                        alt={`${selectedProject.title} screenshot ${i + 1}`}
                                        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                                    />
                                </figure>

                                <WobblyBorder className={theme ? theme.mutedClass : "text-stone-400"} />

                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                                    <span className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-stone-800 shadow-md">
                                        <FontAwesomeIcon icon={faExpand} />
                                    </span>
                                </div>

                                <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
                                    View full size
                                </span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <p className={`project-animate project-animate-delay-1 mt-6 ${theme ? theme.paragraphClass : "text-stone-600"}`}>
                        Screenshots coming soon.
                    </p>
                )}
            </section>

            {selectedProject.images && activeImageIndex !== null && (
                <Lightbox
                    images={selectedProject.images.filter(Boolean).map((src, i) => ({
                        src,
                        alt: `${selectedProject.title} screenshot ${i + 1}`,
                    }))}
                    activeIndex={activeImageIndex}
                    onClose={() => setActiveImageIndex(null)}
                    onNavigate={setActiveImageIndex}
                />
            )}

            <section
                className={`relative z-10 mx-auto max-w-4xl border-t px-6 py-20 sm:px-10 ${theme ? theme.borderClass : "border-stone-200"}`}
            >
                <h2 className={`project-animate text-3xl font-semibold tracking-tight sm:text-4xl ${theme ? theme.headingClass : ""}`}>
                    What&apos;s next
                </h2>

                <div className={`project-animate project-animate-delay-1 mt-6 space-y-4 ${theme ? theme.paragraphClass : "text-stone-700"}`}>
                    <p>
                        Describe future improvements, features you&apos;d add,
                        or how this project fits into your broader practice.
                    </p>
                </div>

                <div className="project-animate project-animate-delay-2 mt-8">
                    <Link
                        href="/projects"
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md ${theme ? "bg-[color:var(--fiadh-brand)]" : "bg-stone-800 hover:bg-stone-700"}`}
                    >
                        Back to all projects
                    </Link>
                </div>
            </section>
        </main>
    );
}
