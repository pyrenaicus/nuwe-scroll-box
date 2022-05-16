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
  /** short text used as title */
  title: string;
  /** Short text describing content of card */
  desc: string;
  /** An array representing a list of tags */
  tags: Tag[];
  /** an action fired when Card is clicked */
  handleClick: () => void;
};

export default function Card(props: CardType) {
  const { title, desc, tags, handleClick } = props;

  return (
    <div className="card" onClick={handleClick} tabIndex={0}>
      <CardTitle title={title} />
      <CardDescription desc={desc} />
      <TagList tags={tags} />
    </div>
  );
}
