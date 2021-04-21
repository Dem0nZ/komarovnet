import React from 'react';
import posterImg from '../assets/posterWeb.jpg';
import { advantagesItems } from '../models';

import { Link } from "react-scroll";

const advantages = advantagesItems.map( (item, index) => {
    return <div key={index} className='flex text-3xl font-extralight my-4 items-center'>
        <div className='mx-4'>
            { item.icon }
        </div>
        <div>
            { item.name }
        </div>
    </div>
})


const Poster = () => {
    return (
        <div className='bg-white sm:bg-gradient-to-r from-gray-500 via-gray-500 to-red-400 mb-20'>
            <div className='relative container  mx-auto py-20 sm:pb-0 flex sm:block'>
                <div className='w-2/3 font-light sm:text-white text-gray-600 sm:w-full sm:flex sm:flex-col pl-2'>
                    <div className='text-6xl mb-10 sm:text-3xl sm:self-center sm:text-center'>
                        <h1>
                            Производство и установка
                        </h1>
                        <h1>
                            москитных систем
                        </h1>
                        <h1>
                            в СПб и Лен области
                        </h1>
                    </div>
                    { advantages }
                </div>
                <img className='h-96 sm:hidden self-end -mb-20' src={posterImg} alt='girl'/>
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