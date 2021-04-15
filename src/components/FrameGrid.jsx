import React from 'react';
import frameGridMax from '../assets/grids/frameGridMax.jpg'

const FrameGrid = () => {
    return (
        <div className='flex flex-col'>
            <img className='h-96 object-cover' src={ frameGridMax } alt='рамочные москитные сетки'/>
            <div className='bg-white py-8 pl-4'>
                <p>
                    Рамочные москитные сетки являются самым распространённым видом антимоскитных систем.
                </p>
                <p className='mt-4'>
                    В рамочных москитных сетках можно использовать несколько видов полотен:
                </p>
                <ul className='list-square px-14 text-red-600'>
                    <li>
                        <span className='text-black'>
                            <b>стандарт:</b> крупная ячейка, защищает как правило от комаров и мух
                        </span>
                    </li>
                    <li>
                        <span className='text-black'>
                            <b>антимошка:</b> ячейки меньше, за счет чего сетка не пропускает мелкую мошкару
                        </span>
                    </li>
                    <li>
                        <span className='text-black'>
                            <b>антикошка:</b> очень плотное полотно, которое практически не возможно разодрать кошачьими когтями
                        </span>
                    </li>
                    <li>
                        <span className='text-black'>
                            <b>антиптица:</b> используется металлическое полотно против которого птицы бессильны
                        </span>
                    </li>
                    <li>
                        <span className='text-black'>
                            <b>антипыль:</b> полотно на 70% задерживает пыль и не пропускает в помещение
                        </span>
                    </li>
                    <li>
                        <span className='text-black'>
                            <b>ультравью:</b> это полотно которое менее заметно в световом проеме
                        </span>
                    </li>
                    <li>
                        <span className='text-black'>
                           <b>нано-фильтр:</b> новинка среди москитных систем, полотно состоящее из нескольких слоев,
                        подобно маске
                        </span>
                    </li>
                </ul>
                <p className='mt-4'>
                    Есть несколько разновидностей крепления москитных сеток:
                </p>
                <ul className='list-square px-14 text-red-600'>
                    <li>
                        <span className='text-black'>
                            пластиковые и металлические Z-крепления
                        </span>
                    </li>
                    <li>
                        <span className='text-black'>
                            плунжеры
                        </span>
                    </li>
                    <li>
                        <span className='text-black'>
                            крыло
                        </span>
                    </li>
                    <li>
                        <span className='text-black'>
                            вставные сетки
                        </span>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default FrameGrid;