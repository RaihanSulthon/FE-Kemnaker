import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loading from "./Loading";

const ProtectedRoute = ({ children, requireMentor = false }) => {
  const { isAuthenticated, isMentor, loading } = useAuth();

  if (loading) {
    return <Loading text="Memuat..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  if (requireMentor && !isMentor) {
    return <Navigate to="/dashboard/mentee" replace />;
  }

  return children;
};

export default ProtectedRoute;
