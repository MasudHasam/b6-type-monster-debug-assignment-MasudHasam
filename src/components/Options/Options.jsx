import React from 'react';

const Options = ({ option }) => {
    // console.log(option);
    return (
        <div className='border-2 w-80 h-30 '>
            <div className='flex w-full h-full'>
                <input type="checkbox" className="default:ring-2" />
                <p>{option}</p>
            </div>
        </div>
    );
};

export default Options; <h1>this is options</h1>