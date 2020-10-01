import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Social from "../../Rest/Social";

export default function Menu() {
  return (
    <>
      <MenuContainer>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/destination">Destination</StyledLink>
          </li>
          <li>
            <StyledLink to="/places">Places</StyledLink>
          </li>
          <li>
            <StyledLink to="/news">News</StyledLink>
          </li>
          <Social />
        </ul>
      </MenuContainer>
    </>
  );
}

const MenuContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border-right: 1px solid black;
  position: absolute;
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
