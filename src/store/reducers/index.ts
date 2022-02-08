import { combineReducers } from "redux";
import { reducer as packagesReducer } from "./packagesReducer";
import { reducer as packageDetailReducer } from "./packageDetailReducer";

const reducers = combineReducers({
  packagesReducer,
  packageDetailReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
