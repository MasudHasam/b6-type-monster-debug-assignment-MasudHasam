import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, id, logo, total } = topic;
    const navigate = useNavigate()
    const quizStartBtn = (id) => {
        navigate(`/quiz/${id}`);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h4>Total Quiz:{total}</h4>
                    <div className="card-actions">
                        <button onClick={() => quizStartBtn(id)} className="btn btn-primary">Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;