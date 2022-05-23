import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  Navh1,
  Navspan,
  NavBtn,
  NavBtnLink,
} from "./NavbarSlashElements";

const NavSlash = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/">
              <Navh1>
                My
                <Navspan>Food.</Navspan>
              </Navh1>
            </NavLogo>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavSlash;
