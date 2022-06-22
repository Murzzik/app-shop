import React from 'react';
import './NavigationPage.css';

const routes = [
    { name: 'Albums', path: '/albums' },
    { name: 'Posts', path: '/posts' },
    { name: 'Github Search Repositories', path: '/github' },
];

export const Navigation = () => {
    return (
        <div className="navContainer">
            <h2>Welcome to my training project</h2>
            <h3>Where you want to go?</h3>
            {
                routes.map((route, index) =>
                    <button key={index} className="btn">
                        <a href={route.path}
                           target="_blank"
                           rel="noreferrer">
                            {route.name}
                        </a>
                    </button>
                )
            }
        </div>
    );
};
