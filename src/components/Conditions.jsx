import React from 'react';
import ConditionCell from './ConditionCell';
import { conditions } from '../models';

const conditionCells = conditions.map( (item, index ) => <ConditionCell key={index} { ...item } /> )

const Conditions = () => {
    return (
        <div className='container mx-auto'>
            <div className='w-full grid grid-cols-3 auto-rows-fr gap-3 sm:flex sm:flex-col'>
                { conditionCells }
            </div>

        </div>
    );
};

export default Conditions;


//TODO: modal to contact form
// высота кнопок 56, инпуты 44, убрать тени кондишн, паддинги,кнопка рассчитать на хл, другая на см