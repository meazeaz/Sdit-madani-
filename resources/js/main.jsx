import React from 'react';
import '../css/app.css'; // Import CSS Tailwind
import { createRoot } from 'react-dom/client';
import App from './App'; // Import komponen utama App


const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
