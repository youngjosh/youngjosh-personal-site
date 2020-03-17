import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface AppContainerProps {}

const BodyDiv = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
`;

const AppContainer: FunctionComponent<AppContainerProps> = ({ children }) => {
  return <BodyDiv>{children}</BodyDiv>;
};

export default AppContainer;
