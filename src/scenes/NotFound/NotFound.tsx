import React from "react";
import { ErrorGift } from "~/assets/images";
import { ErrorGif, ErrorWrapper, Wrapper } from "./styles";

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <ErrorWrapper>
        <ErrorGif src={ErrorGift} />
      </ErrorWrapper>
    </Wrapper>
  );
};

export default NotFound;
