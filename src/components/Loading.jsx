// src/components/Loading.jsx
const Loading = ({ text = "Memuat...", fullscreen = true }) => {
  if (!fullscreen) {
    return (
      <div className="flex items-center gap-3 text-slate-500">
        <div className="w-5 h-5 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
        <span className="text-sm font-medium">{text}</span>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-50 z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 border-3 border-slate-200 rounded-full" />
          <div className="w-12 h-12 border-3 border-t-indigo-600 rounded-full animate-spin absolute inset-0" />
        </div>
        <p className="text-slate-500 text-sm font-medium tracking-wide">{text}</p>
      </div>
    </div>
  );
};

export default Loading;