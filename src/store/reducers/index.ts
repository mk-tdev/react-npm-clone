import { combineReducers } from "redux";
import { reducer as packagesReducer } from "./packagesReducer";

const reducers = combineReducers({
  packagesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;