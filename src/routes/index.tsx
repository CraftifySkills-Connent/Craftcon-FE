import { createBrowserRouter } from "react-router-dom";

import {
  Homepage,
  Login,
  Signup,
  ForgotPassword,
  NewPassword,
  Dashboard,
} from "../pages";
import { ProtectedRoute } from "./protectedRoutes";
// import { NotFoundPage } from "../components";
// import { lazy } from "react";

const routesForAuthenticatedOnly = [
  {
    path: "/dashboard",
    element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/forgotPassword", element: <ForgotPassword /> },
  { path: "/newpassword", element: <NewPassword /> },
  ...routesForAuthenticatedOnly,
]);
