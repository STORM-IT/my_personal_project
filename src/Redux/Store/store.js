import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { root } from '../Reducer/index'

export const store = createStore(root, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.subscribe(() => console.log(store.getState()))