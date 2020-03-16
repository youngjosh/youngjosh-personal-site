import React, { FunctionComponent } from "react";
import MenuItem from "./MenuItem";

export interface MenuBarsProps {}

const menuStyle = {
  alignItems: "center",
  justifyContent: "center",
  width: "150px"
};

// #3B27BA
// #E847AE
// #13CA91
// #FF9472

const menuItems = [
  {
    itemText: "About Me",
    key: "aboutme",
    color: "#3B27BA",
    link: "http://www.google.com"
  },
  {
    itemText: "Achievements",
    key: "mywork",
    color: "#E847AE",
    link: "http://www.google.com"
  },
  {
    itemText: "Thoughts",
    key: "blog",
    color: "#13CA91",
    link: "http://www.google.com"
  },
  {
    itemText: "Contact",
    key: "contact",
    color: "#FF9472",
    link: "http://www.google.com"
  },
  {
    itemText: "Github",
    key: "git",
    color: "black",
    link: "http://www.github.com"
  }
];

const MenuBars: FunctionComponent<MenuBarsProps> = () => {
  return (
    <div style={menuStyle}>
      {menuItems.map(item => (
        <div>
          <MenuItem key={item.key} {...item} />
        </div>
      ))}
    </div>
  );
};

export default MenuBars;
