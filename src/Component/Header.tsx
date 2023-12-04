import React from "react";

import { StyledHeader } from "../css/Header";

import Menu from "./Menu";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const options = ["대시보드"];

  return (
    <StyledHeader>
      <Menu options={options} />
      <span>{title}</span>
    </StyledHeader>
  );
};

export default Header;
