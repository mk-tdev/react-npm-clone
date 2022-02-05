import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchNpmPackages = (query: string) => {

  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_PACKAGES,
    });

    try {
      const response = await axios.get(
        `https://registry.npmjs.org/-/v1/search?text=${query}&size=100`
      );

      dispatch({
        type: ActionType.SEARCH_PACKAGES_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_PACKAGES_FAILURE,
        payload: error.message,
      });
    }
  };


}