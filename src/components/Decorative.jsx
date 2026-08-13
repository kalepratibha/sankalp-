export function ContourLines({ opacity = 1 }) {
  const lines = [
    "M-50,120 C150,60 350,180 550,90 C750,10 950,140 1150,70",
    "M-50,220 C150,150 350,280 550,190 C750,110 950,240 1150,170",
    "M-50,320 C150,260 350,380 550,300 C750,220 950,340 1150,270",
    "M-50,420 C150,370 350,470 550,400 C750,340 950,440 1150,380",
    "M-50,520 C150,480 350,560 550,500 C750,450 950,540 1150,490",
  ];
  return (
    <svg viewBox="0 0 1100 600" preserveAspectRatio="none" style={{ opacity }}>
      {lines.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="#C9A961"
          strokeWidth={i % 2 === 0 ? 0.8 : 0.5}
          opacity={0.5 - i * 0.06}
        />
      ))}
    </svg>
  );
}

export function ProjectContour({ seed }) {
  const palettes = ["#223526", "#2C4531", "#17261C"];
  return (
    <svg viewBox="0 0 400 190" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="190" fill={palettes[seed % 3]} />
      <path
        d={`M-20,${60 + seed * 10} C80,${20 + seed * 8} 180,${100 - seed * 6} 280,${40 + seed * 10} C340,${20 + seed * 4} 380,${60 + seed * 8} 420,${30 + seed * 6}`}
        stroke="#C9A961"
        strokeWidth="1"
        fill="none"
        opacity="0.55"
      />
      <path
        d={`M-20,${100 + seed * 8} C80,${60 + seed * 6} 180,${140 - seed * 4} 280,${90 + seed * 8} C340,${70 + seed * 4} 380,${110 + seed * 6} 420,${80 + seed * 4}`}
        stroke="#C9A961"
        strokeWidth="0.7"
        fill="none"
        opacity="0.35"
      />
      <path
        d={`M-20,${140 + seed * 6} C80,${110 + seed * 4} 180,${170 - seed * 3} 280,${130 + seed * 6}`}
        stroke="#F6F2E9"
        strokeWidth="0.6"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}

export function AboutVisual() {
  return (
    <svg viewBox="0 0 500 420" preserveAspectRatio="xMidYMid slice">
      <rect width="500" height="420" fill="#17261C" />
      {[80, 140, 200, 260, 320, 380].map((y, i) => (
        <path
          key={i}
          d={`M-30,${y} C100,${y - 40} 220,${y + 40} 350,${y - 20} C420,${y - 40} 480,${y} 530,${y - 10}`}
          stroke="#C9A961"
          strokeWidth={i % 2 === 0 ? 1 : 0.6}
          fill="none"
          opacity={0.45 - i * 0.05}
        />
      ))}
      <circle cx="370" cy="120" r="3" fill="#C9A961" />
      <circle cx="150" cy="260" r="3" fill="#C9A961" opacity="0.7" />
    </svg>
  );
}
