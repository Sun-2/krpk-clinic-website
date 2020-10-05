import styled from "styled-components";
import React, { FunctionComponent } from "react";
import { Paper } from "../Paper";
import { Header, Logo, LogoRoot, HeaderRoot, MenuSide, Name } from "../Header";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Root>
      <StyledPaper as={"main"}>
        <Header />
        {children}
      </StyledPaper>
    </Root>
  );
};

const Root = styled.div`
  flex-grow: 1;
  align-self: stretch;

  width: calc(100% - var(--scrollbar-width));
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const layoutWidth = "750px";

const StyledPaper = styled(Paper)`
  max-width: 100%;
  width: ${layoutWidth};
  min-height: 600px;
  border-width: 1px;
  position: relative;
  //border-radius: 100px 100px 0 0;
`;
