import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const HeaderWrapper = styled.div`
  text-align: center;
`;

export const HeaderIcon = styled.h1`
  color: #fff;
  font-size: 4.2rem;
  font-family: "Lobster";
`;

export const HeaderSpan = styled.span`
  color: #ef7c8e;
`;

export const HeaderExpandIcon = styled(ExpandMoreIcon)`
  color: #fff;
`;
