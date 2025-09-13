// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profil from './pages/Profil.jsx'; // Pastikan file ini sudah dibuat
import Prestasi from './pages/Prestasi'; // Pastikan file ini sudah dibuat
import Ppdb from './pages/Ppdb'; // Pastikan file ini sudah dibuat
import Artikel from './pages/Artikel'; // Pastikan file ini sudah dibuat
import Kontak from './pages/Kontak'; // Pastikan file ini sudah dibuat

export default function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/prestasi" element={<Prestasi />} />
            <Route path="/ppdb" element={<Ppdb/>} />
            <Route path="/artikel" element={<Artikel/>} />
            <Route path="/kontak" element={<Kontak/>} />
            {/* Tambahkan route lain di sini jika diperlukan */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
