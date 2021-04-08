import React from 'react';

const Snackbar = (props) => {
    let color = `bg-${props.color}-200 border-${props.color}-600`;
    let animate = !props.hide ?
        'transition transform duration-300 translate-y-10 opacity-100' :
        'transition transform duration-200 -translate-y-10 opacity-0';
    return (
        <div className={ `fixed flex justify-center w-full text-gray-600` }>
            <div className={ `border px-10 py-1 ${ color } ${ animate }` }>
                { props.message }
            </div>
        </div>
    );
};

export default Snackbar;