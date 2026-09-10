export default function MilkPourArt() {
  return (
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of milk being poured into a glass">
      <defs>
        <linearGradient id="jugGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B3A63" />
          <stop offset="100%" stopColor="#12294A" />
        </linearGradient>
        <linearGradient id="milkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="100%" stopColor="#F1E8D8" />
        </linearGradient>
      </defs>

      {/* ambient backdrop circle */}
      <circle cx="210" cy="210" r="190" fill="#FFFFFF" opacity="0.55" />
      <circle cx="210" cy="210" r="150" fill="#F1E8D8" opacity="0.6" />

      {/* jug */}
      <g transform="translate(70,60) rotate(-8)">
        <path
          d="M20 10 h130 a14 14 0 0 1 14 14 v40 c0 30 -20 46 -20 80 v90 a20 20 0 0 1 -20 20 H40 a20 20 0 0 1 -20 -20 V60 a20 20 0 0 1 -6 -18 V24 A14 14 0 0 1 20 10 Z"
          fill="url(#jugGrad)"
        />
        <path d="M148 60 c26 6 46 24 46 46 c0 18 -12 30 -12 30 l-14 -8 c0 0 8 -12 8 -22 c0 -12 -12 -22 -30 -26 Z" fill="url(#jugGrad)" />
        <rect x="24" y="70" width="118" height="12" rx="6" fill="#D4A017" opacity="0.85" />
      </g>

      {/* pouring stream */}
      <g>
        <path d="M232 150 C 226 190, 226 210, 232 236" stroke="url(#milkGrad)" strokeWidth="9" strokeLinecap="round" fill="none">
          <animate attributeName="stroke-width" values="7;10;7" dur="1.6s" repeatCount="indefinite" />
        </path>
      </g>

      {/* glass */}
      <g transform="translate(190,236)">
        <path d="M0 0 h90 l-10 120 a10 10 0 0 1 -10 9 H20 a10 10 0 0 1 -10 -9 Z" fill="#FFFFFF" opacity="0.85" stroke="#1B3A63" strokeWidth="3" />
        <clipPath id="glassClip">
          <path d="M4 6 h82 l-9 112 a8 8 0 0 1 -8 8 H21 a8 8 0 0 1 -8 -8 Z" />
        </clipPath>
        <rect x="0" y="55" width="90" height="80" fill="url(#milkGrad)" clipPath="url(#glassClip)">
          <animate attributeName="y" values="70;50;70" dur="1.6s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* ripple droplets */}
      <circle cx="205" cy="130" r="5" fill="#D4A017" opacity="0.8">
        <animate attributeName="cy" values="120;140;120" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="255" cy="115" r="4" fill="#B3242A" opacity="0.7">
        <animate attributeName="cy" values="108;126;108" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
