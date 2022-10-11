import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const LoadedQuiz = useLoaderData();
    const allQuiz = LoadedQuiz.data.questions;
    return (
        <div className='mt-10' >
            <div>
                {
                    allQuiz.map(quiz => <SingleQuiz key={quiz.id} quiz={quiz}></SingleQuiz>)
                }
            </div>
        </div>
    );
};

export default Quiz;