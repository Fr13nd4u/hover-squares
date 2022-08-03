import { AppDispatch } from "../store";
import axios from "axios";
import { IOptions } from "../../models/IOptions";
import { optionsSlice } from "./OptionsSlice";
import { hoverSquaresSlice } from "./HoverSquaresSlice";

export const fetchOptions = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IOptions[]>("http://demo7919674.mockable.io");
    dispatch(optionsSlice.actions.optionsFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(optionsSlice.actions.optionsFetchingError(e.message));
  }
};

export const setHoverSquares = (item: number) => (dispatch: AppDispatch) => {
  dispatch(hoverSquaresSlice.actions.setItem(item))
};

export const removeHoverSquares = (item: number) => (dispatch: AppDispatch) => {
  dispatch(hoverSquaresSlice.actions.removeItem(item))
};