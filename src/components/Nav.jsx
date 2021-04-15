import React from 'react';
import { navItems } from '../models';

import { Link } from "react-scroll";


 const navList = navItems.map( (item, index )=> {
     return <li key={index} className='hover:text-red-600 hover:underline'>
         <Link
             to={ item.link }
             spy={true}
             smooth={true}
             duration= {800}
         >{ item.name }</Link>
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