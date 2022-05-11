import React from "react";
import Card from "../molecules/Card";
import PropTypes from "prop-types";
import sadXiao from "../../images/sad-xiao-log-bao.gif";

/**
  - Component representing a group of cards
**/
export default function ScrollBox({ scrollBoxTitle, cards, loading }) {
  const CardLoading = (
    <div className="card is-loading">
      <div className="card-title"></div>
      <div className="card-description"></div>
      <div className="tag-list">
        <div className="card-tag"></div>
        <div className="card-tag"></div>
      </div>
    </div>
  );
  if (loading) {
    return (
      <div className="scroll-box-container">
        <h2 className="scroll-box-title">{scrollBoxTitle}</h2>
        <div className="scroll-box">
          {CardLoading}
          {CardLoading}
          {CardLoading}
          {CardLoading}
        </div>
      </div>
    );
  }

  if (!loading && cards.length === 0) {
    return (
      <div className="scroll-box is-empty">
        <img src={sadXiao} alt="sad xiao" />
        <h3>No gifts found!</h3>
      </div>
    );
  }

  return (
    <div className="scroll-box-container">
      <h2 className="scroll-box-title">{scrollBoxTitle}</h2>
      {/* tabindex fixes a11y issue: scrollable region must have keyboard access */}
      <div class="scroll-box" tabindex="0">
        {cards.map((card, index) => (
          <Card
            title={card.title}
            desc={card.desc}
            tags={card.tags}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

ScrollBox.propTypes = {
  loading: PropTypes.bool,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};
