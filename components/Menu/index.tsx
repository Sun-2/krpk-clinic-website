import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import styled, { DefaultTheme } from "styled-components";
import Link, { LinkProps } from "next/link";
import { MenuSide } from "../Header";
import { makeCssTuple } from "../../utils/makeCssTuple";

export type MenuSide = "left" | "right";

export const Menu: FunctionComponent = (props) => {
  const { children, ...rest } = props;
  return <Root {...rest}>{children}</Root>;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`;

export const MenuLink: FunctionComponent<LinkProps & { side?: MenuSide }> = (
  props
) => {
  const { children, side, ...rest } = props;
  return (
    <>
      <LinksDivider side={side} />
      <Link {...rest} passHref>
        <StyledLink side={side}>{children}</StyledLink>
      </Link>
    </>
  );
};
MenuLink.defaultProps = {
  side: "left",
};

const StyledLink = styled.a<{ side: MenuSide }>`
  color: black;
  font-family: ${({ theme }) => theme.typography.decorativeFont};
  text-decoration: none;
  font-size: 3rem;
  letter-spacing: 0.5px;
  position: relative;

  flex-grow: 1;

  margin: ${({ theme, side }) =>
    makeCssTuple(
      side === "left" ? [0, 6, 0, 0] : [0, 0, 0, 6],
      "px",
      theme.spacing
    )};

  display: flex;
  align-items: center;
  justify-content: ${({ side }) =>
    side === "left" ? "flex-end" : "flex-start"};
`;
StyledLink.defaultProps = {
  side: "left",
};

export const LinksDivider = styled.div<{ side: MenuSide }>`
  &:first-child {
    display: none;
  }
  &:not(:first-child) {
    align-self: ${({ side }) => (side === "left" ? "flex-end" : "flex-start")};
    ${({ side, theme }) =>
      `${side === "left" ? "margin-right" : "margin-left"}: ${theme.spacing(
        -3
      )}px`};

    height: 1px;
    width: 90%;
    border: 0 dashed gray;
    border-top-width: 1px;
  }
`;
