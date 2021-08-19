import { combineReducers } from "redux";
import {jobsReducer} from "./reducer/jobs";


//store all reducer in one place
export const rootReducer = combineReducers({
    jobsReducer,
})