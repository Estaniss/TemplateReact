import styled from "styled-components";
import { SceneWrapper } from "~/components";
import { getTheme, px2rem } from "~/utils";

// colors
const infoMain = getTheme("info.main");
const commonWhite = getTheme("common.white");

//Spacings
const mediumSpacing = getTheme("mediumSpacing");

//Radius
const mediumRadius = getTheme("mediumRadius");

export const Wrapper = styled(SceneWrapper)``;

export const Content = styled.div``;

export const InputLogin = styled.input`
  border-radius: ${mediumRadius};
  border: 2px solid ${infoMain};
  width: 40%;
  margin: ${mediumSpacing};
  height: ${px2rem(35)};
  padding: ${mediumSpacing};
`;

export const Title = styled.h1`
  color: ${infoMain};
`;

export const SubmitButton = styled.button`
  border-radius: ${mediumRadius};
  border: 2px solid ${infoMain};
  width: 40%;
  margin: ${mediumSpacing};
  height: ${px2rem(35)};
  padding: ${mediumSpacing};
  background: ${infoMain};
  color: ${commonWhite};
`;

export const FormGroup = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
`;
