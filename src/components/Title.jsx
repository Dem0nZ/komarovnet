import React from 'react';

const Title = (props) => {
    return (
            <div className='container mx-auto 2'>
                <div className='relative bg-gray-400 mt-20 mb-10 text-white text-3xl pt-4 pb-2 pl-4'>
                <div className='absolute h-1 w-4/5 bg-red-600 -bottom-0.5 right-0'></div>
                <h2>{ props.title }</h2>
            </div>
        </div>
    );
};

export default Title;