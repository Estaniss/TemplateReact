import { FormikProps, useFormikContext } from "formik";
import React from "react";
import { Credentials } from "~/utils/types";
import {
  Content,
  FormGroup,
  InputLogin,
  SubmitButton,
  Title,
  Wrapper,
} from "./styles";

const Login: React.FC = () => {
  const { values, handleChange, handleSubmit }: FormikProps<Credentials> =
    useFormikContext();
  return (
    <Wrapper title="Login">
      <Content>
        <FormGroup onSubmit={handleSubmit}>
          <Title>Login</Title>
          <InputLogin
            id="email"
            name="email"
            type="tel"
            onChange={handleChange}
            value={values.email}
            placeholder="Email"
          />
          <InputLogin
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password}
            placeholder="Senha"
          />
          <SubmitButton>Entrar</SubmitButton>
        </FormGroup>
      </Content>
    </Wrapper>
  );
};

export default Login;
