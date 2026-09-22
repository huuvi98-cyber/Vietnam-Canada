export function VietnamFlag({ className = "w-8 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 600"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <rect width="900" height="600" fill="#da251d" />
      <polygon
        fill="#ffff00"
        points="450,135 487,250 608,250 510,321 547,436 450,365 353,436 390,321 292,250 413,250"
      />
    </svg>
  );
}

export function CanadaFlag({ className = "w-8 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 600"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <rect width="225" height="600" fill="#da251d" />
      <rect x="225" width="450" height="600" fill="#ffffff" />
      <rect x="675" width="225" height="600" fill="#da251d" />
      <g transform="translate(450, 305) scale(1.2) translate(-500, -250)">
        <path
          fill="#da251d"
          d="M 500,75 
             L 517,148 L 565,134 L 545,178 L 608,206 L 576,238 L 610,268 L 540,286 L 550,305 L 507,294 L 505,375 L 495,375 L 493,294 L 450,305 L 460,286 L 390,268 L 424,238 L 392,206 L 455,178 L 435,134 L 483,148 Z"
        />
      </g>
    </svg>
  );
}

