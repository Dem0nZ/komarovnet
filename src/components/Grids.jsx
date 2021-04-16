import React from 'react';
import Card from './Card';
import { grids } from '../models';

const gridItems = grids.map( (item, index) => <Card key={index} { ...item } /> )
const Grids = () => {
    return (
        <div className='container mx-auto'>
            <div className='w-full grid grid-cols-4 gap-4 sm:flex sm:flex-col'>
                { gridItems }
            </div>
            
        </div>
    );
};

export default Grids;