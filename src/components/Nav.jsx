import React, { useState } from 'react';
import { navItems } from '../models';

import { Link } from "react-scroll";
import Modal from './Modal';



const Nav = (props) => {
    const [burgerVisible, setBurgerVisible] = useState(true);

    const navList = navItems.map((item, index) => {
        let child;
        if (item.name === 'Партнерам') {
            child = (<p onClick={()=>{
                setModal(true)
                setBurgerVisible(!burgerVisible)
            }}>
                { item.name }
            </p>)
        } else {
            child = (<Link
                to={ item.link }
                spy={ true }
                smooth={ true }
                duration={ 800 }
                onClick={()=> setBurgerVisible(!burgerVisible)}
            >{ item.name }</Link>)
        }
        return <li key={ index } className={ `hover:text-red-600  hover:underline cursor-pointer ${ !burgerVisible ? 'sm:py-2' : '' }` }>
            { child }
        </li>
    })

    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)

    const initialContacts = {
        name: '',
        phone: ''
    };
    const [contacts, setContacts] = useState( initialContacts )
    const onContactsChange = (stateField) => {
        return (e) => {
            const newContacts = Object.assign({}, contacts);
            newContacts[stateField] = e.target.value;
            setContacts(newContacts);
        };
    };
    async function postMail ()  {
        try {
            let response = await fetch('/test.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({type:"partners", contacts })
            })
            if (response.status === 200) {
                props.doVisible('green', 'Ваша заявка отправлена', false);
                setContacts( initialContacts );
                onClose();
            }
        } catch (e) {
            props.doVisible('red', 'Упс. Что-то пошло не так.', false);
        }
    }

    const formParthner = (<div>
            <div className='flex flex-col mt-5 sm:mb-4'>
                <div className='flex sm:flex-col'>
                    <div className='flex w-full flex-col mr-4'>
                        <label htmlFor='count'>Имя:</label>
                        <input className='border border-gray-200 focus:outline-none text-left pl-1 h-2em  sm:h-12'
                               id='name'
                               type='text'
                               value={ contacts.name }
                               onChange={ onContactsChange('name') }
                        />
                    </div>
                    <div className='flex w-full flex-col'>
                        <label htmlFor='count'>Телефон или e-mail:</label>
                        <input className='border border-gray-200 focus:outline-none text-left pl-1 h-2em sm:h-12'
                               id='phone'
                               type='text'
                               value={ contacts.phone }
                               onChange={ onContactsChange('phone') }
                        />
                    </div>
                </div>
                <input
                    className='focus:outline-none border border-red-600 bg-white hover:bg-red-200 text-red-600 px-3 py-2 sm:w-full mt-4'
                    type='button'
                    value='Стать партнером'
                    onClick={ postMail }
                />
            </div>
        </div>
    )


    return (
        <div className={ `container mx-auto sticky sm:bg-transparent bg-gray-100 top-0 z-50 ${ !burgerVisible ? 'sm:bg-gray-400':'' }` }>
            <svg xmlns="http://www.w3.org/2000/svg"
                 className={ `h-0 sm:h-10 text-red-600 ml-4 ${burgerVisible ? '':'sm:hidden'}` }
                 onClick={() => setBurgerVisible(!burgerVisible)}
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <nav className='mb-4'>
                <ul className={ `flex justify-between text-xl font-extralight sm:flex-col sm:font-light sm:items-center ${ !burgerVisible ? 'sm:text-white':'sm:hidden' }` }>
                    { navList }
                </ul>
            </nav>
            <Modal
                visible={ isModal }
                title='Хотите стать партнером?'
                content={ formParthner }
                onClose={ onClose }
            />
            </div>
    );
};

export default Nav;