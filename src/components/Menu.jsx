import React from 'react';
import { navItems } from '../models';


const navList = navItems.map( item => {
    return <li className='hover:text-red-600 hover:underline'>
        <a href={ item.link }>{ item.name }</a>
    </li>

})

const Menu = () => {
    return (
        <div className='container mx-auto'>
            <nav className='mb-4'>
                <ul className='flex justify-between text-xl font-extralight'>
                    { navList }
                </ul>
            </nav>

        </div>
    );
};

export default Menu;