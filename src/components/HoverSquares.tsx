import React from "react";
import { useAppSelector } from "../hooks/redux";
import HoverSquaresItem from "./HoverSquaresItem";

const HoverSquares = () => {
  const { hoverSquares } = useAppSelector((state) => state.hoverSquaresSlice);

  return (
    <div>
      <h2>Hover squares</h2>

      {hoverSquares?.map((item, index) => (
        <HoverSquaresItem item={item} key={index} />
      ))}
    </div>
  );
};

export default HoverSquares;
