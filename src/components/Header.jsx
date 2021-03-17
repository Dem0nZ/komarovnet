import React from 'react';
import logo from '../assets/logo.png';
import { mainInfo } from '../models';


const Header = () => {
    return (
        <header className=''>
            <div className='container mx-auto pt-4'>
                <div className='flex justify-between items-start border-b border-gray-600 mb-4'>
                    <div className='flex-shrink-0'>
                        <img className='h-16 mx-2' src={ logo } alt='logo'/>
                    </div>
                    <div className='flex justify-between'>
                        <button type='button'
                                className='bg-red-600 hover:bg-red-900 h-12 text-white text-base w-48 focus:outline-none p-2 flex-shrink-0'>
                            Позвоните мне
                        </button>
                        <div className='mx-10'>
                            <div className='text-2xl text-red-400'>
                                <a href={ 'mailto:' + mainInfo.mail }>{ mainInfo.mail }</a>
                            </div>
                            <div className='text-sm text-gray-600'>
                                <span> { mainInfo.schedule.work } <br/> { mainInfo.schedule.weekend }</span>
                            </div>
                        </div>
                        <div className='text-3xl text-red-400 flex-shrink-0'>
                            <a href={ 'tel:' + mainInfo.phone }>{ mainInfo.phone }</a>
                        </div>
                    </div>

                </div>
            </div>
        </header>

    )
}

export default Header;