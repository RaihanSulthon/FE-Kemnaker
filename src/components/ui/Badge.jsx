// src/components/ui/Badge.jsx
const variants = {
  default: "bg-slate-100 text-slate-600",
  indigo: "bg-indigo-50 text-indigo-700",
  green: "bg-emerald-50 text-emerald-700",
  yellow: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-red-700",
};

const Badge = ({ children, variant = "default", className = "" }) => (
  <span
    className={`
      inline-flex items-center px-2.5 py-0.5 rounded-full
      text-xs font-medium
      ${variants[variant]} ${className}
    `}
  >
    {children}
  </span>
);

export default Badge;