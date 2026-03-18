// src/components/ui/Button.jsx
const variants = {
  primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm",
  secondary: "bg-slate-100 hover:bg-slate-200 text-slate-700",
  danger: "bg-red-500 hover:bg-red-600 text-white",
  ghost: "hover:bg-slate-100 text-slate-600",
  outline: "border border-slate-300 hover:bg-slate-50 text-slate-700",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        inline-flex items-center justify-center gap-2 font-medium rounded-lg
        transition-all duration-150 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
};

export default Button;