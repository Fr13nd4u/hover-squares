import React, { ChangeEvent, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchOptions } from "../store/reducers/ActionCreators";
import { COLORS } from "../styles/theme";

interface IPickModeProps {
  setField: (i: any) => void;
}

const PickMode: FC<IPickModeProps> = ({ setField }) => {
  const [select, setSelect] = useState("");
  const dispatch = useAppDispatch();
  const { options, error } = useAppSelector((state) => state.optionsReducer);

  useEffect(() => {
    dispatch(fetchOptions());
  }, []);

  const getValues = (search: string) => {
    let i = options?.length;
    while (i--) {
      if (options[i].name === search) {
        return options[i].field;
      }
    }
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  const handleClick = () => {
    setField(getValues(select));
  };

  if (error) {
    return <h2>{error}</h2>;
  } else {
    return (
      <PickModeWrapper>
        <Select value={select} onChange={handleSelect}>
          <option disabled={true} value="">
            Pick mode
          </option>

          {options?.map((item, index) => (
            <option value={item.name} key={index}>
              {item.name}
            </option>
          ))}
        </Select>

        <Btn onClick={handleClick}>Start</Btn>
      </PickModeWrapper>
    );
  }
};

const PickModeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Select = styled.select`
  width: 100%;
`;

const Btn = styled.button`
  width: 130px;
  padding: 5px 20px;
  margin-left: 10px;
  font-size: 18px;
  color: ${COLORS.PRIMARY};
  text-transform: uppercase;
  background: ${COLORS.HOVERED};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    filter: brightness(110%);
    transition: 0.4s;
  }
  &:active {
    filter: brightness(125%);
    transition: 0.4s;
  }
`;

export default PickMode;
