import React from 'react';
import { navItems } from '../models';

import { Link, animateScroll as scroll } from "react-scroll";


const navList = navItems.map( (item, index )=> {
    return <li key={index} className='hover:text-red-600 hover:underline'>
        <a href={ item.link }>{ item.name }</a>
    </li>

})



const Nav = () => {
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

export default Nav;