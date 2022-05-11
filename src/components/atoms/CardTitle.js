import React from "react";
import PropTypes from "prop-types";

/**
  - Text used as card's title
**/
export default function CardTitle({ title }) {
  return <div className="card-title">{title}</div>;
}

CardTitle.propTypes = {
  /** Tag's title */
  title: PropTypes.string.isRequired,
};
