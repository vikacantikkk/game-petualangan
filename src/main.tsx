
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
export const menu = [
  { name: "Beranda", icon: "home" },
  { name: "Peta", icon: "map" },
  { name: "Prestasi", icon: "trophy" },
  { name: "Materi", icon: "book" },
  { name: "Profil", icon: "user" },
];
