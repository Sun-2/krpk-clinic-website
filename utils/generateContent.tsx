import { useState } from "react";
import React from "react";
import { ArticleImage } from "../components/ArticleImage";
import { loremIpsum } from "lorem-ipsum";

export const useGeneratedContent = (length) => {
  const [content] = useState(() =>
    Array.from({ length }).map(() => {
      const rand = Math.random();
      if (rand < 0.2) {
        const float = Math.random();
        const h = Math.floor(
          Math.random() * 350
        );
        const w = Math.floor(Math.random() * 350);
        return (
          <ArticleImage
            src={`https://picsum.photos/${h}/${w}?a=${Math.random()}`}
            style={{ float: float > 0.5 ? "left" : "right" }}
            width={w}
            height={h}
          />
        );
      } else {
        return <p>{loremIpsum({
          count:3,
          sentenceLowerBound: 5,
          sentenceUpperBound: 20
        })}</p>;
      }
    })
  );
  return content;
};
