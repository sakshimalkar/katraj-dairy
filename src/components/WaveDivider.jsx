export default function WaveDivider({ fill = "#FFFFFF", flip = false }) {
  return (
    <div className="wave-divider" style={{ transform: flip ? "scaleY(-1)" : "none" }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
