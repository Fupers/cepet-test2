import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const isAuthenticated = () => !!localStorage.getItem("access");

export const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated() ? <Home /> : <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
