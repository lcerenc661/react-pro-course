import { BrowserRouter, Navigate, NavLink } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ to, name, Component, path }) => {
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ Component, path }, i) => {
              return (
                <Route key={path + i} path={path} element={<Component />} />
              );
            })}
            <Route path="/*" element={<Navigate to="lazy1" replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
