import Home from "../components/pages/Home";
import { Routes } from "../types/enums/Routes";

export const publicRoutes = [
  { id: 1, path: Routes.HOME, element: <Home /> },
  { id: 2, path: Routes.NO_ROUTE, element: <Home /> },
];
