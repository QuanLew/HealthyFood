import React, { useState, useEffect } from "react";
import { Collapse, IconButton } from "@mui/material";
// import { ExpandMore } from "@styled-icons/material-sharp";
import { Link as Scroll } from "react-scroll";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderIcon,
  HeaderSpan,
  HeaderExpandIcon,
} from "./HeaderElements";

const HeaderSlash = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <HeaderContainer id="header">
      <Collapse
        direction="up"
        in={checked}
        {...(checked ? { timeout: 800 } : {})}
        collapsedHeight={50}
      >
        <HeaderWrapper>
          <HeaderIcon>
            Welcome to <br />
            My <HeaderSpan>Food.</HeaderSpan>
          </HeaderIcon>
          <Scroll to="place-to-food" smooth={true}>
            <IconButton>
              <HeaderExpandIcon sx={{ fontSize: "3.5rem" }} />
            </IconButton>
          </Scroll>
        </HeaderWrapper>
      </Collapse>
    </HeaderContainer>
  );
};

export default HeaderSlash;
