import React from "react";

type Props = {
  /** Short text used as card's title */
  title: string;
};

export default function CardTitle(props: Props) {
  const { title } = props;

  return <div className="card-title">{title}</div>;
}
