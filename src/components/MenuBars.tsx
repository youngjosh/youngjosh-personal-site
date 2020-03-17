import React, { FunctionComponent } from "react";
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

const menuStyle = {
  alignItems: "center",
  justifyContent: "center",
  width: "150px"
};

const MenuBars: FunctionComponent<MenuBarsProps> = ({ menuItems }) => {
  let location = useLocation();

  return (
    <div style={menuStyle}>
      {menuItems.map(item => (
        <MenuItem
          key={item.key}
          isActive={location.pathname === item.link}
          {...item}
        />
      ))}
    </div>
  );
};

export default MenuBars;
