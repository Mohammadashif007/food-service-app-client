import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div className="max-w-7xl mx-auto">
            <RouterProvider router={routes}></RouterProvider>
        </div>
    </React.StrictMode>
);
