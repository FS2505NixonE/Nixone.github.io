import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminShortcut from './components/AdminShortcut'
import RequireAuth from './components/RequireAuth'
import { AuthProvider } from './context/AuthProvider'
import AdminLogin from './pages/AdminLogin'
import Backoffice from './pages/Backoffice'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <AdminShortcut />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route
            path="/backoffice"
            element={
              <RequireAuth>
                <Backoffice />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
