import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthLayout from './pages/AuthLayout'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
