import { createBrowserRouter } from "react-router-dom";
import { Homepage, Login, Signup, ForgotPassword, NewPassword } from "../pages";
import { NotFoundPage } from "../components";

export const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <NotFoundPage /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/forgotPassword", element: <ForgotPassword /> },
  { path: "/newpassword", element: <NewPassword /> },
]);
