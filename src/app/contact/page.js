"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faCheck,
    faCopy,
    faDownload,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const EMAIL = "mollyckanework@gmail.com";

const socialLinks = [
    {
        label: "LinkedIn",
        detail: "linkedin.com/in/mollyckane",
        href: "https://www.linkedin.com/in/mollyckane",
        icon: faLinkedin,
        hoverClass: "hover:bg-sky-50/80 hover:text-sky-700",
    },
    {
        label: "GitHub",
        detail: "github.com/mollyckane",
        href: "https://github.com/mollyckane",
        icon: faGithub,
        hoverClass: "hover:bg-violet-50/80 hover:text-violet-700",
    },
    {
        label: "Instagram",
        detail: "@mollykane.art",
        href: "https://www.instagram.com/mollykane.art/",
        icon: faInstagram,
        hoverClass: "hover:bg-rose-50/80 hover:text-rose-600",
    },
];

export default function ContactPage() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 2200);
        } catch (error) {
            console.error("Could not copy email:", error);
        }
    };

    return (
        <main className="min-h-screen bg-stone-50 px-6 text-stone-800 sm:px-10">
            <section className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center py-30 z-10">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
                    Contact
                </p>

                <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Let’s make something thoughtful.
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
                    I’m always happy to hear about creative ideas, collaborations,
                    opportunities, or simply talk about building playful things for the
                    web.
                </p>

                <div className="mt-8 overflow-hidden rounded-3xl border border-stone-200/80 bg-white/70 shadow-sm backdrop-blur">
                    {/* Copy email row */}
                    <button
                        type="button"
                        onClick={copyEmail}
                        aria-label={`Copy ${EMAIL} to clipboard`}
                        className="group flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-rose-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rose-300 sm:px-6"
                    >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-rose-50 text-rose-500 transition group-hover:bg-rose-100">
                            <FontAwesomeIcon icon={copied ? faCheck : faEnvelope} />
                        </span>

                        <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-stone-800">
                                {copied ? "Email copied" : "Email"}
                            </span>
                            <span className="block truncate text-sm text-stone-500">
                                {EMAIL}
                            </span>
                        </span>

                        <span className="flex shrink-0 items-center gap-2 text-xs font-medium text-stone-400 transition group-hover:text-rose-500">
                            <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                            <span className="hidden sm:inline">
                                {copied ? "Copied!" : "Copy"}
                            </span>
                        </span>
                    </button>

                    <div className="mx-5 border-t border-stone-200/80 sm:mx-6" />

                    {/* Social link rows */}
                    {socialLinks.map((link, index) => (
                        <div key={link.label}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Visit Molly Cameron Kane's ${link.label}`}
                                className={`group flex items-center gap-4 px-5 py-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-stone-400 sm:px-6 ${link.hoverClass}`}
                            >
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-stone-100 text-stone-600 transition group-hover:bg-white">
                                    <FontAwesomeIcon icon={link.icon} />
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-sm font-semibold text-stone-800">
                                        {link.label}
                                    </span>
                                    <span className="block truncate text-sm text-stone-500">
                                        {link.detail}
                                    </span>
                                </span>

                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                    className="shrink-0 text-sm text-stone-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-stone-700"
                                    aria-hidden="true"
                                />
                            </a>

                            {index < socialLinks.length - 1 && (
                                <div className="mx-5 border-t border-stone-200/80 sm:mx-6" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-stone-800 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
                    >
                        <FontAwesomeIcon
                            icon={faDownload}
                            className="transition group-hover:translate-y-0.5"
                            aria-hidden="true"
                        />
                        Download résumé
                    </a>

                    <p className="text-sm text-stone-500">
                        Based in Offaly, Ireland · Open to thoughtful collaborations.
                    </p>
                </div>
            </section>
        </main>
    );
}