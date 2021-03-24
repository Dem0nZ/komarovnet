import React from 'react';
import Card from './Card';
import { grids } from '../models';

const gridItems = grids.map( (item) => <Card { ...item } /> )
const Grids = () => {
    return (
        <div className='container mx-auto'>
            <div className='w-full grid grid-cols-4 gap-4'>
                {/*<Card name={grids[0].name} description={grids[0].description} image={grids[0].image} price={grids[0].price} />*/}
                { gridItems }
            </div>
            
        </div>
    );
};

export default Grids;