import React from "react";

/**
  - Use a TagPill for attributing tags to a Card component.
- A tag name should always be present when using TagPill.
**/
export type Tag = {
  /** Short text used as tags's title */
  title: string;
};
export default function TagPill(props: Tag) {
  const { title } = props;

  return <div className="card-tag">{title}</div>;
}
