import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faCode,
  faDatabase,
  faLayerGroup,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";

export const projects = [
  {
    project: "fiadh",
    number: "01",
    title: "Fiadh",
    eyebrow: "Full-stack web application",
    description:
      "A bilingual business toolkit designed to help independent artists bring contracts, invoices, useful resources and account tools into one focused workspace.",
    stack: [
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "bcrypt",
      "Chart.js",
    ],
    icon: faLayerGroup,
    status: "Completed",
    accent: "from-rose-100 via-orange-50 to-amber-100",
    iconClass: "bg-rose-100 text-rose-600",
    link: "https://fiadh.onrender.com",
  },
  {
    project: "smart-land-health-monitoring",
    number: "02",
    title: "Smart Land Health Monitoring Network",
    eyebrow: "Distributed systems project",
    description:
      "A Node.js gRPC microservices system for receiving and streaming environmental sensor readings across forest, soil and water monitoring services.",
    stack: [
      "Node.js",
      "gRPC",
      "Protocol Buffers",
      "Server Streaming",
      "REST APIs",
    ],
    icon: faSatelliteDish,
    status: "Completed · 80% grade",
    accent: "from-emerald-100 via-teal-50 to-sky-100",
    iconClass: "bg-emerald-100 text-emerald-700",
    link: "https://github.com/mollyckane/smart-land-monitor",
  },
  {
    project: "insou",
    number: "03",
    title: "INSOU",
    eyebrow: "Interactive web experiment",
    description:
      "An evolving space for routines, reflection, and small next steps—exploring card decks, habit tools, calm interaction design, and more expressive web motion.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "UI Design",
      "WebGL Experiments",
    ],
    icon: faCode,
    status: "In progress",
    accent: "from-violet-100 via-fuchsia-50 to-sky-100",
    iconClass: "bg-violet-100 text-violet-700",
    link: null,
  },
];