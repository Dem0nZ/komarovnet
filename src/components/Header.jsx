import React from 'react';
import logo from '../assets/logo.png';
import { mainInfo } from '../models';

const Header = () => {
    return (
        <header>
            <div className='container mx-auto pt-4'>
                <div className='flex justify-between items-center border-b border-red-200 pb-4 mb-4 sm:border-none sm:justify-center'>
                    <div className='flex-shrink-0'>
                        <img className='h-16 mx-2 sm:h-20' src={ logo } alt='logo'/>
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='mx-10 sm:hidden'>
                            <div className='text-2xl text-red-600'>
                                <a href={ 'mailto:' + mainInfo.mail }>{ mainInfo.mail }</a>
                            </div>
                            <div className='text-sm text-gray-600'>
                                <span> { mainInfo.schedule.work } <br/> { mainInfo.schedule.weekend }</span>
                            </div>
                        </div>
                        <div className='text-3xl text-red-600 flex-shrink-0 sm:hidden'>
                            <a href={ 'tel:' + mainInfo.phone }>{ mainInfo.phone }</a>
                            <button type='button'
                                    className='block bg-red-600 hover:bg-red-900 text-white text-xl font-medium w-full focus:outline-none p-2 flex-shrink-0 mt-2'>
                                Позвоните мне
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;