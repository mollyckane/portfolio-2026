import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faCode,
    faBug,
    faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
    title: "About — Molly Cameron Kane",
    description:
        "Learn more about Molly Cameron Kane, a developer, designer and creative technologist building thoughtful interactive experiences.",
};

const details = [
  {
    label: "How I work",
    text: "I enjoy the detective work of development: tracing bugs, asking why they happen and staying with a problem until there is a solution that makes sense.",
    icon: faBug,
    accent: "bg-rose-50 text-rose-500",
  },
  {
    label: "What I build with",
    text: "JavaScript, Node.js, Java, MySQL, gRPC, HTML and CSS—plus Linux as the highly customisable environment where I like to learn and make things.",
    icon: faCode,
    accent: "bg-sky-50 text-sky-600",
  },
  {
    label: "What I’m exploring",
    text: "Full-stack applications, creative code, mobile-first accessibility and eventually bringing my Blender experience into experimental 3D and WebGL work.",
    icon: faWandMagicSparkles,
    accent: "bg-violet-50 text-violet-600",
  },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-stone-50 px-6 text-stone-800 sm:px-10">
            <section className="mx-auto max-w-5xl py-30">
                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    {/* Intro content */}
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
                            Junior software developer · visual artist
                        </p>

                        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
                            I’m a developer with an artist’s eye for detail.
                        </h1>

                        <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-stone-600 sm:text-md">
                            <p>
                                I’m Molly Kane, a junior <span className="text-pink-500 underline decoration-dashed font-bold">software developer</span> and <span className="text-pink-500 underline decoration-dashed font-bold">visual artist</span>. 
                                I like building things from the inside out: following a bug until it makes sense, 
                                connecting the moving parts of an application and making the finished experience 
                                feel considered on the surface.
                            </p>

                            <p>
                                I’m most at home where problem-solving and design overlap. 
                                I enjoy full-stack development with experience with JavaScript, Node.js, Express, SQL databases, authentication and APIs—
                                but I also care about how a project looks, moves and behaves in someone’s hands. 
                                My background in fine art influences how I think about composition, colour, interaction and 
                                the small visual choices that make a site feel intentional.
                            </p>

                            <p>
                                I’m curious, committed and persistent. 
                                I like learning how systems and I’m increasingly exploring creative code, 3D/WebGL 
                                and mobile-first, accessible web experiences.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-stone-800 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-pink-600 hover:text-white hover:border-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2"
                        >
                            Let’s work together
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="transition group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>

                    {/* Photo / visual card */}
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
                                Based in
                            </p>
                            <p className="mt-1 text-sm font-semibold text-stone-800">
                                Offaly, Ireland
                            </p>
                        </div>
                    </div>
                </div>

                {/* Connected detail panel, matching Contact */}
                <div className="mt-16 overflow-hidden rounded-3xl border border-stone-200/80 bg-white/70 shadow-sm backdrop-blur">
                    {details.map((item, index) => (
                        <div key={item.label}>
                            <div className="flex gap-4 px-5 py-5 sm:px-6">
                                <div
                                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${item.accent}`}
                                >
                                    <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
                                </div>

                                <div>
                                    <h2 className="text-sm font-semibold text-stone-800">
                                        {item.label}
                                    </h2>
                                    <p className="mt-1 max-w-2xl text-sm leading-6 text-stone-500">
                                        {item.text}
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