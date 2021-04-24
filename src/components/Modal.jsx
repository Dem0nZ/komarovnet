import React from 'react';

const Modal = ({
                   visible = false,
                   title = '',
                   content = '',
                   onClose,
               }) => {
    if (!visible) return null
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 w-full z-50 flex items-center justify-center bg-gray-600 bg-opacity-70'
             onClick={ onClose }>
            <div className='bg-white flex flex-col p-4 sm:w-full'
                 onClick={ e => e.stopPropagation() }>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-light mb-4'>{ title }</h2>
                    <svg onClick={ onClose }
                         className="h-6"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>
                <div>
                    { content }
                </div>
            </div>
        </div>
    );
};

export default Modal;