import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardMentee = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Mentee</h1>
          <p className="text-gray-600 mt-1">Selamat datang, {user?.name}!</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-5 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
          Logout
        </button>
      </div>

      <div className="bg-gray-50 p-5 rounded-xl mt-5">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Fitur Mentee (Coming Soon)
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-[#667eea] mr-2">•</span>
            <span>Melihat task yang diberikan</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#667eea] mr-2">•</span>
            <span>Mengubah status task (To Do, In Progress, In Review)</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#667eea] mr-2">•</span>
            <span>Melihat kanban board</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardMentee;
