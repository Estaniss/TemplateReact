import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { HomeScene, LoginScene, NotFoundScene } from "~/scenes";
import Navigator from "./Navigator";
import PrivateRoute from "./PrivateRoute";
import { Routes } from "./routes";

const Router: React.FC = () => (
  <Switch>
    <Route
      path={Routes.HOME}
      element={
        <PrivateRoute>
          <HomeScene />
        </PrivateRoute>
      }
    />
    <Route path={Routes.LOGIN} element={<LoginScene />} />
    <Route path={Routes.NOT_FOUND} element={<NotFoundScene />} />
  </Switch>
);

export { Navigator, Routes };
export default Router;
