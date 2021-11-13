import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from "./hooks/useAuthContext";
//pages & components
import GlobalStyles from './components/GlobalStyles';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  const { token } = useAuthContext();

  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={token ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/dashboard" element={token ? <Dashboard token={token} /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
