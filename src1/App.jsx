import { Routes, Route } from "react-router-dom";
import Login from "./components/admin/auth/AdminLogin";

export default function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
    </Routes>
  );
}
