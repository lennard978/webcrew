import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Social from "../../Rest/Social";

export default function Menu() {
  return (
    <>
      <MenuContainer>
        <ul style={{ listStyleType: "none", textAlign: "center" }}>
          <List>
            <StyledLink to="/">Home</StyledLink>
          </List>
          <List>
            <StyledLink to="/destination">Destination</StyledLink>
          </List>
          <List>
            <StyledLink to="/places">Places</StyledLink>
          </List>
          <List>
            <StyledLink to="/news">News</StyledLink>
          </List>
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
  width: calc(100vw - 50px);
`;

const StyledLink = styled(Link)`
  color: gold;
  font-size: 30px;
  text-decoration: none;
`;

const List = styled.li`
  margin: 20px 0;
`;
