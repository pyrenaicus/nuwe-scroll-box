import React from "react";
import TagList from "./TagList";
import { Tag } from "../atoms/TagPill";
import CardDescription from "../atoms/CardDescription";
import CardTitle from "../atoms/CardTitle";

/**
  - A card component
  - Composition of CardTitle, CardDescription and TagList
**/

export type CardType = {
  title: string;
  desc: string;
  tags: Tag[];
};

export default function Card(props: CardType) {
  const { title, desc, tags } = props;

  const handleClick = () => {
    console.log("clicked!");
  };
  return (
    <div className="card" onClick={handleClick}>
      <CardTitle title={title} />
      <CardDescription desc={desc} />
      <TagList tags={tags} />
    </div>
  );
}
