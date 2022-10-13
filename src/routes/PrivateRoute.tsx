import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { If } from "~/components";
import { isEmpty } from "~/modules";
import { Storage } from "~/services";
import { Routes } from "./routes";

type Props = {
  children: JSX.Element;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const accessToken = Storage.getToken();
  const token = accessToken?.token || "";

  return (
    <>
      <If condition={!isEmpty(token)}>{children}</If>
      <If condition={isEmpty(token)}>
        <Navigate to={Routes.LOGIN} state={{ from: location }} />
      </If>
    </>
  );
};

export default PrivateRoute;
