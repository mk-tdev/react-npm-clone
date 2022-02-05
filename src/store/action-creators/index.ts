import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchNpmPackages = (query: string) => {
  const url = `https://api.npms.io/v2/search?q=${query}`;
  // const utl = `https://registry.npmjs.org/-/v1/search?text=${query}&size=100`;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_PACKAGES,
    });

    try {
      const response = await axios.get(url);

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

export const getNpmPackageDetail = (query: string) => {

  const url = `https://api.npms.io/v2/package/${query}`;

  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_PACKAGE_DETAIL,
    });

    try {
      const response = await axios.get(url);

      dispatch({
        type: ActionType.SEARCH_PACKAGE_DETAIL_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_PACKAGE_DETAIL_FAILURE,
        payload: error.message,
      });
    }
  };
}