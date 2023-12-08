import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";

import { StyledHeader } from "../css/Header";
import { MenuButton, StyledMenu } from "../css/Menu";
import { menuProps } from "../pages/Home";

interface HeaderProps {
  title: string;
  menu: menuProps[];
}

const Header = ({ title, menu }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <MenuButton onClick={handleClick}>
        {title}
        <KeyboardArrowDownIcon />
      </MenuButton>
      <StyledMenu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menu.map((menu, index) => (
          <MenuItem
            key={index}
            selected={menu.menu === title}
            onClick={() => {
              handleClose();
              menu.onClick();
            }}
          >
            {menu.menu}
          </MenuItem>
        ))}
      </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
