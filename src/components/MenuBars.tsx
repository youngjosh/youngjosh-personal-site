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
  @media only screen and (min-width: 850px) {
    width: 150px;
    position: fixed;
    margin-left: -150px;
  }
  @media only screen and (max-width: 849px) {
    position: fixed;
    display: flex;
    flex-flow: row wrap;
    margin-top: -34px;
    width: inherit;
    justify-content: center;
  }
`;

const MenuBars: FunctionComponent<MenuBarsProps> = ({ menuItems }) => {
  let location = useLocation();

  return (
    <Div>
      {menuItems.map(item => (
        <MenuItem
          key={item.key}
          isActive={location.pathname === item.link}
          {...item}
        />
      ))}
    </Div>
  );
};

export default MenuBars;
