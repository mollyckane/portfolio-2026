"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faCode,
    faBug,
    faWandMagicSparkles,
    faLanguage,
} from "@fortawesome/free-solid-svg-icons";

const highlight =
    "text-pink-500 underline decoration-dashed font-bold";

const copy = {
    en: {
        eyebrow: "Junior software developer · visual artist",
        heading: "I’m a developer with an artist’s eye for detail.",
        cta: "Let’s work together",
        toggleLabel: "Léigh as Gaeilge",
        toggleAria: "Read this page in Irish",
        basedInLabel: "Based in",
    },
    ga: {
        eyebrow: "Forbróir bogearraí sóisearach · ealaíontóir",
        heading: "Is forbróir mé le súil ealaíontóra do na sonraí.",
        cta: "Ar mhaith leat oibriú liom?",
        toggleLabel: "Read in English",
        toggleAria: "Read this page in English",
        basedInLabel: "Lonnaithe i",
    },
};

const details = [
    {
        label: { en: "How I work", ga: "Conas a oibrím" },
        text: {
            en: "I enjoy the detective work of development: tracing bugs, asking why they happen and staying with a problem until there is a solution that makes sense.",
            ga: "Is maith liom obair bhrathadóireachta na forbartha: fabhtanna a rianú, a fhiafraí cén fáth a dtarlaíonn siad agus fanacht le fadhb go dtí go bhfuil réiteach ann a chiallaíonn rud.",
        },
        icon: faBug,
        accent: "bg-rose-50 text-rose-500",
    },
    {
        label: { en: "What I build with", ga: "Cad leis a dhéanaim rudaí" },
        text: {
            en: "JavaScript, Node.js, Java, MySQL, gRPC, HTML and CSS—plus Linux as the highly customisable environment where I like to learn and make things.",
            ga: "JavaScript, Node.js, Java, MySQL, gRPC, HTML agus CSS—chomh maith le Linux mar an timpeallacht atá go mór inoiriúnaithe ina dtaitníonn liom foghlaim agus rudaí a chruthú.",
        },
        icon: faCode,
        accent: "bg-sky-50 text-sky-600",
    },
    {
        label: { en: "What I’m exploring", ga: "Cad atá mé a iniúchadh" },
        text: {
            en: "Full-stack applications, creative code, mobile-first accessibility and eventually bringing my Blender experience into experimental 3D and WebGL work.",
            ga: "Feidhmchláir iomlán stack, cód cruthaitheach, inrochtaineacht dírithe ar fhóin agus, sa deireadh, mo thaithí Blender a thabhairt isteach in obair thurgnamhach 3D agus WebGL.",
        },
        icon: faWandMagicSparkles,
        accent: "bg-violet-50 text-violet-600",
    },
];

export default function AboutContent() {
    const [lang, setLang] = useState("en");
    const t = copy[lang];

    return (
        <main className="min-h-screen bg-stone-50 px-6 text-stone-800 sm:px-10">
            <section className="mx-auto max-w-5xl py-30">
                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <div>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
                                {t.eyebrow}
                            </p>

                            <button
                                type="button"
                                onClick={() => setLang(lang === "en" ? "ga" : "en")}
                                aria-label={t.toggleAria}
                                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-600 transition hover:-translate-y-0.5 hover:border-pink-300 hover:text-pink-600 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
                            >
                                <FontAwesomeIcon icon={faLanguage} aria-hidden="true" />
                                {t.toggleLabel}
                            </button>
                        </div>

                        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
                            {t.heading}
                        </h1>

                        <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-stone-600 sm:text-md">
                            {lang === "en" ? (
                                <p>
                                    I’m Molly Kane, a junior{" "}
                                    <span className={highlight}>software developer</span> and{" "}
                                    <span className={highlight}>visual artist</span>. I like
                                    building things from the inside out: following a bug until
                                    it makes sense, connecting the moving parts of an
                                    application and making the finished experience feel
                                    considered on the surface.
                                </p>
                            ) : (
                                <p>
                                    Is mise Molly Ní Chatháin, {" "}
                                    <span className={highlight}>forbróir bogearraí</span> sóisearach agus{" "}
                                    <span className={highlight}>ealaíontóir amhairc</span>. Is
                                    maith liom rudaí a thógáil ón taobh istigh amach: fadhb a
                                    leanúint go dtí go dtuigim í, na codanna gluaiste
                                    d’fheidhmchlár a ceangal agus go mbraitheann an taithí chríochnaithe iomlán
                                    ar an dromchla.
                                </p>
                            )}

                            <p>
                                {lang === "en"
                                    ? "I’m most at home where problem-solving and design overlap. I enjoy full-stack development with experience with JavaScript, Node.js, Express, SQL databases, authentication and APIs—but I also care about how a project looks, moves and behaves in someone’s hands. My background in fine art influences how I think about composition, colour, interaction and the small visual choices that make a site feel intentional."
                                    : "Is fearr liom nuair a thrasnaíonn fadhbréiteach agus dearadh. Bainim taitneamh as forbairt 'stack' iomlán le taithí i JavaScript, Node.js, Express, bunachair sonraí SQL, fíordheimhniú agus APIs—ach is cuma liom freisin faoin ngluaiseacht agus faoin iompar a bhíonn ag tionscadal i lámha duine. Cuireann mo chúlra sna mínealaíona bunús le mo chuid smaointeoireachta faoi chomhdhéanamh, dath, idirghníomhaíocht agus na roghanna amhairc beaga a dhéanann suíomh a bhraitheann bheartaithe."}
                            </p>

                            <p>
                                {lang === "en"
                                    ? "I’m curious, committed and persistent. I like learning how systems work and I’m increasingly exploring creative code, 3D/WebGL and mobile-first, accessible web experiences."
                                    : "Táim fiosrach, tiomanta agus buanseasmhach. Is maith liom ag foghlaim faoin chaoi a n-oibríonn córais agus táim ag dul i ngleic níos mó le cód cruthaitheach, 3D/WebGL agus taithí ghréasáin atáin dírithe ar fhóin agus inrochtana."}
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-stone-800 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-pink-600 hover:text-white hover:border-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
                        >
                            {t.cta}
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="transition group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>

                    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-rose-100/80 via-violet-100/60 to-sky-100/80 blur-2xl" />

                        <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/70 bg-stone-100 shadow-lg">
                            <Image
                                src="/images/profile-pictures/placeholder-pfp.png"
                                alt="Molly Cameron Kane"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 420px"
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-4 -left-3 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                                {t.basedInLabel}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-stone-800">
                                Offaly, Ireland
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 overflow-hidden rounded-3xl border border-stone-200/80 bg-white/70 shadow-sm backdrop-blur">
                    {details.map((item, index) => (
                        <div key={item.label.en}>
                            <div className="flex gap-4 px-5 py-5 sm:px-6">
                                <div
                                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${item.accent}`}
                                >
                                    <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
                                </div>

                                <div>
                                    <h2 className="text-sm font-semibold text-stone-800">
                                        {item.label[lang]}
                                    </h2>
                                    <p className="mt-1 max-w-2xl text-sm leading-6 text-stone-500">
                                        {item.text[lang]}
                                    </p>
                                </div>
                            </div>

                            {index < details.length - 1 && (
                                <div className="mx-5 border-t border-stone-200/80 sm:mx-6" />
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
