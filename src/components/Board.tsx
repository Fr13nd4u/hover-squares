import React, { FC } from "react";
import styled from "styled-components";
import Cell from "./Cell";

interface IBoard {
  field: number | null;
}

const Board: FC<IBoard> = ({ field }) => (
  <BoardWrapper field={field}>
    {field &&
      Array.from({ length: field }, (_, index) => (
        <Cell index={index} key={index} />
      ))}
  </BoardWrapper>
);

const BoardWrapper = styled.div<any>`
  width: calc(64px * 5);
  height: calc(64px * ${({ field }) => field} / 5);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid black;
`;

export default Board;
