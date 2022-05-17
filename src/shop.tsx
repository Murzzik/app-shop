import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Posts } from './routes/posts';
import { configureStore } from './store';
import { Albums } from './routes/albums';

const store = configureStore();

export const Shop: React.FC = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/posts" element={<Posts />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="*" element="not found" />
            </Routes>
        </BrowserRouter>
    </Provider>
);
