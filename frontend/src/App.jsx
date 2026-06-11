import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Chat from "./pages/Chat";

import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route
  path="/chat"
  element={
    <ProtectedRoute>
      <Chat />
    </ProtectedRoute>
  }
/>
        <Route
          path="/profile"
          element={
        <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

        <Route
          path="/settings"
          element={
        <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected Route */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}