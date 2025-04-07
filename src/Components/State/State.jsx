import React from 'react';

const State = ({mark}) => {
    const {title, reading_time} = mark;
    return (
        <div className='rounded-3xl bg-gray-300 my-5 p-2'>
            <h1>Title : {title} </h1>
            <p>Read : {reading_time} </p>
        </div>
    );
};

export default State;