import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Title = (props) => {
    return (
            <div id={ props.id } className='container mx-auto 2'>
                <ScrollAnimation animateIn='animate__fadeInUp'
                                 duration={ 0.2 }
                                 animateOnce={ true }
                                 className='flex justify-center mt-20 mb-10 text-gray-600 font-medium tracking-wide text-4xl pt-4 pb-2'>
                <h2>{ props.title }</h2>
                </ScrollAnimation>
        </div>
    );
};

export default Title;