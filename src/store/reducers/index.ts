import { combineReducers } from "redux";
import { reducer as packagesReducer } from "./packagesReducer";
import { reducer as packageReducer } from "./packageReducer";

const reducers = combineReducers({
  packagesReducer,
  packageReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;