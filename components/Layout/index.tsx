import styled from "styled-components";
import React from "react";
import { Paper } from "../Paper";

export const Layout = ({ children }) => {
  return (
    <Root>
      <StyledPaper as={"main"}>
        <Name>
          Przychodnia psychiatryczna
          <br /> w Krapkowicach
        </Name>
        <MenuRoot>
          <MenuSide>a</MenuSide>
          <LogoRoot>
            <Logo src="head.png" alt="" />
          </LogoRoot>
          <MenuSide>b</MenuSide>
        </MenuRoot>
        asd{children}
      </StyledPaper>
    </Root>
  );
};

const Name = styled.h1`
  font-family: ${({ theme }) => theme.typography.decorativeFont};
  text-align: center;
  font-size: 5rem;
`;

const Root = styled.div`
  flex-grow: 1;
  align-self: stretch;

  width: calc(100% - var(--scrollbar-width));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuSide = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const MenuRoot = styled(Paper)`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-left: -30px;
  margin-right: -30px;

  grid-gap: 20px;
`;

const LogoRoot = styled(Paper)`
  border-radius: 50%;
  background-color: white;
  padding: 8px;
  width: 200px;
  height: 200px;

  margin-top: -40px;
  margin-bottom: -40px;

  border: 1px solid #cacaca;
`;

const Logo = styled.img`
  height: 100%;
  width: 100%;
`;

const StyledPaper = styled(Paper)`
  //max-width: min(100vw, 800px);
  max-width: 100%;

  width: 800px;

  min-height: 600px;

  margin-top: 200px;

  position: relative;
`;
