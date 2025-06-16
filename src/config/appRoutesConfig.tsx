import {
  HomePage,
  Components
} from "../pages/index";
import { type RouteObject } from "react-router-dom";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/components",
    element: <Components />,
  },
];
