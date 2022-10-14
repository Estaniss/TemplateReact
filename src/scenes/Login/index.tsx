import { Formik, FormikHelpers } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "~/routes";
import { ResponseError, useStores, useToasts } from "~/utils";
import { Credentials } from "~/utils/types";
import { initialValues, validationSchema } from "./form";
import Login from "./Login";

const LoginContainer: React.FC = () => {
  const { user } = useStores();
  const { showError } = useToasts();
  const navigate = useNavigate();

  const onSubmit = async (
    formValues: Credentials,
    { setSubmitting }: FormikHelpers<Credentials>
  ): Promise<void> => {
    setSubmitting(true);
    try {
      await user.login(formValues);
    } catch (error) {
      if (error instanceof ResponseError) {
        showError(error.message);
      }
    } finally {
      setSubmitting(false);
      navigate(Routes.HOME);
    }
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Login />
    </Formik>
  );
};

export default LoginContainer;
