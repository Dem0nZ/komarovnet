import React from 'react';
import image from '../assets/poster.jpg'
import { advantagesItems } from '../models';

const advantages = advantagesItems.map( item => {
    return <div className='flex text-3xl font-extralight my-4'>
        <img className='block h-12 mr-5' src={ item.icon } alt=''/> { item.name }
    </div>
})

const Poster = () => {
    return (
        <div className='bg-gradient-to-r from-gray-500 to-red-500 mb-20'>
            {/*<div className='h-80 bg-cover' style={ { backgroundImage: `url(${ image })` } }>*/ }
            <div className='relative container  mx-auto py-20'>
                <div className='w-1/2 font-light text-white'>
                    <h1 className='text-6xl mb-10'>
                        Москитные сетки в Санкт-Петербурге
                    </h1>
                    { advantages }
                </div>
                <button type='button' className='absolute left-6 -bottom-8 bg-red-600 hover:bg-red-900 h-16 w-56 text-white text-base focus:outline-none p-2 flex-shrink-0'>Расчитать стоимость</button>
            </div>
          </div>
    );
};

export default Poster;