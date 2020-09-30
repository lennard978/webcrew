import React from "react";
import styled from "styled-components";
import BurgerBtn from "../../Rest/BurgerBtn";
import Menu from "./Menu";

export default function NavBar() {
  return (
    <NavContainer>
      <Menu />
      <BurgerBtn />
    </NavContainer>
  );
}

const NavContainer = styled.div`
  height: 50px;
  /* border-bottom: 1px solid lightgray; */
`;
