import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Home from '../components/Home/Home';
import Main from '../components/Layout/Main';
import Quiz from '../components/Quiz/Quiz';
import Statistics from '../components/Statistics/Statistics';

const Roots = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/home',
                    element: <Home></Home>
                },
                {
                    path: '/quiz',
                    element: <Quiz></Quiz>
                },
                {
                    path: '/statistics',
                    element: <Statistics></Statistics>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                }
            ]
        },
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Roots;