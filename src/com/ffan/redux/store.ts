import { applyMiddleware, createStore} from 'redux';

import reducers from './reducers/rootReducer';
// Logger with default options 
import logger from 'redux-logger'

export const store = createStore(
    reducers,
    applyMiddleware(logger)
);

export default store;