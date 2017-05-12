import { applyMiddleware, createStore, combineReducers } from 'redux';
import article from './reducers/article';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import settings from './reducers/settings';
import articleList from './reducers/articleList';

const reducer = combineReducers({
    auth,
    common,
    home,
    settings,
    article,
    articleList
});

const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware);

const store = createStore(reducer, middleware);

export default store;