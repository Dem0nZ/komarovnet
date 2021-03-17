import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className=''>
            <div className='container mx-auto pt-1'>
                <div className='flex justify-between items-center border-b border-gray-600 pb-2'>
                    <div className='flex-shrink-0'>
                        <img className='h-16 mx-2' src={logo} alt='logo'/>
                    </div>
                    <div>
                        <button type='button' className='rounded-md bg-red-600 hover:bg-red-900 h-12 text-white text-base w-48 focus:outline-none p-2 my-1'>
                            Перезвоните мне
                        </button>
                    </div>
                    <div>
                        <div className='text-2xl text-red-400'>
                            <a href='mailto:info@komarovnetu.ru'>info@komarovnetu.ru</a>
                        </div>
                        <div className='text-sm text-gray-600'>
                           <span>Пн-Пт с 9:00 до 18:00<br/>Сб-Вс - выходной</span>
                        </div>
                    </div>
                    <div className='text-3xl text-red-400 flex-shrink-0'>
                        <a href='tel:+79112223344'>+7 (911) 555-55-55</a>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;