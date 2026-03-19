'use client';

import React from "react";

const CARD_GAP = "2rem";

const columnsForCount = new Map<number, number>([
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 3],
  [6, 3],
  [7, 3],
  [8, 4],
  [9, 3],
  [10, 3],
  [11, 3],
  [12, 3],
  [13, 3],
  [14, 3],
  [15, 3],
  [16, 4],
]);

function getColumns(count: number) {
  if (columnsForCount.has(count)) {
    return columnsForCount.get(count) as number;
  }
  return 3;
}

interface CardGridProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardGrid({ children, className = "" }: CardGridProps) {
  const kids = React.Children.toArray(children);
  const total = kids.length;
  const columns = getColumns(total);

  const rows: React.ReactNode[][] = [];
  for (let i = 0; i < total; i += columns) {
    rows.push(kids.slice(i, i + columns));
  }

  return (
    <div className={`card-grid ${className}`} style={{ "--card-gap": CARD_GAP } as React.CSSProperties}>
      {rows.map((rowItems, rowIndex) => {
        const isLastRow = rowIndex === rows.length - 1;
        const shouldCenter =
          isLastRow && columns === 3 && rowItems.length > 0 && rowItems.length < 3;
        return (
          <div
            key={`row-${rowIndex}`}
            className={`card-row ${shouldCenter ? "card-row-center" : "card-row-grid"}`}
            style={{ "--columns": columns } as React.CSSProperties}
          >
            {rowItems}
          </div>
        );
      })}
    </div>
  );
}
