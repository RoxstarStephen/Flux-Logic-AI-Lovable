const WorkflowDiagram = () => {
  return (
    <div className="relative w-full max-w-sm aspect-square">
      <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
        {/* Glow filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(82 85% 67%)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(82 85% 67%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(82 85% 67%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        <line x1="150" y1="60" x2="70" y2="150" stroke="url(#lineGrad)" strokeWidth="1.5" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="60" x2="230" y2="150" stroke="url(#lineGrad)" strokeWidth="1.5" filter="url(#glow)" />
        <line x1="70" y1="150" x2="150" y2="240" stroke="url(#lineGrad)" strokeWidth="1.5" filter="url(#glow)" />
        <line x1="230" y1="150" x2="150" y2="240" stroke="url(#lineGrad)" strokeWidth="1.5" filter="url(#glow)" />

        {/* Nodes */}
        {[
          { cx: 150, cy: 60, label: "INPUT" },
          { cx: 70, cy: 150, label: "LLM" },
          { cx: 230, cy: 150, label: "n8n" },
          { cx: 150, cy: 240, label: "OUTPUT" },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r="28" fill="hsl(222 47% 6%)" stroke="hsl(82 85% 67%)" strokeWidth="1.5" filter="url(#glow)" />
            <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill="hsl(82 85% 67%)" fontSize="10" fontFamily="monospace">
              {node.label}
            </text>
            {/* Pulse ring */}
            <circle cx={node.cx} cy={node.cy} r="28" fill="none" stroke="hsl(82 85% 67%)" strokeWidth="0.5" opacity="0.4">
              <animate attributeName="r" from="28" to="42" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.4" to="0" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default WorkflowDiagram;
