import { Menu, MenuLink } from "../index";
import React from "react";
import { addDecorator } from "@storybook/react";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export default {
  title: "Menu",
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    ),
  ],
};

export const Menu1 = () => (
  <Menu>
    <MenuLink href={"asd"}>Kontakt</MenuLink>
    <MenuLink href={"asd"}>Adres</MenuLink>
    <MenuLink href={"asd"}>Mapa</MenuLink>
  </Menu>
);
