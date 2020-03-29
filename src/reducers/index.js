import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import shibas from './shibas-reducers';
import authors from './author-reducers';

const rootReducer = combineReducers({ shibas, authors, routing: routerReducer });

export default rootReducer;
