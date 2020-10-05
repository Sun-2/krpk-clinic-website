import styled from "styled-components";
import { Paper } from "../Paper";
import React from "react";
import { HeaderSideMenu, MenuLink } from "./components/HeaderSideMenu";
import { Logo, LogoCenterPoint, LogoPaper, logoSize } from "./components/Logo";
import {media} from "../../styles/media";

export const Header = () => {
  return (
    <div>
      <hgroup>
        <Name>Przychodnia Psychiatryczna</Name>
        <City>w Krapkowicach</City>
      </hgroup>
      <HeaderRoot id="header">
        <HeaderSideMenu>
          <MenuLink href={"/kontakt"}>Kontakt</MenuLink>
          <MenuLink href={"/kontakt"}>Adres</MenuLink>
          <MenuLink href={"/kontakt"}>Mapa</MenuLink>
        </HeaderSideMenu>
        <Logo />
        <HeaderSideMenu>
          <MenuLink side="right" href={"/kontakt"}>
            Poradnie specjalistyczne
          </MenuLink>
          <MenuLink side="right" href={"/kontakt"}>
            POZ
          </MenuLink>
          <MenuLink side="right" href={"/kontakt"}>
            Psychiatria
          </MenuLink>
        </HeaderSideMenu>
      </HeaderRoot>
      <Divider src="divider-1-gray.png" />
    </div>
  );
};

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.typography.decorativeFont};
  text-align: center;
  font-size: 5.5rem;
  color: #000000c2;
  margin-top: 40px;
  user-select: none;
`;

const City = styled.h2`
  font-family: ${({ theme }) => theme.typography.decorativeFont};
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

const headerRootWidth = "850px";
export const HeaderRoot = styled(Paper)`
  margin-top: 7rem;
  display: grid;
  grid-template-columns: 1fr ${logoSize} 1fr;
  margin-left: calc((${headerRootWidth} - 100%) / -2);
  margin-right: calc((${headerRootWidth} - 100%) / -2);

  width: ${headerRootWidth};

  height: 160px;
  border-style: dashed solid;
`;
