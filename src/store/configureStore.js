import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return store;
}
