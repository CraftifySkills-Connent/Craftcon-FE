import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages";
import { NotFoundPage } from "../components";

export const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <NotFoundPage />},
]);
