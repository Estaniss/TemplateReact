import React from "react";
import { Content, Wrapper } from "./styles";
import DocumentTitle from "react-document-title";

type Props = {
  title: string;
  children: JSX.Element;
};
const SceneWrapper: React.FC<Props> = ({ children, title }) => {
  return (
    <DocumentTitle title={title}>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </DocumentTitle>
  );
};

export default SceneWrapper;
