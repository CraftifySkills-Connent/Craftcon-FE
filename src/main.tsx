import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ReactComponent as Logo } from "../src/assets/img/logo.svg";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { router } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Logo className="w-24 h-24" />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
