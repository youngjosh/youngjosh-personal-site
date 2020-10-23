import React, { FunctionComponent } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";

export interface MenuBarsProps {
  menuItems: Array<{
    name: string;
    key: string;
    color: string;
    link: string;
  }>;
}

const Div = styled.div`
  @media only screen and (min-width: ${(props) =>
      props.theme.transitionNav + 1}px) {
    width: ${(props) => props.theme.sideNavWidth}px;
    position: fixed;
    margin-left: calc(
      calc(50% - calc(50vw - 50%)) -
        ${(props) => props.theme.sideNavWidth + props.theme.contentWidth / 2}px
    );
  }
  @media only screen and (max-width: ${(props) =>
      props.theme.transitionNav}px) {
    position: fixed;
    display: flex;
    flex-flow: row wrap;
    margin-top: -50px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    justify-content: center;
  }
`;

const MenuBars: FunctionComponent<MenuBarsProps> = ({ menuItems }) => {
  let location = useLocation();

  return (
    <Div>
      {menuItems.map((item) => (
        <MenuItem isActive={location.pathname === item.link} {...item} />
      ))}
    </Div>
  );
};

export default MenuBars;
