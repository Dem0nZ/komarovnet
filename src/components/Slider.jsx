import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { slides, slidesText } from '../models';


const Slider = () => {
    const [ index, setIndex ] = useState( 0 )
    const [state, setState] = useState(true);
    useEffect( () => {
        const timer = setInterval( () => {
            setIndex( current => current === slides.length - 1 ? 0 : current + 1 )
            setState(state => !state)
        }, 3000 )
        return () => clearInterval( timer )
    }, [] )
    const prevIndex = index ? index - 1 : slides.length - 1
    const nextIndex = index === slides.length - 1 ? 0 : index + 1

    return (
        <div className='relative bg-white mb-20'>
            <img
                className='absolute h-full w-full object-cover transition-all duration-1000 transform -translate-x-full'
                key={ slides[prevIndex] } src={ slides[prevIndex] }/>
            <img className='absolute h-full w-full object-cover transition-all duration-1000' key={ slides[index] }
                 src={ slides[index] }/>
            <img className='absolute h-full w-full object-cover transition-all duration-1000 transform translate-x-full'
                 key={ slides[nextIndex] } src={ slides[nextIndex] }/>

            <div className='relative container  mx-auto py-20 sm:pb-0 flex sm:block'>
                <SwitchTransition >
                    <CSSTransition
                        key={state}
                        addEndListener={(node, done) => {
                            node.addEventListener("transitionend", done, false);
                        }}
                        classNames="fade"
                    >
                        <div className='text-6xl mb-10 sm:text-3xl sm:self-center sm:text-center'>
                            <h1>
                                { slidesText[index][1] }
                            </h1>
                            <h1>
                                { slidesText[index][2] }
                            </h1>
                            <h1>
                                { slidesText[index][3] }
                            </h1>
                        </div>
                    </CSSTransition>
                </SwitchTransition>

                <Link
                    to={ 'calc' }
                    spy={ true }
                    smooth={ true }
                    duration={ 800 }>
                    <button type='button'
                            className='absolute z-30 left-6 -bottom-6 bg-red-600 hover:bg-red-900 text-white text-xl font-medium focus:outline-none py-2 flex-shrink-0 px-4 sm:static sm:w-full sm:py-4'>
                        Расcчитать стоимость
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Slider;