import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxContainer = styled.div`
  width: 340px;
  min-height: 678px;
  display: flex;
  flex-direction: column;
  border-radius: 17px;
  background-color: #fff;
  opacity: 0.9;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  top: 150px;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 250%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

export const BackDrop = styled(motion.div)`
  width: 160%;
  height: 585px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 60%;
  transform: rotate(65deg);
  top: -320px;
  right: -85px;
  background: rgb(255, 93, 93);
  background: linear-gradient(
    90deg,
    rgba(255, 93, 93, 1) 20%,
    rgba(255, 140, 140, 1) 100%,
    rgba(255, 140, 140, 1) 100%
  );
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-top: 19%;
  margin-left: 5%;
`;

export const HeaderText = styled.h2`
  font-size: 39px;
  font-weight: 450;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

export const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  z-index: 10;
  margin: 0;
  margin-top: 10px;
`;

export const InnerContainer = styled.div`
  width: 77%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

export const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1550px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

export const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};
