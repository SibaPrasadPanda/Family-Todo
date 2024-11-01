import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  // TODO: Add auth state management
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Auth />;
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;