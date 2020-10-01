import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BurgerBtn from "../../Rest/BurgerBtn";
import Menu from "./Menu";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const showMenu = () => {
    setIsOpen(!isOpen);
    setShow(true);
  };
  const variants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };
  return (
    <NavContainer>
      {show ? (
        <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
          <Menu />
        </motion.nav>
      ) : null}
      <BurgerBtn onClick={showMenu} />
    </NavContainer>
  );
}

const NavContainer = styled.div`
  height: 50px;
  /* border-bottom: 1px solid lightgray; */
`;
