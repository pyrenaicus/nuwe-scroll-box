import React from "react";

type Props = {
  /** Text used as card's description */
  desc: string;
};
export default function CardDescription(props: Props) {
  const { desc } = props;
  return <div className="card-description">{desc}</div>;
}
