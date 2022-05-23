import styled from "styled-components";
import Card from "@mui/material/Card";

export const FoodContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CardContainer = styled(Card)`
  max-width: 30rem;
  font-family: "Lobster";
  font-size: 17px;
  margin: 50px;
`;
