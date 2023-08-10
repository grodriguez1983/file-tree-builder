import React from "react";
import ReactDOM from "react-dom/client";
import { Workspace } from "./Workspace/Workspace";
import "./styles.css";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Workspace />
  </React.StrictMode>
);
