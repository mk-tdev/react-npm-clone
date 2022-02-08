import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface PackageState {
  counter: number;
  loading: boolean;
  error: string | null;
  packageData: any;
}

const initialState: PackageState = {
  counter: 0,
  loading: false,
  error: null,
  packageData: null,
};

export const reducer = (state: PackageState = initialState, action: Action): PackageState => {
  switch (action.type) {
    case ActionType.FETCH_PACKAGE:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case ActionType.FETCH_PACKAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        packageData: action.payload,
      };
    case ActionType.FETCH_PACKAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
