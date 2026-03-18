// src/components/ui/Input.jsx
const Input = ({
  label,
  error,
  required,
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}
      <input
        {...props}
        className={`
          w-full px-3.5 py-2.5 text-sm text-slate-800
          bg-white border rounded-lg outline-none
          placeholder:text-slate-400
          transition-all duration-150
          ${error
            ? "border-red-400 focus:ring-2 focus:ring-red-100 focus:border-red-400"
            : "border-slate-300 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400"
          }
          ${className}
        `}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;