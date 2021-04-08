import React from 'react';

const ConditionCell = ( props ) => {
    return (
        <div className='flex flex-col items-center shadow-lg font-light py-5 px-2'>
            <div className='flex flex-col items-center border-b-2 border-gray-600 px-5 pb-4'>
                <img className='block h-12' src={ props.icon } alt=''/>
                <h2 className='text-3xl'>{ props.title }</h2>
            </div>
                <p className='text-xl text-indent text-center mt-4'>
                    { props.text }
                </p>
        </div>
    );
};

export default ConditionCell;