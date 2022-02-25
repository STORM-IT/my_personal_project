import { createStore } from 'redux'
import {root} from '../Reducer/index'

export const store=createStore(root);

store.subscribe(() => console.log(store.getState()))