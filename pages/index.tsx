import Head from "next/head";
import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Przychodnia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ex
        nesciunt officia quos! Commodi ex exercitationem ipsum maiores similique
        veritatis! Aliquid consequatur dolores eius facere facilis fugiat id
        laudantium, quo? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Accusamus ex nesciunt officia quos! Commodi ex exercitationem
        ipsum maiores similique veritatis! Aliquid consequatur dolores eius
        facere facilis fugiat id laudantium, quo? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Accusamus ex nesciunt officia quos!
        Commodi ex exercitationem ipsum maiores similique veritatis! Aliquid
        consequatur dolores eius facere facilis fugiat id laudantium, quo?
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
