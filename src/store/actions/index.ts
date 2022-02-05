import { ActionType } from "../action-types";


interface SearchPackagesAction {
  type: ActionType.SEARCH_PACKAGES;
}

interface SearchPackagesSuccessAction {
  type: ActionType.SEARCH_PACKAGES_SUCCESS;
  payload: string[];
}

interface SearchPackagesFailureAction {
  type: ActionType.SEARCH_PACKAGES_FAILURE;
  payload: string | null;
}

export type Action = SearchPackagesAction | SearchPackagesSuccessAction | SearchPackagesFailureAction;