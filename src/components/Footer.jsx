import React from 'react';
import { mainInfo } from '../models';

const Footer = () => {
    return (
        <footer className='bg-gray-500 h-80'>
            <div className='container mx-auto pt-10'>
                <div className='flex justify-between'>
                    <div>
                        map
                    </div>
                    <div className='text-white font-light text-base'>
                        <div className='flex'>
                            <div></div>
                            <div>
                                { mainInfo.address }
                            </div>
                        </div>
                        <div className='flex my-2'>
                            <div></div>
                            <div>
                                { mainInfo.phone }
                            </div>
                        </div>
                        <div className='flex'>
                            <div></div>
                            <div>
                                { mainInfo.mail}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;