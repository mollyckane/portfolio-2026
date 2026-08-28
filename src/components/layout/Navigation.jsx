import Link from "next/link";

const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Me", href: "/contact" },
];

export default function Navigation() {
    return (
        <nav className="bg-stone-100/30 backdrop-blur-md border-b border-stone-200 px-6 py-4 fixed left-0 top-0 z-50 w-full">
            <ul className="items-center flex flex-wrap gap-1 divide-x divide-stone-300">
                {navigationItems.map((item) => (
                    <li key={item.href} className="px-3 hover:text-stone-500 transition">
                        <Link href={item.href}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}