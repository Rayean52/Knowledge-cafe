import React from 'react';

const State = ({mark}) => {
    const {title, reading_time} = mark;
    return (
        <div className='rounded-3xl bg-slate-400 text-white my-5 p-2'>
            <h1>Title : {title} </h1>
            <p>Reading time : {reading_time} </p>
        </div>
    );
};

export default State;