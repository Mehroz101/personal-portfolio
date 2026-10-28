import ToolkitIcon from "./ToolkitIcon";

const nodes = [
  { x: 80, y: 130, name: "React", label: "INTERFACE" },
  { x: 275, y: 130, name: "Node.js", label: "BACKEND" },
  { x: 470, y: 130, name: "MongoDB", label: "DATABASE" },
  { x: 650, y: 130, name: "Vercel", label: "DEPLOYMENT" },
  { x: 470, y: 40, name: "Redis", label: "CACHING" },
];
const paths = [
  "M102 130 C160 130 195 130 253 130",
  "M297 130 C355 130 390 130 448 130",
  "M492 130 C550 130 570 130 628 130",
  "M290 114 C335 40 390 40 448 40",
];
export default function StackConnections() {
  return (
    <div className="stack-connections">
      <div className="stack-connection-copy">
        <p className="eyebrow">CONNECTED BY DESIGN</p>
        <h3>From interface to infrastructure.</h3>
      </div>
      <svg
        viewBox="0 0 730 205"
        className="connection-illustration"
        role="img"
        aria-label="React interface connected to a Node.js backend, MongoDB database, Redis cache, and Vercel deployment"
      >
        {paths.map((d, index) => (
          <g key={d}>
            <path d={d} className="connection-track" />
            <path
              d={d}
              pathLength="100"
              className="connection-pulse"
              style={{ animationDelay: `${index * 0.32}s` }}
            />
          </g>
        ))}
        {nodes.map((node) => (
          <g key={node.name}>
            <circle
              cx={node.x}
              cy={node.y}
              r="24"
              className="connection-node"
            />
            <foreignObject
              x={node.x - 11}
              y={node.y - 11}
              width="22"
              height="22"
            >
              <div className="connection-icon">
                <ToolkitIcon name={node.name} />
              </div>
            </foreignObject>
            <text
              x={node.x}
              y={node.y + 46}
              textAnchor="middle"
              className="connection-name"
            >
              {node.name}
            </text>
            <text
              x={node.x}
              y={node.y + 61}
              textAnchor="middle"
              className="connection-label"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
