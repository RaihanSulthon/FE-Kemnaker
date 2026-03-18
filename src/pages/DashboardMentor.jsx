// src/pages/DashboardMentor.jsx
import Sidebar from "../components/layout/Sidebar";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { useAuth } from "../contexts/AuthContext";

const stats = [
  { label: "Total Tim", value: "—", icon: "👥", color: "indigo" },
  { label: "Total Task", value: "—", icon: "📋", color: "green" },
  { label: "Selesai", value: "—", icon: "✅", color: "yellow" },
  { label: "Perlu Review", value: "—", icon: "🔍", color: "red" },
];

const upcomingFeatures = [
  { label: "Buat dan kelola task untuk mentee", status: "Soon" },
  { label: "Buat dan kelola tim", status: "Soon" },
  { label: "Approve/review task dari mentee", status: "Soon" },
  { label: "Lihat kanban board per tim", status: "Soon" },
];

const DashboardMentor = () => {
  const { user } = useAuth();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Selamat pagi" : hour < 17 ? "Selamat siang" : "Selamat malam";

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar role="mentor" />

      <main className="ml-60 flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-slate-500 text-sm mb-1">{greeting},</p>
          <h1 className="text-2xl font-bold text-slate-800">{user?.name ?? "Mentor"} 👋</h1>
          <p className="text-slate-400 text-sm mt-1">
            {new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <Card.Body className="flex items-center gap-4">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Upcoming Features */}
        <Card className="max-w-lg">
          <Card.Header>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-800 text-sm">Fitur yang akan hadir</h2>
              <Badge variant="indigo">Dalam pengembangan</Badge>
            </div>
          </Card.Header>
          <Card.Body className="space-y-3">
            {upcomingFeatures.map((f) => (
              <div key={f.label} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="text-sm text-slate-600">{f.label}</span>
                </div>
                <Badge>{f.status}</Badge>
              </div>
            ))}
          </Card.Body>
        </Card>
      </main>
    </div>
  );
};

export default DashboardMentor;