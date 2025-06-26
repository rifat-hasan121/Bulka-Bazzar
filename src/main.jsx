import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routers/Router.jsx';
import { RouterProvider } from 'react-router';
import AuthProvider from './Provider/AuthProvider.jsx';
import { ThemeProvider } from './Contaxt/ThemeContext.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>
);
