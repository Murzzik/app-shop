import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { posts } from './modules/posts/reducer';

const reducers = {
    posts,
};

export const configureStore = () => createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware));
