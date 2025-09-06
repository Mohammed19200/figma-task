import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/Login/Login";

function App() {
  return (
    <>
          <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
