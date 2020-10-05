import styled from "styled-components";
import React, {FunctionComponent, memo} from "react";
import { Paper } from "../Paper";
import { Header, HeaderRoot, Name } from "../Header";

export const Layout: FunctionComponent = memo(({ children }) => {
  return (
    <Root>
      <StyledPaper as={"main"}>
        <Header />
        {children}
      </StyledPaper>
    </Root>
  );
});

const Root = styled.div`
  flex-grow: 1;
  align-self: stretch;

  width: 100%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const layoutWidth = "750px";

// width: 400px; looks nicely on mobile
const StyledPaper = styled(Paper)`
  max-width: 100%;
  
  width: ${layoutWidth};

  min-height: 130vh;
  border-width: 1px;
  position: relative;
  
  &::after {
    background-image: url("floral3.jpg");
    filter: grayscale(100%);
    opacity: 0.1;
  }
`;
