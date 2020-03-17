import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface ContentContainerProps {
  color: string;
}

const StyledDiv = styled.div`
  min-width: 500px;
  background-color: white;
  text-align: center;
  padding: 25px;
  border: 1.5px solid ${props => props.color};
  border-radius: 0.1em;
  margin-left: 5px;
  margin-right: 155px;
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 3px 10px ${props => props.color};
  }
`;

export const ContentHeader = styled.h1`
  margin-bottom: 20px;
  margin-top: 20px;
  color: ${props => props.color};
`;

export const ContentSubheader = styled.p`
  color: ${props => props.color};
`;

export const ContentLink = styled.a`
  color: ${props => props.color};
`;

const ContentContainer: FunctionComponent<ContentContainerProps> = ({
  color,
  children,
  ...restProps
}) => {
  return (
    <StyledDiv color={color} {...restProps}>
      {children}
    </StyledDiv>
  );
};

export default ContentContainer;
