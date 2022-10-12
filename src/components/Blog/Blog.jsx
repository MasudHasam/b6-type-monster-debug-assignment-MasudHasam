import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border-2 rounded-md bg-slate-300 w-11/12 mx-auto mb-4 mt-6 py-4'>
                <h1 className='text-xl font-semibold '>What is the purpose of react router?</h1>
                <p><span className='underline'>Answer:</span> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='border-2 rounded-md bg-slate-300 w-11/12 mx-auto mb-4 py-4'>
                <h1 className='text-xl font-semibold '>How dose context api works?</h1>
                <p><span className='underline'>Answer:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border-2 rounded-md bg-slate-300 w-11/12 mx-auto mb-4 py-4'>
                <h1 className='text-xl font-semibold '>What is useRef in react?</h1>
                <p><span className='underline'>Answer:</span> Essentially, useRef is like a “box” that can hold a mutable value in its .current property.it pass a ref object to React . React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>
        </div>
    );
};

export default Blog;