import React from "react";
import Card, { CardType } from "../molecules/Card";
/** just a cute image to show when component is empty */
import sadXiao from "../../images/sad-xiao-log-bao.gif";

export type ScrollBoxProps = {
  /** Title of the scroll box */
  scrollBoxTitle: string;
  /** Boolean representing loading state of component */
  loading: boolean;
  /** An array of cards plus id */
  cards: (CardType & { id: string })[];
};

/**
  - Component representing a group of cards
**/
export default function ScrollBox(props: ScrollBoxProps) {
  const { scrollBoxTitle, loading, cards } = props;

  /** skeleton card to use in loading state */
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

  /** loading state */
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

  /** empty state */
  if (!loading && cards.length === 0) {
    return (
      <div className="scroll-box is-empty">
        <h2 className="scroll-box-title">{scrollBoxTitle}</h2>
        <img src={sadXiao} alt="sad xiao" />
      </div>
    );
  }
  /** default state */
  return (
    <div className="scroll-box-container">
      <h2 className="scroll-box-title">{scrollBoxTitle}</h2>
      {/* tabindex fixes a11y issue: scrollable region must have keyboard access */}
      <div className="scroll-box" tabIndex={0}>
        {cards.map((card) => (
          <Card
            title={card.title}
            desc={card.desc}
            tags={card.tags}
            key={card.id}
            handleClick={card.handleClick}
          />
        ))}
      </div>
    </div>
  );
}
