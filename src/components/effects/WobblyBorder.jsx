export default function WobblyBorder({ className = "", strokeColor = "currentColor" }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
        >
            <path
                d="M 8,10
                   C 60,4 140,7 200,5
                   C 270,3 340,8 393,9
                   C 397,60 391,140 395,200
                   C 397,240 392,270 391,292
                   C 320,297 240,293 180,296
                   C 110,298 50,294 9,291
                   C 4,240 7,160 5,110
                   C 3,70 6,35 8,10 Z"
                fill="none"
                stroke={strokeColor}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
