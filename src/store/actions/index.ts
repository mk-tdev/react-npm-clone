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

interface GetPackageAction {
  type: ActionType.SEARCH_PACKAGE_DETAIL;
}

interface GetPackageSuccessAction {
  type: ActionType.SEARCH_PACKAGE_DETAIL_SUCCESS;
  payload: string[];
}

interface GetPackageFailureAction {
  type: ActionType.SEARCH_PACKAGE_DETAIL_FAILURE;
  payload: string | null;
}

interface FetchPackage {
  type: ActionType.FETCH_PACKAGE;
}

interface FetchPackageSuccess {
  type: ActionType.FETCH_PACKAGE_SUCCESS;
  payload: any | null;
}

interface FetchPackageFailure {
  type: ActionType.FETCH_PACKAGE_FAILURE;
  payload: string | null;
}

export type Action = SearchPackagesAction |
  SearchPackagesSuccessAction |
  SearchPackagesFailureAction |
  GetPackageAction |
  GetPackageSuccessAction |
  GetPackageFailureAction |
  FetchPackage |
  FetchPackageSuccess |
  FetchPackageFailure;
