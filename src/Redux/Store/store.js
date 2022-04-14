import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import { getAllProjects } from '../Action/filter_project';
import { root } from '../Reducer/index'


// link extension redux devtools
//, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(root, compose(applyMiddleware(thunk)));

store.dispatch(getAllProjects())
// store.subscribe(() => console.log(store.getState()))