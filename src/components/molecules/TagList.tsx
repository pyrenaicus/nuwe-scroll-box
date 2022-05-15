import React from "react";
import TagPill, { Tag } from "../atoms/TagPill";

export type TagListProps = {
  /** An array representing a list of tags */
  tags: Tag[];
};

export default function TagList(props: TagListProps) {
  const { tags } = props;
  /** TagList is limited to 3 tags */
  const slicedTags = tags.length > 3 ? tags.slice(0, 3) : tags;

  return (
    <div className="tag-list">
      {slicedTags.map((t, index) => (
        // Using index as key value, as the ordering is not important
        // Adding an id to a tag seems overkill right now
        <TagPill title={t.title} key={index} />
      ))}
    </div>
  );
}
