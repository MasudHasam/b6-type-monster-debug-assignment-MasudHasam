import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const LoadedQuiz = useLoaderData();
    const allQuiz = LoadedQuiz.data.questions;
    const topicName = LoadedQuiz.data.name;
    // console.log(topicName);
    return (
        <div className='mt-10' >
            <h1 className='mb-5 text-3xl font-bold text-gray-700'>Quiz of {topicName}</h1>
            <div>
                {
                    allQuiz.map(quiz => <SingleQuiz key={quiz.id} quiz={quiz} topicName={topicName}></SingleQuiz>)
                }
            </div>
        </div>
    );
};

export default Quiz;