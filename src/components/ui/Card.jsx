// src/components/ui/Card.jsx
const Card = ({ children, className = "", ...props }) => (
  <div
    {...props}
    className={`bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}
  >
    {children}
  </div>
);

Card.Header = ({ children, className = "" }) => (
  <div className={`px-6 py-4 border-b border-slate-100 ${className}`}>
    {children}
  </div>
);

Card.Body = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

Card.Footer = ({ children, className = "" }) => (
  <div className={`px-6 py-4 border-t border-slate-100 ${className}`}>
    {children}
  </div>
);

export default Card;