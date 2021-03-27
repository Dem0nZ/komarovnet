import React from 'react';

const Title = (props) => {
    return (
            <div className='container mx-auto 2'>
                <div className='bg-gray-400 mt-20 mb-10 text-white text-3xl pt-4 pb-2 pl-4'>
                <h2>{ props.title }</h2>
            </div>
        </div>
    );
};

export default Title;