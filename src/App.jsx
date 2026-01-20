import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthPage from "./pages/AuthPage";
import DashboardMentor from "./pages/DashboardMentor";
import DashboardMentee from "./pages/DashboardMentee";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Redirect root ke auth */}
          <Route path="/" element={<Navigate to="/auth" replace />} />

          {/* Auth page (login/signup) */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Protected routes untuk Mentor */}
          <Route
            path="/dashboard/mentor"
            element={
              <ProtectedRoute requireMentor={true}>
                <DashboardMentor />
              </ProtectedRoute>
            }
          />

          {/* Protected routes untuk Mentee */}
          <Route
            path="/dashboard/mentee"
            element={
              <ProtectedRoute>
                <DashboardMentee />
              </ProtectedRoute>
            }
          />

          {/* Catch all - redirect ke auth */}
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
