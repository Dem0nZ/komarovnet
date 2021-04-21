import React, { useState } from 'react';
import { navItems } from '../models';

import { Link } from "react-scroll";
import Modal from './Modal';



const Nav = (props) => {
    const navList = navItems.map((item, index) => {
        let child;
        if (item.name === 'Партнерам') {
            child = (<p onClick={()=>{setModal(true)}}>
                { item.name }
            </p>)
        } else {
            child = (<Link
                to={ item.link }
                spy={ true }
                smooth={ true }
                duration={ 800 }
            >{ item.name }</Link>)
        }
        return <li key={ index } className='hover:text-red-600 hover:underline cursor-pointer'>
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
            let response = await fetch('http://localhost/test.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ contacts })
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
        <div className='container mx-auto'>
            <nav className='mb-4'>
                <ul className='flex justify-between text-xl font-extralight sm:flex-col sm:font-light sm:items-center'>
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