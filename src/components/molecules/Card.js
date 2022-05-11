import React from "react";
import TagList from "./TagList";
import CardDescription from "../atoms/CardDescription";
import CardTitle from "../atoms/CardTitle";
import PropTypes from "prop-types";

/**
  - A card component
  - Composition of CardTitle, CardDescription and TagList
**/
export default function Card({ title, desc, tags }) {
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

Card.propTypes = {
  /** Tag's title */
  title: PropTypes.string.isRequired,
  /** Card's description */
  desc: PropTypes.string.isRequired,
  /** An array of tags with shape { title: String } */
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ).isRequired,
};
