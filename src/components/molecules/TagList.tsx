import React from "react";
import TagPill, { Tag } from "../atoms/TagPill";

export type TagListProps = {
  /** An array representing a list of tags */
  tags: Tag[];
};

export default function TagList(props: TagListProps) {
  const { tags } = props;

  return (
    <div className="tag-list">
      {tags.map((t, index) => (
        <TagPill title={t.title} key={index} />
      ))}
    </div>
  );
}
