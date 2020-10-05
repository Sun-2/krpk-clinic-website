import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";

const Div = styled.div`
  padding: 36px 60px;
  font-family: "Cormorant Garamond";
  font-size: 1.9rem;
  line-height: 2.6rem;
  
  & > * + * {
    margin-top: 24px;
  }
  & > img {
    float: left;
    padding: 16px;
    margin: 16px;
    border: 1px dashed gray;
  }
`;
export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Przychodnia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            corporis debitis, earum est ipsam laudantium magni minus modi
            necessitatibus nesciunt, non quam vel vero? Delectus eveniet
            excepturi explicabo id possimus?
          </div>
          <img src="https://picsum.photos/200/300?a=3" alt="" />
          <div>
            Et illo labore laborum minus molestias mollitia odit sunt. Accusamus
            adipisci dolor excepturi laboriosam libero modi neque quisquam.
            Beatae culpa cum esse ipsa neque nisi numquam quae sint temporibus
            voluptatum?
          </div>
          <div>
            Aliquid amet at atque aut dignissimos dolore dolorem doloribus earum
            eligendi eos eum ex excepturi, molestias, nulla obcaecati odit optio
            quasi quos recusandae sint tempore, veniam voluptatibus! Quisquam
            sit, soluta.
          </div>
          <div>
            Alias blanditiis earum libero natus perspiciatis repellat saepe sint
            temporibus. Adipisci debitis dignissimos distinctio dolorum enim, ex
            facere ipsam, ipsum iste laborum molestiae nam odit officia optio,
            quam unde veniam.
          </div>

          <div>
            A accusamus assumenda commodi cumque doloribus est id ipsam labore
            laborum possimus quaerat quam, recusandae rem rerum suscipit tempore
            tenetur voluptatum! Accusantium laboriosam laudantium maiores
            recusandae repellendus. Consequatur, doloribus, labore.
          </div>
          <img
            src="https://picsum.photos/300/200?a=2"
            style={{ float: "right" }}
            alt=""
          />
          <div>
            Architecto aspernatur assumenda consequuntur, culpa deleniti error
            incidunt, modi praesentium quibusdam quo recusandae reprehenderit
            voluptas. Aliquam commodi cupiditate eaque eligendi, iusto minima
            nisi nostrum perspiciatis quaerat quo temporibus voluptas
            voluptatem.
          </div>
          <div>
            A accusamus architecto dolor enim error excepturi in optio porro
            provident sequi! Aliquam consequatur cupiditate eveniet facilis
            maiores nesciunt nostrum odio porro quae, quaerat quibusdam sint
            sit, sunt tempora vitae.
          </div>
          <div>
            Assumenda cupiditate distinctio eum excepturi labore libero magni,
            maxime molestias officia reiciendis, sapiente velit. Amet cumque
            dolorem explicabo illo maiores minus numquam officia, qui quibusdam
            quis, repellat tempore veniam voluptatum.
          </div>
          <div>
            A ad atque aut commodi debitis dolore dolores eaque error facilis
            incidunt ipsum magni, neque nesciunt nobis perferendis quo ratione
            rerum saepe sapiente similique suscipit tempore vero voluptate!
            Dignissimos, hic.
          </div>
          <div>
            Asperiores commodi, culpa deleniti exercitationem facilis, fuga iste
            nam nisi optio praesentium reprehenderit similique voluptate.
            Accusamus deleniti dicta incidunt iure magni, maxime optio quisquam
            quos recusandae, repellat sapiente vel, veritatis?
          </div>
        </Div>
      </Layout>{" "}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;
