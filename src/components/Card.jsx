import React from 'react';
import { Link } from 'react-scroll';

const Card = ( props ) => {
    return (
        <div className='flex-col flex w-290 shadow-lg hover:shadow-xl font-extralight sm:w-full'>
            <div className='relative'>
                <img className='w-full object-cover h-56 sm:h-80' src={ props.image } alt={props.name}/>
                <h3 className='absolute bottom-0 left-0 w-full text-white font-light text-lg bg-gray-400 bg-opacity-70 py-1 px-2'>
                    { props.name }
                </h3>
                <div className='absolute -top-2 right-2 px-3 py-0.5 bg-red-600 text-white font-normal text-xl'>
                   от { props.price } &#8381;
                </div>
            </div>
            <div className='flex flex-col flex-1 px-3 py-4'>
                <p className='pb-4 text-indent flex flex-1'>
                    { props.description }
                </p>
                <Link
                    className='block flex flex-col'
                    to={ 'calc' }
                    smooth={true}
                    duration= {800}
                >
                    <button className='focus:outline-none border border-red-600 hover:bg-red-200 text-red-600 p-2 px-3'
                            type='button'>
                        { props.buttonTag }
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default Card;