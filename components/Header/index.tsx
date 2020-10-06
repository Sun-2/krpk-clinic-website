import styled from "styled-components";
import { Paper } from "../Paper";
import React, { memo, useMemo } from "react";
import { animated, config, useTrail } from "react-spring";
import { HeaderSideMenu, MenuLink } from "./components/HeaderSideMenu";
import { Logo, LogoCenterPoint, LogoPaper, logoSize } from "./components/Logo";

export const Header = memo(() => {
  return (
    <div>
      <hgroup>
        <Name>Przychodnia Psychiatryczna</Name>
        <City>w Krapkowicach</City>
      </hgroup>
      <HeaderRoot id="header">
        <HeaderSideMenu>
          <MenuLink href={"/o-nas"}>O nas</MenuLink>
          <MenuLink href={"/zajecia"}>Zajęcia</MenuLink>
          <MenuLink href={"/kontakt"}>Kontakt</MenuLink>
        </HeaderSideMenu>
        <Logo />
        <HeaderSideMenu>
          <MenuLink side="right" href={"/zakladka1"}>
            Zakładka
          </MenuLink>
          <MenuLink side="right" href={"/zakladka2"}>
            Zakładka 2
          </MenuLink>
          <MenuLink side="right" href={"/zakladka3"}>
            Coś innego
          </MenuLink>
        </HeaderSideMenu>
      </HeaderRoot>
      <Divider id="header-divider" src="divider-1-gray.png" />
    </div>
  );
});

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.typography.families.decorative};
  text-align: center;
  font-size: 5.5rem;
  color: #000000c2;
  margin-top: 40px;
  user-select: none;
`;

const City = styled.h2`
  font-family: ${({ theme }) => theme.typography.families.decorative};
  text-align: center;
  font-size: 3.5rem;
  color: #000000c2;
  margin-top: -3rem;
  user-select: none;
`;

const Divider = styled.img`
  display: block;
  max-width: 90%;

  margin: 2.7rem auto 0 auto;
  transform: rotateZ(180deg);
  user-select: none;
`;

const headerRootWidth = "840px";
export const HeaderRoot = styled(Paper)`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: 1fr ${logoSize} 1fr;
  margin-left: calc((${headerRootWidth} - 100%) / -2);
  margin-right: calc((${headerRootWidth} - 100%) / -2);

  width: ${headerRootWidth};

  height: 160px;
  border: 2px solid #ffffff7d;
  box-shadow: -1px 6px 6px #181e3c73;

  &::after {
    background-image: url("floral3.jpg");
    filter: grayscale(50%);
    opacity: 0.075;
  }
`;
