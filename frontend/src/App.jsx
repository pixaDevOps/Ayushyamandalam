import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from '../src/pages/auth/AdminLogin.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page shows AdminLogin */}
        <Route path="/" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

