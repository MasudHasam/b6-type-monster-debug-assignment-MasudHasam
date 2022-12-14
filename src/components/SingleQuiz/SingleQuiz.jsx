import React from 'react';
import './SingleQuiz.css'
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = ({ quiz }) => {
    const { question, options, correctAnswer, } = quiz;

    const seeCorrectAnswer = () => {
        toast(correctAnswer)
    }

    const handelOptionsClick = (selected) => {
        if (selected === correctAnswer) {
            toast("Correct Answer");
        } else {
            toast('wrong answer');
        }
    }
    return (
        <div>
            <div className='w-10/12 mx-auto bg-slate-400 py-1 drop-shadow-2xl rounded-lg mb-8'>
                <div className='quiz-question w-11/12 mx-auto'>
                    <h1 className='text-2xl text-white font-semibold'>{question}</h1>
                    <button onClick={seeCorrectAnswer} title='see correct answer'><EyeIcon className="h-6 w-6 text-white" /></button>
                </div>
                <div className='grid xm:grid-cols-1  lg:grid-cols-2 gap-2 w-10/12 mx-auto mt-3 mb-2'>
                    <button onClick={() => handelOptionsClick(options[0])} className='border-2 hover:bg-orange-400 rounded-md w-46 h-20 text-black font-semibold'><small>{options[0]}</small></button>
                    <button onClick={() => handelOptionsClick(options[1])} className='border-2 hover:bg-orange-400 rounded-md w-46 h-20 text-black font-semibold'><small>{options[1]}</small></button>
                    <button onClick={() => handelOptionsClick(options[2])} className='border-2 hover:bg-orange-400 rounded-md w-46 h-20 text-black font-semibold'><small>{options[2]}</small></button>
                    <button onClick={() => handelOptionsClick(options[3])} className='border-2 hover:bg-orange-400 rounded-md w-46 h-20 text-black font-semibold'><small>{options[3]}</small></button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleQuiz;