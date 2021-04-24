import React from 'react';

const Snackbar = (props) => {
    let animate = !props.hide ?
        'transition transform duration-300 translate-y-10' :
        'transition transform duration-200 -translate-y-10';
    return (
        <div className={ `fixed flex justify-center w-full text-gray-600` }>
            <div className={ `bg-${props.color}-200 border-${props.color}-600 border px-10 py-1 ${animate}` }>
                { props.message }
            </div>
        </div>
    );
};

export default Snackbar;