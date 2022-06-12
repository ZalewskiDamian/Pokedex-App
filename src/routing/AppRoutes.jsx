import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "./AppRoute.enum";
import Home from "../views/Home/Home";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.home} element={<Home />} />
      </Routes>
    </Router>
  );
};
