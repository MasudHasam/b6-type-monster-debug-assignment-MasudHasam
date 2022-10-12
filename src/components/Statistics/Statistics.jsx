import React from 'react';
import { useLoaderData } from 'react-router-dom'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const loadedAllData = useLoaderData();
    const allData = loadedAllData.data;
    const array = []
    allData.map(data => array.push(data.total));
    // console.log(array);
    const data = [
        { name: 'React', Questions: array[0], },
        { name: 'Javascript', Questions: array[1] },
        { name: 'Css', Questions: array[2] },
        { name: 'Git', Questions: array[3] },
    ];
    return (
        <div>
            <h1 className='text-xl font-bold lg:mr-52 mt-12'>Topic based questions chart</h1>
            <div className='w-1/3  mt-12'>
                <LineChart className='lg:mt-10 lg:ml-96 ml-0' width={400} height={200} data={data}>
                    <Line type="monotone" dataKey="Questions" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;