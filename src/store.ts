import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { posts, PostsState } from './modules/posts/reducer';

const reducers = {
    posts,
};

export interface StoreState {
    posts: PostsState;
}

export const configureStore = () => {
    const composeEnhancers =
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
            })
            : compose;

    const enhancer = composeEnhancers(applyMiddleware(thunk));

    return createStore(combineReducers(reducers), enhancer)
};