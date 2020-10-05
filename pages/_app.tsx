import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Head from "next/head";

console.log("_app");

function MyApp({ Component }) {
  const component = Component.layout ? (
    <Component.layout>
      <Component />
    </Component.layout>
  ) : (
    <Component />
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>{component}</div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
