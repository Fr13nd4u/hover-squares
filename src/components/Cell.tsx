import React, { FC, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import {
  removeHoverSquares,
  setHoverSquares,
} from "../store/reducers/ActionCreators";
import { COLORS } from "../styles/theme";

interface ICell {
  index: number;
}

const Cell: FC<ICell> = ({ index }) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useAppDispatch();

  const onHoverHandle = () => {
    setIsHover(!isHover);
    !isHover
      ? dispatch(setHoverSquares(index))
      : dispatch(removeHoverSquares(index));
  };

  return <CellWrapper onMouseEnter={onHoverHandle} isHover={isHover} />;
};

const CellWrapper = styled.div<any>`
  border: 0.5px solid black;
  background: ${({ isHover }) => (isHover ? COLORS.HOVERED : COLORS.PRIMARY)};
`;

export default Cell;
