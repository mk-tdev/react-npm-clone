import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface PackageState {
  packageDetail: any | null;
  loading: boolean;
  error: string | null;
}

const initialState = {
  packageDetail: [],
  loading: false,
  error: null,
};

export const reducer = (state: PackageState = initialState, action: Action): PackageState => {
  switch (action.type) {
    case ActionType.SEARCH_PACKAGE_DETAIL:
      return {
        ...state,
        loading: true,
        error: null,
        packageDetail: [],
      }
    case ActionType.SEARCH_PACKAGE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        packageDetail: action.payload,
      }
    case ActionType.SEARCH_PACKAGE_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        packageDetail: [],
      }
    default:
      return { ...state };
  }
}