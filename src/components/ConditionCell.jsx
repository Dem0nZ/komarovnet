import React from 'react';

const ConditionCell = (props) => {
    const conditionList = props.text.map((item, id) => {
        return <li key={ id }>
                   <span className='text-black'>
                            { item }
                   </span>
        </li>
    })
    return (
        <div className='flex flex-col items-center shadow-lg font-light py-5 sm:shadow-none'>
            <div className='flex flex-col items-center px-5 pb-4 text-red-600'>

                    { props.icon }

                <h2 className='text-3xl'>{ props.title }</h2>
            </div>
            <div className='text-xl mt-4 w-full text-red-600'>
                <ul className='list-square px-10'>
                    { conditionList }
                </ul>
            </div>
        </div>
    );
};

export default ConditionCell;