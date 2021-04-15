import React from 'react';

const ConditionCell = (props) => {
    const conditionList = props.text.map(item => {
        return <li>
                   <span className='text-black'>
                            { item }
                   </span>
        </li>
    })
    return (
        <div className='flex flex-col items-center shadow-lg font-light py-5'>
            <div className='flex flex-col items-center border-b-2 border-gray-600 px-5 pb-4'>

                    { props.icon }

                <h2 className='text-3xl'>{ props.title }</h2>
            </div>
            <p className='text-xl mt-4'>
                <ul className='list-square px-10 text-red-600'>
                    { conditionList }
                </ul>
            </p>
        </div>
    );
};

export default ConditionCell;