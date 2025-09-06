import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/useAuth";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return <p className="text-center mt-5">wait .....</p>;
  }

  return (
    <div className="container mt-5 text-center">
      <div className="card p-4 shadow-sm">
        <h2>Dashboard</h2>
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
}
