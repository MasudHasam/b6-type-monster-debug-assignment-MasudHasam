import React from 'react';
import Options from '../Options/Options';

const SingleQuiz = ({ quiz }) => {
    const { question, options, correctAnswer, } = quiz;
    console.log(quiz);
    return (
        <div>
            <div className='w-10/12 mx-auto bg-slate-400 py-1 drop-shadow-2xl rounded-lg mb-4'>
                <h1 className='text-2xl text-white font-semibold'>{question}</h1>
                <div className='lg:grid grid-cols-2 gap-2 w-10/12 mx-auto mt-3 mb-8'>
                    <button className='border-2 rounded-md w-46 h-20 text-black font-semibold'><small>{options[0]}</small></button>
                    <button className='border-2 rounded-md w-46 h-20 text-black font-semibold'><small>{options[1]}</small></button>
                    <button className='border-2 rounded-md w-46 h-20 text-black font-semibold'><small>{options[2]}</small></button>
                    <button className='border-2 rounded-md w-46 h-20 text-black font-semibold'><small>{options[3]}</small></button>
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;