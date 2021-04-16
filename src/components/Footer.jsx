import React from 'react';
import { mainInfo } from '../models';
import Map from './Map';


const Footer = () => {
    return (
        <footer id='footer' className='bg-gray-400'>
            <div className='container mx-auto'>
                <div className='flex justify-between sm:flex-col'>
                    <Map/>
                    <div className='w-1/4 text-white font-light text-base pt-10 sm:w-full sm:px-2 sm:pb-6'>
                        <div className='flex'>
                            <div>
                                <svg className='w-6 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <div>
                               <span>Офис:</span> { mainInfo.addressOffice }
                            </div>
                        </div>
                        <div className='flex my-2'>
                            <div>
                                <svg className='w-6 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <div>
                                <span>Производство:</span> { mainInfo.addressProm }
                            </div>
                        </div>
                        <a className='flex my-2' href={ 'tel:' + mainInfo.phone }>
                            <svg className='w-6 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            { mainInfo.phone }
                        </a>

                        <a className='flex' href={ 'mailto:' + mainInfo.mail }>
                            <svg className='w-6 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 }
                                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                            </svg>
                            { mainInfo.mail }
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;