import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentLogin from './pages/auth/StudentLogin';
import AdminLogin from './pages/auth/AdminLogin';
import StudentDashboard from './pages/student/Dashboard';
import CandidateListing from './pages/student/CandidateListing';
import VotingPage from './pages/student/VotingPage';
import VoteSuccess from './pages/student/VoteSuccess';
import AdminDashboard from './pages/admin/Dashboard';
import ElectionManagement from './pages/admin/ElectionManagement';
import CandidateManagement from './pages/admin/CandidateManagement';
import ResultsDashboard from './pages/admin/ResultsDashboard';
import StudentLayout from './layouts/StudentLayout';
import AdminLayout from './layouts/AdminLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Student Routes */}
        <Route element={<StudentLayout />}>
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/candidates" element={<CandidateListing />} />
          <Route path="/vote/:positionId" element={<VotingPage />} />
          <Route path="/success" element={<VoteSuccess />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="elections" element={<ElectionManagement />} />
          <Route path="candidates" element={<CandidateManagement />} />
          <Route path="results" element={<ResultsDashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
