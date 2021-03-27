import React from 'react';

const ConditionCell = ( props ) => {
    return (
        //TODO: onclick - return form?
        <div className='flex flex-col shadow-lg font-light'>
            <div className='flex ml-20 mt-5 items-center'>
                <img className='block h-12 mr-10' src={ props.icon } alt=''/>
                <h2 className='text-3xl'>{ props.title }</h2>
            </div>
                <p className='p-4 text-xl text-indent'>
                    { props.text }
                </p>
        </div>
    );
};

export default ConditionCell;