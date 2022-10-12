import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from '../components/Layout/Main';
import Home from '../components/Home/Home'
import Topics from '../components/Topics/Topics';
import Statistics from '../components/Statistics/Statistics'
import Blog from '../components/Blog/Blog'
import Quiz from '../components/Quiz/Quiz';


const Roots = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <p className='text-3xl font-bold mt-20'>404! <br />Rout not found</p>,
            children: [
                {
                    path: '/',
                    loader: () => {
                        return fetch('https://openapi.programming-hero.com/api/quiz')
                    },
                    element: <Home></Home>
                },
                {
                    path: '/home',
                    loader: () => {
                        return fetch('https://openapi.programming-hero.com/api/quiz')
                    },
                    element: <Home></Home>
                },
                {
                    path: 'topics',
                    loader: () => {
                        return fetch('https://openapi.programming-hero.com/api/quiz')
                    },
                    element: <Topics></Topics>
                },
                {
                    path: `/quiz/:qiozId`,
                    loader: ({ params }) => {
                        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.qiozId}`);
                    },
                    element: <Quiz></Quiz>
                },
                {
                    path: 'statistics',
                    element: <Statistics></Statistics>
                },
                {
                    path: 'blog',
                    element: <Blog></Blog>
                }
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Roots;