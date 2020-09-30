import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Social() {
  return (
    <SocialContainer>
      <SocialList>
        <SocialLi>
          <SocialAnchor href="">
            <FaLinkedin />
          </SocialAnchor>
        </SocialLi>
        <SocialLi>
          <SocialAnchor href="">
            <FaGithub />
          </SocialAnchor>
        </SocialLi>
        <SocialLi>
          <SocialAnchor href="">
            <FaFacebook />
          </SocialAnchor>
        </SocialLi>
      </SocialList>
    </SocialContainer>
  );
}

const SocialContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(80vw - 50px);
  height: 50px;
  border-top: 1px solid lightgray;
`;

const SocialAnchor = styled.a`
  color: white;
  font-size: 20px;
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`;

const SocialLi = styled.li`
  margin: 15px 15px 0 15px;
`;
