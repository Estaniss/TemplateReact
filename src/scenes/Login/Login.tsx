import React from "react";
import { Content, InputLogin, SubmitButton, Title, Wrapper } from "./styles";

const Login: React.FC = () => {
  return (
    <Wrapper title="Login">
      <Content>
        <Title>Login</Title>
        <InputLogin placeholder="email" />
        <InputLogin placeholder="password" />
        <SubmitButton>Entrar</SubmitButton>
      </Content>
    </Wrapper>
  );
};

export default Login;
