import React from 'react';
import { advantagesItems } from '../models';

import { Link } from "react-scroll";

const advantages = advantagesItems.map( (item, index) => {
    return <div key={index} className='flex text-3xl font-extralight my-4'>
        <img className='block h-12 mr-5' src={ item.icon } alt=''/> { item.name }
    </div>
})


const Poster = () => {
    return (
        <div className='bg-gradient-to-r from-gray-500 via-gray-500 to-red-400 mb-20'>
            <div className='relative container  mx-auto py-20 sm:pb-0'>
                <div className='w-1/2 font-light text-white sm:w-full sm:flex sm:flex-col pl-2'>
                    <h1 className='text-6xl mb-10 sm:text-3xl sm:self-center sm:text-center'>
                        Производство и установка москитных систем в Спб и ЛО
                    </h1>
                    { advantages }
                </div>
                <Link
                    to={ 'calc' }
                    spy={true}
                    smooth={true}
                    duration= {800}
                >
                    <button type='button'
                            className='absolute left-6 -bottom-6 bg-red-600 hover:bg-red-900 text-white text-xl font-medium focus:outline-none py-2 flex-shrink-0 px-4 sm:static sm:w-full sm:py-4'>
                        Расcчитать стоимость
                    </button>
                </Link>

            </div>
          </div>
    );
};

export default Poster;