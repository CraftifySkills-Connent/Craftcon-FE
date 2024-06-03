import { lazy } from "react";

const Homepage = lazy(() => import("./Homepage"));
const Signup = lazy(() => import("./Auth/Signup"));
const Login = lazy(() => import("./Auth/Login"));
const ForgotPassword = lazy(() => import("./Auth/ForgotPassword"));
const NewPassword = lazy(() => import("./Auth/NewPassword"));

export { Homepage, Signup, Login, ForgotPassword, NewPassword };
