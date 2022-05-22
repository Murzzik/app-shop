import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk';
import {posts, PostsState} from './modules/posts/reducer';
import {albums, AlbumsState} from "./modules/albums/reducer";
import {GithubRepositoryState, gitHubRepositories} from './modules/github/reducer';

const loggerMiddleware = createLogger();

const reducers = {
    posts,
    albums,
    gitHubRepositories,
};

export interface StoreState {
    posts: PostsState;
    albums: AlbumsState;
    gitHubRepositories: GithubRepositoryState;
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

    const enhancer = composeEnhancers(applyMiddleware(thunk, loggerMiddleware));

    return createStore(combineReducers(reducers), enhancer)
};
