import styled from "styled-components";
import { Paper } from "../../../Paper";
import React from "react";

export const Logo = () => (
  <LogoCenterPoint>
    <OrnamentalCircle src={"circle.png"}/>
    <LogoPaper as="a" href="/">
      <LogoImage src="logo-1.png" alt="" />
    </LogoPaper>
  </LogoCenterPoint>
);

export const logoSize = "240px";
export const LogoPaper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${logoSize};
  height: ${logoSize};
  padding: 8px;

  border-radius: 50%;
  background-color: white;
  user-select: none;
  border: 1px dashed #cacaca;
`;

export const OrnamentalCircle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(${logoSize} * 1.125);
  opacity: 0.5;
`;

export const LogoImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const LogoCenterPoint = styled.div`
  height: 0;
  width: 0;

  justify-self: center;
  align-self: center;
  position: relative;
`;
