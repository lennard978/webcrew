import React from "react";
import styled from "styled-components";

export default function BurgerBtn({ onClick }) {
  return (
    <BurgerContainer onClick={onClick}>
      <BurgerLine />
      <BurgerLine />
    </BurgerContainer>
  );
}

const BurgerContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  height: 50px;
  width: 50px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  background: rgba(0, 0, 0, 0.4);
`;

const BurgerLine = styled.div`
  border-bottom: 1px solid lightgray;
  margin: 3px 0;
  width: 30px;
`;
