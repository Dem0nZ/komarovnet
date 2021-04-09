import React from 'react';

const CartItem = (props) => {
    return (
        <div className='mb-4'>
            <div className='grid-cart shadow-md pl-4 py-4 items-center'>
                <div>
                        { props.width }
                        &#215;
                        { props.height }
                        <span>мм, </span>
                        <span>полотно { props.type }, </span>
                        <span>крепление { props.fastering }, </span>
                        <span>цвет&nbsp;{ props.color }</span>
                </div>
                <div className='text-right'>
                    { props.count } шт.
                </div>
                <div className='text-right pr-4'>
                    { props.cost } &#8381;
                </div>

                <div
                    className='flex justify-center items-center text-gray-400 hover:text-red-600'
                    onClick={ () => props.removeItemFromCart(props.id) }>
                    <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>

    );
};

export default CartItem;