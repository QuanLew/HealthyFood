import React from "react";
import { CssBaseline } from "@mui/material";
import { Container } from "./SlashpageElements";
import NavSlash from "../Navbar/index1";
import HeaderSlash from "../Header";
import TypeFood from "../FoodCard";

const Slashpage = () => {
  return (
    <Container>
      <CssBaseline />
      <NavSlash />
      <HeaderSlash />
      <TypeFood />
    </Container>
  );
};

export default Slashpage;
