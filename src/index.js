import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import App from './App';
import Dash from './Dash';
import Error from './Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/363337393633373736313739323037373635363236393734363532303732363536343639373236353633373436353634323037343666323036343631373336383632366636313732363432633230363936363230373436383639373332303631363436343732363537333733323036393733323036363666373536653634323036663735373432303734363836353665323036393734373332303631323036333666366437303732366636643639373336353230336132393362" element={<Dash />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/error" />} />
      </Routes>
    </BrowserRouter>
);


