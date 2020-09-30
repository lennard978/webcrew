import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Social from "../../Rest/Social";

export default function Menu() {
  return (
    <MenuContainer>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/destination">Destination</StyledLink>
      <StyledLink to="/places">Places</StyledLink>
      <StyledLink to="/news">News</StyledLink>
      <Social />
    </MenuContainer>
  );
}

const MenuContainer = styled.li`
  background: rgba(0, 0, 0, 0.7);
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: calc(80vw - 50px);
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 25px;
  text-decoration: none;
  margin: 5px 0;
`;
