import { combineReducers } from "redux";
import {urlVideoReducer} from './short_video'
export const root= combineReducers({
    url:urlVideoReducer
})