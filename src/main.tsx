import {
  RouterProvider,
  createBrowserHistory,
  createRouter,
} from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  history: createBrowserHistory(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
