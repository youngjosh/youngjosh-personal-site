import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface ContentContainerProps {}

const BodyDiv = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  max-width: 800px;
  margin-top: auto;
  margin-bottom: auto;
`;

const ContentContainer: FunctionComponent<ContentContainerProps> = ({
  children
}) => {
  return <BodyDiv>{children}</BodyDiv>;
};

export default ContentContainer;
