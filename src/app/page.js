import Link from "next/link";
import BlobCursor from "@/components/effects/BlobCursor";
import NeuralGlow from "@/components/effects/NeuralGlow";

export default function HomePage() {
  const links = [
    { href: "/contact", label: "Contact Me" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "https://github.com/mollyckane/", label: "GitHub" },
  ];

  return (
    <>
    
    <NeuralGlow />
    <BlobCursor />
    <main className="min-h-screen bg-stone-100 text-stone-800 ">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-30 z-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-stone-500 z-30">
          MOLLY CAMERON KANE
        </p>

        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl z-10">
          My personal portfolio and playground for creative projects, experiments and ideas.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg z-30">
            I’m a developer and designer building polished, interactive web experiences with modern frontend tools and a curious, experimental eye.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 z-30">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium transition hover:bg-rose-100 hover:text-pink-600 hover:border-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}