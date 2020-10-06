import { Layout } from "../components/Layout";
import { Article } from "../components/Article";
import React from "react";
import { ArticleTitle } from "../components/Article/components/ArticleTitle";
import { ArticleContent } from "../components/Article/components/ArticleContent";
import { ArticleImage } from "../components/ArticleImage";

export default function ONas() {
  return (
    <>
      <ArticleTitle>O nas</ArticleTitle>
      <ArticleContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          corporis debitis, earum est ipsam laudantium magni minus modi
          necessitatibus nesciunt, non quam vel vero? Delectus eveniet excepturi
          explicabo id possimus?
        </p>
        <ArticleImage
          src={`https://picsum.photos/200/300?a=${Math.random()}`}
          height={330}
          width={230}
          alt=""
          style={{ float: "left" }}
        />
        <p>
          Et illo labore laborum minus molestias mollitia odit sunt. Accusamus
          adipisci dolor excepturi laboriosam libero modi neque quisquam. Beatae
          culpa cum esse ipsa neque nisi numquam quae sint temporibus
          voluptatum?
        </p>
        <p>
          Aliquid amet at atque aut dignissimos dolore dolorem doloribus earum
          eligendi eos eum ex excepturi, molestias, nulla obcaecati odit optio
          quasi quos recusandae sint tempore, veniam voluptatibus! Quisquam sit,
          soluta.
        </p>
        <p>
          Alias blanditiis earum libero natus perspiciatis repellat saepe sint
          temporibus. Adipisci debitis dignissimos distinctio dolorum enim, ex
          facere ipsam, ipsum iste laborum molestiae nam odit officia optio,
          quam unde veniam.
        </p>

        <p>
          A accusamus assumenda commodi cumque doloribus est id ipsam labore
          laborum possimus quaerat quam, recusandae rem rerum suscipit tempore
          tenetur voluptatum! Accusantium laboriosam laudantium maiores
          recusandae repellendus. Consequatur, doloribus, labore.
        </p>
        <p>
          Architecto aspernatur assumenda consequuntur, culpa deleniti error
          incidunt, modi praesentium quibusdam quo recusandae reprehenderit
          voluptas. Aliquam commodi cupiditate eaque eligendi, iusto minima nisi
          nostrum perspiciatis quaerat quo temporibus voluptas voluptatem.
        </p>
        <p>
          A accusamus architecto dolor enim error excepturi in optio porro
          provident sequi! Aliquam consequatur cupiditate eveniet facilis
          maiores nesciunt nostrum odio porro quae, quaerat quibusdam sint sit,
          sunt tempora vitae.
        </p>
        <ArticleImage
          src={`https://picsum.photos/300/200?a=${Math.random()}`}
          height={230}
          width={330}
          style={{ float: "right" }}
          alt=""
        />
        <p>
          Assumenda cupiditate distinctio eum excepturi labore libero magni,
          maxime molestias officia reiciendis, sapiente velit. Amet cumque
          dolorem explicabo illo maiores minus numquam officia, qui quibusdam
          quis, repellat tempore veniam voluptatum.
        </p>
        <p>
          A ad atque aut commodi debitis dolore dolores eaque error facilis
          incidunt ipsum magni, neque nesciunt nobis perferendis quo ratione
          rerum saepe sapiente similique suscipit tempore vero voluptate!
          Dignissimos, hic.
        </p>
        <p>
          Asperiores commodi, culpa deleniti exercitationem facilis, fuga iste
          nam nisi optio praesentium reprehenderit similique voluptate.
          Accusamus deleniti dicta incidunt iure magni, maxime optio quisquam
          quos recusandae, repellat sapiente vel, veritatis?
        </p>
      </ArticleContent>
    </>
  );
}

ONas.layout = Layout;
