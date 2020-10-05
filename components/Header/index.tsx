import styled from "styled-components";
import { Paper } from "../Paper";
import React from "react";
import { LinksDivider, Menu, MenuLink } from "../Menu";

export const Header = () => {
  return (
    <div>
      <hgroup>
        <Name>Przychodnia Psychiatryczna</Name>
        <City>w Krapkowicach</City>
      </hgroup>
      <HeaderRoot>
        <Menu>
          <MenuLink href={"/kontakt"}>Kontakt</MenuLink>
          <MenuLink href={"/kontakt"}>Adres</MenuLink>
          <MenuLink href={"/kontakt"}>Mapa</MenuLink>
        </Menu>
        <LogoRoot as="a" href="/">
          <Logo src="logo-1.png" alt="" />
        </LogoRoot>
        <Menu>
          <MenuLink side="right" href={"/kontakt"}>
            Poradnie specjalistyczne
          </MenuLink>
          <MenuLink side="right" href={"/kontakt"}>
            POZ
          </MenuLink>
          <MenuLink side="right" href={"/kontakt"}>
            Psychiatria
          </MenuLink>
        </Menu>
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

export const MenuSide = styled.div`
  width: 100%;
  height: 100%;
`;

const Divider = styled.img`
  display: block;
  max-width: 90%;
  margin: 45px auto 0 auto;
  transform: rotateZ(180deg);
  user-select: none;
`;

const headerRootWidth = "850px";
export const HeaderRoot = styled(Paper)`
  margin-top: 55px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-left: calc((${headerRootWidth} - 100%) / -2);
  margin-right: calc((${headerRootWidth} - 100%) / -2);

  width: ${headerRootWidth};

  border-style: dashed solid;
`;

export const LogoRoot = styled(Paper)`
  border-radius: 50%;
  background-color: white;

  padding: 8px;
  width: 230px;
  height: 230px;

  user-select: none;

  margin-top: -30px;
  margin-bottom: -30px;

  border: 1px dashed #cacaca;

  transform: scale(1);
  will-change: transform;
  transition: transform 0.2s linear;
  &:hover {
    transform: scale(1.01);
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: 100%;
`;
