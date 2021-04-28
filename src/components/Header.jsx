import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { mainInfo } from '../models';
import Modal from './Modal';

const Header = (props) => {
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
                body: JSON.stringify({type:"callback", contacts })
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

    const formCall = (<div>
            <div className='flex flex-col mt-5 sm:mb-4'>
                <div className='flex sm:flex-col'>
                    <div className='flex w-full flex-col mr-4'>
                        <label htmlFor='name'>Имя:</label>
                        <input className= 'border border-gray-200 focus:outline-none text-left pl-1 h-2em  sm:h-12'
                               id='name'
                               type='text'
                               value={ contacts.name }
                               onChange={ onContactsChange('name') }
                        />
                    </div>
                    <div className='flex w-full flex-col'>
                        <label htmlFor='phone'>Телефон или e-mail:</label>
                        <input className= 'border border-gray-200 focus:outline-none text-left pl-1 h-2em sm:h-12'
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
                    disabled={false}
                    value='Связаться со мной'
                    onClick={ postMail }
                />
            </div>
        </div>
    )
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
                                    onClick={()=>{setModal(true)}}
                                    className='block bg-red-600 hover:bg-red-900 text-white text-xl font-medium w-full focus:outline-none p-2 flex-shrink-0 mt-2'>
                                Позвоните мне
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                visible={ isModal }
                title='Обратная связь'
                content={ formCall }
                onClose={ onClose }
            />
        </header>

    )
}

export default Header;