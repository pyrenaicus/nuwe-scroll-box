import React from "react";
import PropTypes from "prop-types";

/**
  - Text used as card's description
**/
export default function CardDescription({ desc }) {
  return <div className="card-description">{desc}</div>;
}

CardDescription.propTypes = {
  /** Card's description */
  desc: PropTypes.string.isRequired,
};
