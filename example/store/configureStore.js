/**
 * Created by rharik on 5/3/16.
 */
import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
// import api from '../middleware/api/api'
import reducers from './../reducers';
import DevTools from '../components/DevTools';

export default function configureStore(initialState) {
  const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(createLogger()),
            DevTools.instrument()
        )
    );

  if (module.hot) {
        // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
