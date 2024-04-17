import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import UserPage from './pages/UserPage';
import UserDetailPage from './pages/UserDetailPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/user/:id" element={<UserDetailPage/>} />
    </Routes>
  );
}

export default App;
