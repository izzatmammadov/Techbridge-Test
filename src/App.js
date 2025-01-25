import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import StudentForm from './pages/StudentForm';
import QuestionsPage from './pages/QuestionPage';
import AdminResults from './pages/AdminResults';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentForm />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/results" element={<AdminResults />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;