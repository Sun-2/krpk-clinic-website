import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import styled, { DefaultTheme } from "styled-components";
import Link, { LinkProps } from "next/link";
import { cssArray } from "../../../../utils/cssArray";
import { animated, config, useSpring } from "react-spring";
import { useRouter } from "next/router";

export type MenuSide = "left" | "right";

export const HeaderSideMenu: FunctionComponent = (props) => {
  const { children, ...rest } = props;
  return <Root {...rest}>{children}</Root>;
};

const Root = styled.div`
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`;

export const MenuLink: FunctionComponent<LinkProps & { side?: MenuSide }> = (
  props
) => {
  const { children, side, ...rest } = props;

  const router = useRouter();
  const isSelected = Boolean(router?.asPath.startsWith(props.href.toString()));
  console.log(isSelected);

  const enterProps = useSpring({
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
    config: config.slow,
  });

  const onClick = (e) => {
    const elem = document.getElementById("header-divider");
    if (elem && elem.getBoundingClientRect().top > window.scrollY) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <LinksDivider side={side} />
      <Link {...rest} passHref scroll={false}>
        <StyledLink side={side} style={enterProps} onClick={onClick}>
          <LinkText className={isSelected ? "active" : ""}>{children}</LinkText>
        </StyledLink>
      </Link>
    </>
  );
};
MenuLink.defaultProps = {
  side: "left",
};

const LinkText = styled.span`
  position: relative;

  &::after,
  &::before {
    display: none;
    background-image: url("select.svg");
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    top: 50%;
    opacity: 0.45;
    background-size: 100% 100%;
  }

  &::after {
    left: -20px;
    transform: translateY(-50%) rotateY(180deg);
  }
  &::before {
    right: -20px;
    transform: translateY(-50%) rotateY(0deg);
  }

  &.active,
  &:hover {
    &::after {
      display: inline-block;
    }

    &::before {
      display: inline-block;
    }
  }

  &:hover {
    &::after,
    &::before {
      opacity: 0.8;
    }
  }
`;

const StyledLink = styled(animated.div)<{ side: MenuSide }>`
  color: black;
  font-family: "Cormorant Upright", serif;
  text-decoration: none;
  font-size: 2rem;
  letter-spacing: 1px;
  position: relative;
  user-select: none;

  cursor: pointer;

  flex-grow: 1;

  transition: letter-spacing 0.2s ease-in-out;
  &:hover {
    letter-spacing: 2px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
StyledLink.defaultProps = {
  side: "left",
};

export const LinksDivider = styled.div<{ side: MenuSide }>`
  &:first-child {
    display: none;
  }

  &:not(:first-child) {
    align-self: center;
    background-image: url("sep2.svg");
    background-size: 100% 100%;
    transform: scaleX(${({ side }) => (side === "right" ? 1 : -1)});
    height: 5px;

    opacity: 0.4;
    width: 100%;
    max-width: 80%;
  }
`;
