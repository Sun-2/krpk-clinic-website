import styled from "styled-components";
import { Paper } from "../Paper";
import React from "react";
import { Menu, MenuLink } from "../Menu";

export const Header = () => {
  return (
    <div>
      <hgroup>
        <Name>Przychodnia Psychiatryczna</Name>
        <City>w Krapkowicach</City>
      </hgroup>
      <NavRoot>
        <Menu>
          <MenuLink href={"/kontakt"}>Kontakt</MenuLink>
          <MenuLink href={"/kontakt"}>Adres</MenuLink>
          <MenuLink href={"/kontakt"}>Mapa</MenuLink>
        </Menu>
        <LogoRoot>
          <Logo src="logo-1.png" alt="" />
        </LogoRoot>
        <Menu side="right">
          <MenuLink href={"/kontakt"}>Poradnie specjalistyczne</MenuLink>
          <MenuLink href={"/kontakt"}>POZ</MenuLink>
          <MenuLink href={"/kontakt"}>Psychiatria</MenuLink>
        </Menu>
      </NavRoot>
      <Divider src="divider-1-gray.png"></Divider>
    </div>
  );
};

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.typography.decorativeFont};
  text-align: center;
  font-size: 5.5rem;
  color: #000000c2;
  margin-top: 50px;
`;

const City = styled.h2`
  font-family: ${({ theme }) => theme.typography.decorativeFont};
  text-align: center;
  font-size: 3.5rem;
  color: #000000c2;
  margin-top: -3rem;
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

export const NavRoot = styled(Paper)`
  margin-top: 55px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-left: -30px;
  margin-right: -30px;
  height: 158px;

  grid-gap: 20px;
`;

export const LogoRoot = styled(Paper)`
  border-radius: 50%;
  background-color: white;
  padding: 8px;
  width: 220px;
  height: 220px;

  user-select: none;

  margin-top: -40px;
  margin-bottom: -40px;

  border: 1px solid #cacaca;
`;

export const Logo = styled.img`
  height: 100%;
  width: 100%;
`;
