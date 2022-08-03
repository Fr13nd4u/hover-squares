import React, { FC, useState } from "react";
import GlobalStyle from "./styles/global";
import styled from "styled-components";

import Board from "./components/Board";
import PickMode from "./components/PickMode";
import HoverSquares from "./components/HoverSquares";

const App: FC = () => {
  const [field, setField] = useState();
  return (
    <AppWrapper>
      <GlobalStyle />
      <div>
        <PickMode setField={setField} />
        {field && <Board field={field} />}
      </div>
      <HoverSquares />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  margin: 100px auto;
`;

export default App;
