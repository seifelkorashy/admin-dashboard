

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes } from "react-router";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
// @ts-ignore
import Team from "./pages/team/team";
import Contacts from "./pages/contacts/Contacts";
import Blances from "./pages/blances/Blances";
import Profile from "./pages/profile/Profile";
import Calendar from "./pages/calendar/Calendar";
import Faq from "./pages/faq/Faq";

let routes = [
  {path: "/", element: <Dashboard />},
  {path: "/team", element: <Team />},
  {path: "/contacts", element: <Contacts />},
  {path: "/blances", element: <Blances />},
  {path: "/profile", element: <Profile />},
  {path: "/calendar", element: <Calendar />},
  {path: "/faq", element: <Faq />},
]

let route = routes.map((route) => {
  return (
    <Route key={route.path} path={route.path} element={route.element} />
  )
})


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<App />}>
      {route}
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
