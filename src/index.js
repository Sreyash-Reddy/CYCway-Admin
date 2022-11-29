import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import App from './App';
import Dash from './Dash';
import Error from './Error';
import { DASHBOARD_ROUTE } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={DASHBOARD_ROUTE} element={<Dash />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/error" />} />
      </Routes>
    </BrowserRouter>
);


