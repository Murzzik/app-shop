import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { posts, PostsState } from './modules/posts/reducer';
import { albums, AlbumsState } from './modules/albums/reducer';
import { GithubRepositoriesState, githubRepositories } from './modules/github/reducer';
import { githubRepository, GithubDetailRepositoryState} from "./modules/githubDetailRepository/reducer";

const reducers = {
    posts,
    albums,
    githubRepositories,
    githubRepository,
};

export interface StoreState {
    posts: PostsState;
    albums: AlbumsState;
    githubRepositories: GithubRepositoriesState;
    githubRepository: GithubDetailRepositoryState;
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

    return createStore(combineReducers(reducers), enhancer);
};
