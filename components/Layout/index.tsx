import styled from "styled-components";
import React, {
  FunctionComponent,
  memo,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { Paper } from "../Paper";
import { Header, HeaderRoot, Name } from "../Header";
import { useSpring, animated, useTransition, config } from "react-spring";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

export const Layout: FunctionComponent = ({ children }) => {
  const router = useRouter();
  const firstPathSegment = useMemo(
    () => router.pathname.match(/\/.*?(\/|$)/)![0],
    [router.pathname]
  );

  const transition = useTransition(children, (item) => firstPathSegment, {
    from: { opacity: 0, position: "static", height: "auto" },
    enter: { opacity: 1, position: "static", height: "auto" },
    leave: { opacity: 0, position: "absolute", height: 0 },
    unique: true,
    immediate: (key) => key === "height",
    config: config.gentle
  });

  return (
    <Root>
      <StyledPaper as={"main"}>
        <Header />
        {transition.map(({ item, key, props }) => (
          <Wrapper key={key} style={props}>
            {item}
          </Wrapper>
        ))}
      </StyledPaper>
    </Root>
  );
};
const Wrapper = styled(animated.div)`
  overflow: hidden;
  min-height: 100vh;
`;

const Root = styled.div`
  flex-grow: 1;
  align-self: stretch;

  width: 100%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const layoutWidth = "750px";

// width: 400px; looks nicely on mobile
const StyledPaper = styled(Paper)`
  max-width: 100%;

  width: ${layoutWidth};

  border-width: 0 1px;
  position: relative;

  &::after {
    background-image: url("floral3.jpg");
    filter: grayscale(100%);
    opacity: 0.1;
  }
`;
