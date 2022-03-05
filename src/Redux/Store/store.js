import { createStore } from 'redux'
import {root} from '../Reducer/index'

export const store=createStore(root,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log(store.getState()))