import { combineReducers } from "redux";
import { findCorrectNumber } from "./Projects/find_correct_number";
import {urlVideoReducer} from './short_video'
export const root= combineReducers({
    url:urlVideoReducer,
    correctNumber:findCorrectNumber
})