import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Posts} from './routes/posts';
import {configureStore} from './store';
import {Albums} from './routes/albums';
import {GithubRepositories} from './routes/gitRepo';

const store = configureStore();

export const Shop: React.FC = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/posts" element={<Posts />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/github" element={<GithubRepositories />} />
                <Route path="*" element="not found" />
            </Routes>
        </BrowserRouter>
    </Provider>
);
