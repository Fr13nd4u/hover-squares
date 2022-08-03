import React, { FC } from "react";
import styled from "styled-components";

interface IHoverSquaresItem {
  item: number;
}

const HoverSquaresItem: FC<IHoverSquaresItem> = ({ item }) => {
  const row = Math.floor(item / 5) + 1;
  const coll = (item % 5) + 1;

  return (
    <ItemWrapper>
      row {row} coll {coll}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.p`
  padding: 15px 10px;
  margin: 10px 0;
  background: aliceblue;
  color: chocolate;
  font-weight: 600;
  border: 1px solid sandybrown;
  border-radius: 5px;
`;

export default HoverSquaresItem;
