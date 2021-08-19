import { ALL_JOBS } from "../actions/jobs";

export function jobsReducer (state=[],action){
    switch (action.type) {
        case ALL_JOBS:
            // set state with search value
            return action.payload.jobs;
    
        default:
            return state;
    }
}