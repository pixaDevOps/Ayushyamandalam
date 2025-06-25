import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/auth/AdminLogin.jsx";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
    </Routes>
  );
}
