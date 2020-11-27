import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/reducers';
import thunk from 'redux-thunk';
import { getItem, setItem } from '../../utils/localStorage';

const reduxStateKey = 'reduxState'
const reduxState = getItem(reduxStateKey);
const persistedState = reduxState ? reduxState : {};

export const store = createStore(reducers, 
  persistedState,
  compose(
    applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
    ? a => a
    : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(()=>{
  setItem(reduxStateKey, store.getState())
})