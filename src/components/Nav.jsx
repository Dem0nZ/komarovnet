import React, { useEffect, useState } from 'react';
import { mainInfo, navItems } from '../models';

import { Link } from 'react-scroll';
import Modal from './Modal';


const Nav = ( props ) => {
    const [ burgerVisible, setBurgerVisible ] = useState( true );
    const [hideNavbar, setHideNavbar] = useState(false);

    useEffect( () => {
        let lastScrollPosition = window.scrollY;
        let navbarTrackingPosition = window.scrollY;

        function onScroll () {
            console.log(`>>> WSP ${window.scrollY} HIDENAV: ${hideNavbar} HIDEVISIBLE: ${burgerVisible} `)
            setHideNavbar(window.scrollY > 181 && window.scrollY > navbarTrackingPosition)
            navbarTrackingPosition = window.scrollY;
            if ( !burgerVisible && lastScrollPosition !== window.scrollY && hideNavbar ) {
                setBurgerVisible( true );
            }
        }

        window.addEventListener( 'scroll', onScroll );
        return () => window.removeEventListener( 'scroll', onScroll );
    }, [ burgerVisible, hideNavbar ] );

    const navList = navItems.map( ( item, index ) => {
        let child;
        if ( item.name === 'Партнерам' ) {
            child = (<p onClick={ () => {
                setModal( true )
                setBurgerVisible( !burgerVisible )
            } }>
                { item.name }
            </p>)
        } else {
            child = (<Link
                to={ item.link }
                spy={ true }
                smooth={ true }
                duration={ 800 }
                onClick={ () => setBurgerVisible( !burgerVisible ) }
            >{ item.name }</Link>)
        }
        return <li key={ index }
                   className={ `hover:text-red-600 py-4 hover:underline cursor-pointer ${ !burgerVisible ? 'sm:py-2' : '' }` }>
            { child }
        </li>
    } )

    const [ isModal, setModal ] = useState( false )
    const onClose = () => setModal( false )

    const initialContacts = {
        name: '',
        phone: ''
    };
    const [ contacts, setContacts ] = useState( initialContacts )
    const onContactsChange = ( stateField ) => {
        return ( e ) => {
            const newContacts = Object.assign( {}, contacts );
            newContacts[stateField] = e.target.value;
            setContacts( newContacts );
        };
    };

    async function postMail () {
        try {
            let response = await fetch( '/send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify( { type: 'partners', contacts } )
            } )
            if ( response.status === 200 ) {
                props.doVisible( 'green', 'Ваша заявка отправлена', false );
                setContacts( initialContacts );
                onClose();
            }
        } catch (e) {
            props.doVisible( 'red', 'Упс. Что-то пошло не так.', false );
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
                           onChange={ onContactsChange( 'name' ) }
                    />
                </div>
                <div className='flex w-full flex-col'>
                    <label htmlFor='count'>Телефон или e-mail:</label>
                    <input className='border border-gray-200 focus:outline-none text-left pl-1 h-2em sm:h-12'
                           id='phone'
                           type='text'
                           value={ contacts.phone }
                           onChange={ onContactsChange( 'phone' ) }
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
    </div>)


    return (
        <>
            <div
                className={ `container mx-auto sticky top-0 ${ hideNavbar ? 'transform -translate-y-full' : '' } transition-transform duration-300 ease-in bg-gray-100 z-40 ${ !burgerVisible ? 'sm:bg-gray-400' : '' }` }>
                <div className='flex justify-between'>
                    <svg xmlns='http://www.w3.org/2000/svg'
                         className={ `h-0 sm:h-10 text-red-600 ml-4 ${ burgerVisible ? '' : 'sm:hidden' }` }
                         onClick={ () => setBurgerVisible( !burgerVisible ) }
                         fill='none'
                         viewBox='0 0 24 24'
                         stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={ 2 }
                              d='M4 6h16M4 12h16M4 18h16'/>
                    </svg>
                    <div
                        className={ `text-2xl text-red-600 flex-shrink-0 ${ burgerVisible ? '' : 'sm:hidden' } lg:hidden` }>
                        <a href={ 'tel:' + mainInfo.phone }>{ mainInfo.phone }</a>
                    </div>
                </div>
                <nav>
                    <ul className={ `flex justify-between text-xl font-extralight sm:flex-col sm:font-light sm:items-center ${ !burgerVisible ? 'sm:text-white' : 'sm:hidden' }` }>
                        { navList }
                    </ul>
                </nav>

            </div>
            <Modal
                visible={ isModal }
                title='Хотите стать партнером?'
                content={ formParthner }
                onClose={ onClose }
            />
        </>

    );
};

export default Nav;