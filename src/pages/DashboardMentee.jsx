// src/pages/DashboardMentee.jsx
import Sidebar from "../components/layout/Sidebar";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { useAuth } from "../contexts/AuthContext";

const stats = [
  { label: "Task Diterima", value: "—", icon: "📋", color: "indigo" },
  { label: "Sedang Dikerjakan", value: "—", icon: "⚡", color: "yellow" },
  { label: "In Review", value: "—", icon: "🔍", color: "blue" },
  { label: "Selesai", value: "—", icon: "✅", color: "green" },
];

const upcomingFeatures = [
  { label: "Lihat daftar task yang diberikan mentor", status: "Soon" },
  { label: "Update status task (To Do → In Progress → In Review)", status: "Soon" },
  { label: "Lihat kanban board milikmu", status: "Soon" },
  { label: "Notifikasi task baru dari mentor", status: "Soon" },
];

const DashboardMentee = () => {
  const { user } = useAuth();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Selamat pagi" : hour < 17 ? "Selamat siang" : "Selamat malam";

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar role="mentee" />

      <main className="ml-60 flex-1 p-8">
        <div className="mb-8">
          <p className="text-slate-500 text-sm mb-1">{greeting},</p>
          <h1 className="text-2xl font-bold text-slate-800">{user?.name ?? "Mentee"} 👋</h1>
          <p className="text-slate-400 text-sm mt-1">
            {new Date().toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

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

export default DashboardMentee;