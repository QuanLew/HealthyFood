import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-left: 33px;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
`;

export const MutedLink = styled.a`
  font-size: 14px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 700;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 15px;
  color: rgba(255, 93, 93, 0.6);
  font-weight: 600;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.6);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200 ease-in-out;
  font-size: 15px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(255, 93, 93, 0.6);
  }
`;

export const SubmitButton = styled.button`
  width: 110%;
  padding: 10px 10%;
  margin-left: 0.2em;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(255, 93, 93, 0.8);
  background: linear-gradient(
    90deg,
    rgba(255, 93, 93, 0.8) 20%,
    rgba(255, 140, 140, 0.7) 100%,
    rgba(255, 140, 140, 0.8) 100%
  );

  &:hover {
    filter: brightness(1.2);
  }
`;
