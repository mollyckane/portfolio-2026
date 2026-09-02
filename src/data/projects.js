import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faCode,
  faDatabase,
  faLayerGroup,
  faSatelliteDish,
  faSeedling,
  faFont,
  faVialCircleCheck,
  faArrowsRotate,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { missyVoya } from "@/app/fonts";

export const projects = [
  {
    // FIADH
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
      "i18n",
      "Chart.js",
    ],
    icon: faLayerGroup,
    status: "FYP · Pending results",
    accent: "from-rose-100 via-orange-50 to-amber-100",
    iconClass: "bg-rose-100 text-rose-600",
    link: "https://fiadh.onrender.com",
    images: [
        "/images/projects/fiadh/dashboard.png",
        "/images/projects/fiadh/income-expenses.png",
    ],
    overviewIntro: 
      "Working on Fiadh taught me how much authentication and data modelling decisions ripple outward and pushed me to think more like the people using it: an artist who wants to spend five minutes on admin, not fifty, in a language that actually feels like their own.",
    overviewDetails: [
      {
        label: "The problem",
        text: "Independent artists often manage contracts, invoices and accounts across scattered spreadsheets and note apps. Fiadh brings that into one bilingual workspace.",
        icon: faSeedling,
      },
      {
        label: "Why the name",
        text: "Fiadh is the Irish word for deer and carries the sense of wild and free, how I think about being an artist and a quiet symbol of Irish heritage.",
        icon: faFont,
      },
      {
        label: "The stack",
        text: "Node.js, Express and MySQL on the back-end, with the front-end as plain HTML, CSS and JavaScript. JWT and bcrypt handle authentication, Chart.js powers the dashboard.",
        icon: faDatabase,
      },
      {
        label: "Bilingual by design",
        text: "Translations run on i18n, with files I wrote myself rather than machine translation. As a native Irish speaker, that mattered given how few software tools treat Irish as a first-class language.",
        icon: faLanguage,
      },
      {
        label: "What I'd do differently",
        text: "I hadn't learned React yet when I built this, so the front end is vanilla JavaScript manipulating the DOM directly. Rebuilding it in React is the first thing on my list.",
        icon: faArrowsRotate,
      },
    ],
    nextSteps: "Future developments of Fiadh will include further resources for artists and implementing a React front-end.",
    theme: {
      heroFontClass: missyVoya.className,
      headingSize: "text-8xl",
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
      hoverAccent: "hover:text-[color:var(--fiadh-focus)]",
      headingClass: "text-[color:var(--fiadh-brand)]",
      paragraphClass: "text-[color:var(--fiadh-text-paragraph)]",
      mutedClass: "text-[color:var(--fiadh-text-secondary)]",
      borderClass: "border-[color:var(--fiadh-border)]",
    },
  },
  {
    // SMART LAND HEALTH MONITOR
    project: "smart-land-health-monitoring",
    number: "02",
    title: "Smart Land Health Monitoring Network",
    eyebrow: "gRPC microservices system",
    description:
      "A Node.js gRPC microservices system for receiving and streaming environmental sensor readings across forest, soil and water monitoring services.",
    stack: [
      "Node.js",
      "Express",
      "gRPC",
      "Protocol Buffers",
      "Server Streaming",
      "REST APIs",
    ],
    icon: faSatelliteDish,
    status: "Course Project · 80% grade",
    accent: "from-emerald-100 via-teal-50 to-sky-100",
    iconClass: "bg-emerald-100 text-emerald-700",
    link: "https://github.com/mollyckane/smart-land-monitor",
    images: [
        "/images/projects/smart-land-monitor/dashboard.png",
        "/images/projects/smart-land-monitor/naming-service.png",
    ],
    overviewIntro:
      "This project was my first experience with gRPC and I learned a lot about how to structure microservices, handle streaming data and design APIs that are both efficient and easy to use. It was also a great opportunity to explore the challenges of real-time data processing and the importance of robust error handling in distributed systems.",
    overviewDetails: [
      {
        label: "The task",
        text: "Create a microservices system regarding one of the United Nations SDGs. My area: SDG 15, Life on Land. I designed a system for receiving and streaming environmental sensor readings across forest, soil and water monitoring services.",
        icon: faSeedling,
      },
      {
        label: "The stack",
        text: "Node.js, Express.js, gRPC, Protocol Buffers, server streaming and REST APIs.",
        icon: faDatabase,
      },
      {
        label: "What I learned",
        text: "gRPC is a powerful tool for building efficient and scalable microservices, but it requires careful planning and design to ensure that services can communicate effectively. I learned a lot about the importance of defining clear service boundaries, designing APIs that are easy to use and handling errors gracefully in a distributed system.",
        icon: faVialCircleCheck,
      },
      {
        label: "What I'd do differently",
        text: "I would spend more time on testing and monitoring the system, as well as exploring different strategies for scaling and load balancing. I would also consider using a more robust messaging system for handling real-time data streams.",
        icon: faArrowsRotate,
      },
    ],
    nextSteps: "Continue to explore gRPC and microservices architecture and apply these concepts to future projects. I would also like to experiment with different data streaming techniques and explore the use of machine learning for analysing environmental sensor data.",
  },
  {
    // INSOU
    project: "insou",
    number: "03",
    title: "INSOU",
    eyebrow: "Interactive web experiment",
    description:
      "An evolving space for routines, reflection and small next steps—exploring card decks, habit tools, calm interaction design and more expressive web motion.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "UI Design",
      "WebGL Experiments",
    ],
    icon: faCode,
    status: "Independent · In progress",
    accent: "from-violet-100 via-fuchsia-50 to-sky-100",
    iconClass: "bg-violet-100 text-violet-700",
    link: null,
    images: [
        null,
    ],
  },
];