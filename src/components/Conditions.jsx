import React from 'react';
import ConditionCell from './ConditionCell';
import { conditions } from '../models';

const conditionCells = conditions.map( (item) => <ConditionCell { ...item } /> )

const Conditions = () => {
    return (
        <div className='container mx-auto'>
            <div className='w-full grid grid-cols-2 auto-rows-fr gap-4'>
                { conditionCells }
            </div>

        </div>
    );
};

export default Conditions;