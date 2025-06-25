import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/admin/dashboard/Sidebar';
import DashboardContent from './components/admin/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <DashboardContent />
      </div>
    </Router>
  );
}

export default App;
