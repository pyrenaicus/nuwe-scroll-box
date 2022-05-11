import React from "react";
import PropTypes from "prop-types";

/**
  - Use a TagPill for attributing tags to a Card component.
- A tag name should always be present when using TagPill.
**/
export default function TagPill({ title }) {
  return <div className="card-tag">{title}</div>;
}

TagPill.propTypes = {
  /** Tag's title */
  title: PropTypes.string.isRequired,
};
