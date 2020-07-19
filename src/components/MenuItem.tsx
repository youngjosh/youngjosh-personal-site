import React, { FunctionComponent } from "react";
import styled from "styled-components";
import DynamicLink, { DynamicLinkProps } from "./DynamicLink";

export interface MenuItemProps {
  name: string;
  color: string;
  link: string;
  isActive: boolean;
}

export interface StyledButtonProps extends DynamicLinkProps {
  isActive: boolean;
  color: string;
}

const StyledButton = styled(({ isActive, ...rest }) => (
  <DynamicLink {...rest} />
))<StyledButtonProps>`
  width: 100%;
  min-width: 100px;
  height: 30px;
  display: flex;
  padding: 0.35em 1.2em;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-align: center;
  transition: all 0.2s;
  font: 400 13.3333px Arial;
  background-color: white;

  @media only screen and (max-width: 849px) {
    flex: 1 1 auto;
    max-width: 130px;
  }

  ${props =>
    props.isActive
      ? `
      color: #ffffff;
      background-color: ${props.color};
      border: 0.1em solid ${props.color}; 
      cursor: default;
      `
      : `border: 0.1em solid ${props.color};
      color: ${props.color};
      &:hover {
        color: #ffffff;
        background-color: ${props.color};
        border: 0.1em solid ${props.color};
      }`}
`;

const ButtonContainer = styled.div`
  @media only screen and (max-width: 849px) {
    display: flex;
    flex: 1 1 auto;
    max-width: 130px;
  }
`;

const MenuItem: FunctionComponent<MenuItemProps> = ({
  name,
  color,
  link,
  isActive
}) => {
  return (
    <ButtonContainer>
      <StyledButton to={link} color={color} isActive={isActive}>
        {name}
      </StyledButton>
    </ButtonContainer>
  );
};

export default MenuItem;
