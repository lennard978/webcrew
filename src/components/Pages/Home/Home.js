import React from "react";
import NavBar from "../Navigation/NavBar";
import styled from "styled-components";
import Back from "../../../assets/Images/home.jpg";
export default function Home() {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${Back});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;
