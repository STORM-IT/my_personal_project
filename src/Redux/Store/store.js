import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { getAllProjects } from '../Action/filter_project';
import { root } from '../Reducer/index'

export const store = createStore(root, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.dispatch(getAllProjects())
store.subscribe(() => console.log(store.getState()))