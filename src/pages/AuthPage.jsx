// src/pages/AuthPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const LoginForm = ({ onSwitch }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await login(form);
      const role = data.user?.role;
      navigate(role === "mentor" || role === "admin" ? "/dashboard/mentor" : "/dashboard/mentee");
    } catch (err) {
      setError(err?.message || "Email atau password salah.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-600 px-3.5 py-3 rounded-lg text-sm">
          <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
          </svg>
          {error}
        </div>
      )}
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="nama@email.com"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Masukkan password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" loading={loading} fullWidth className="mt-2">
        Masuk
      </Button>
      <p className="text-center text-sm text-slate-500">
        Belum punya akun?{" "}
        <button type="button" onClick={onSwitch} className="text-indigo-600 font-medium hover:underline">
          Daftar sekarang
        </button>
      </p>
    </form>
  );
};

const SignupForm = ({ onSwitch }) => {
  const { signup } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signup(form);
      setSuccess(true);
      setTimeout(() => onSwitch(), 1500);
    } catch (err) {
      setError(err?.message || "Pendaftaran gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-slate-700 font-medium">Akun berhasil dibuat!</p>
        <p className="text-slate-400 text-sm">Mengarahkan ke halaman masuk...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-600 px-3.5 py-3 rounded-lg text-sm">
          <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
          </svg>
          {error}
        </div>
      )}
      <Input
        label="Nama Lengkap"
        name="name"
        type="text"
        placeholder="John Doe"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="nama@email.com"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Min. 8 karakter"
        value={form.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" loading={loading} fullWidth className="mt-2">
        Buat Akun
      </Button>
      <p className="text-center text-sm text-slate-500">
        Sudah punya akun?{" "}
        <button type="button" onClick={onSwitch} className="text-indigo-600 font-medium hover:underline">
          Masuk
        </button>
      </p>
    </form>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg">InternMGT</span>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            Kelola intern program<br />dengan lebih mudah.
          </h2>
          <p className="text-indigo-200 text-lg leading-relaxed">
            Platform manajemen magang modern untuk mentor dan mentee — dari task tracking hingga progress monitoring.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Task selesai tepat waktu", value: "94%" },
            { label: "Tim aktif", value: "200+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/10 rounded-xl p-4">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-indigo-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <span className="font-semibold text-slate-800">InternMGT</span>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-800">
              {isLogin ? "Selamat datang kembali" : "Buat akun baru"}
            </h1>
            <p className="text-slate-500 mt-1 text-sm">
              {isLogin ? "Masukkan kredensial Anda untuk melanjutkan" : "Daftarkan diri Anda untuk mulai menggunakan InternMGT"}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-slate-100 rounded-lg p-1 mb-6">
            {["Masuk", "Daftar"].map((label, i) => (
              <button
                key={label}
                onClick={() => setIsLogin(i === 0)}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                  (i === 0) === isLogin
                    ? "bg-white text-slate-800 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {isLogin
            ? <LoginForm onSwitch={() => setIsLogin(false)} />
            : <SignupForm onSwitch={() => setIsLogin(true)} />
          }
        </div>
      </div>
    </div>
  );
};

export default AuthPage;