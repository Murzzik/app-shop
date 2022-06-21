import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Posts } from './routes/posts';
import { configureStore } from './store';
import { Albums } from './routes/albums';
import { GithubSearchRepositories } from './components/RepoSearchForm';
import { RepositoryCardContainer } from './components/RepositoryCardContainer';
import { Navigation } from './components/NavigationPage';

const store = configureStore();
// TODO: https://flaviocopes.com/react-router-data-from-route/
export const Shop: React.FC = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/github" element={<GithubSearchRepositories />} />
                <Route path="/github/:repoParam" element={<RepositoryCardContainer />} />
                <Route path="*" element="not found" />
            </Routes>
        </BrowserRouter>
    </Provider>
);
