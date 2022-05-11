import React from "react";
import TagPill from "../atoms/TagPill";
import PropTypes from "prop-types";

/**
  - A list of tags
**/
export default function TagList({ tags }) {
  return (
    <div className="tag-list">
      {tags.map((t, index) => (
        <TagPill title={t.title} key={index} />
      ))}
    </div>
  );
}

TagList.propTypes = {
  /** An array of tags with shape { title: String } */
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ).isRequired,
};
