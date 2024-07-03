import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import IssueCertificate from './pages/IssueCertificate';
import CertificateIssued from './pages/CertificatePage';
import ViewPage from './pages/viewPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/certificates" element={<IssueCertificate />} />
        <Route path="/submit" element={<CertificateIssued />} />
        <Route path="/certificate/:id" element={<ViewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
