import React from 'react';
import { advantagesItems } from '../models';

const advantages = advantagesItems.map( item => {
    return <div className='flex text-3xl font-extralight my-4'>
        <img className='block h-12 mr-5' src={ item.icon } alt=''/> { item.name }
    </div>
})

const Poster = () => {
    return (
        <div className='bg-gradient-to-r from-gray-500 via-gray-500 to-red-400 mb-20'>
            <div className='relative container  mx-auto py-20'>
                <div className='w-1/2 font-light text-white'>
                    <h1 className='text-6xl mb-10'>
                        Производство и установка москитных систем в Спб и ЛО
                    </h1>
                    { advantages }
                </div>
                <button type='button' className='absolute left-6 -bottom-6 bg-red-600 hover:bg-red-900 text-white text-xl font-medium focus:outline-none p-2 flex-shrink-0 px-4 py-2'>
                    Расcчитать стоимость
                </button>
            </div>
          </div>
    );
};

export default Poster;