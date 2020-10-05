import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import styled, { DefaultTheme } from "styled-components";
import Link, { LinkProps } from "next/link";
import { MenuSide } from "../Header";

export type MenuSide = "left" | "right";

export const Menu: FunctionComponent<{ side?: MenuSide }> = (props) => {
  const { children, side, ...rest } = props;
  return (
    <Root side={side!} {...rest}>
      {children}
    </Root>
  );
};
Menu.defaultProps = {
  side: "left",
};

const Root = styled.div<{ side: MenuSide }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  align-items: ${(props) =>
    props.side === "left" ? "flex-start" : "flex-end"};
  
  padding: ${({ theme, side }) =>
    (side === "left" ? [2, 1, 2, 6] : [2, 6, 2, 1])
      .map(theme.spacing)
      .join(" ")};
`;

export const MenuLink: FunctionComponent<LinkProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Link {...rest} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  color: black;
  font-family: "Cormorant Garamond", serif;
  text-decoration: none;
  font-size: 2rem;
  position: relative;
`;