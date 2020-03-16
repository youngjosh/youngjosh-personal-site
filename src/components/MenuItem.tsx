import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export interface MenuItemProps {
  itemText: string;
  color: string;
  link: string;
}

const StyledButton = styled(Link)`
  width: 100%;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid ${props => props.color};
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: ${props => props.color};
  text-align: center;
  transition: all 0.2s;
  font: 400 13.3333px Arial;
  background-color: white;

  &:hover {
    color: #ffffff;
    background-color: ${props => props.color};
    border: 0.1em solid ${props => props.color};
  }
`;

const MenuItem: FunctionComponent<MenuItemProps> = ({
  itemText,
  color,
  link
}) => {
  return (
    <StyledButton to={link} color={color} className="MenuItemButton">
      {itemText}
    </StyledButton>
  );
};

export default MenuItem;
