import styled from "styled-components";
import React, { forwardRef, Ref } from "react";

export const Paper = styled.div`
  position: relative;
  border: 1px solid #0000004f;

  background-color: white;

  background-repeat: repeat;
  background-size: auto;
  box-shadow: 2px 4px 7px #00000066;
  z-index: 100;

  isolation: isolate;

  &::after {
    border-radius: inherit;
    background-image: url("paper.jpg");
    background-repeat: repeat;
    content: "";
    position: absolute;
    z-index: -500;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.13;
  }
`;
