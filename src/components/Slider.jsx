import React, { useEffect, useState } from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { slides, slidesText } from '../models';


const Slider = () => {
    const [ index, setIndex ] = useState( 0 )
    const [state, setState] = useState(true);
    useEffect( () => {
        const timer = setInterval( () => {
            setIndex( current => current === slides.length - 1 ? 0 : current + 1 )
            setState(state => !state)
        }, 4000 )
        return () => clearInterval( timer )
    }, [] )
    const prevIndex = index ? index - 1 : slides.length - 1
    const nextIndex = index === slides.length - 1 ? 0 : index + 1

    return (
        <div className='relative bg-white h-350 mb-20 overflow-x-hidden overflow-y-visible'>
                <img
                    className='absolute h-full w-full object-cover transition-all duration-1000 transform -translate-x-full'
                    key={ slides[prevIndex] } src={ slides[prevIndex] }/>
                <img className='absolute h-full w-full object-cover transition-all duration-1000' key={ slides[index] }
                     src={ slides[index] }/>
                <img className='absolute h-full w-full object-cover transition-all duration-1000 transform translate-x-full'
                     key={ slides[nextIndex] } src={ slides[nextIndex] }/>

                <div className='relative container mx-auto mt-20 sm:mt-10 sm:pb-0 sm:block'>
                    <SwitchTransition >
                        <CSSTransition
                            key={state}
                            addEndListener={(node, done) => {
                                node.addEventListener("transitionend", done, false);
                            }}
                            classNames="fade"
                        >
                            <div className='text-6xl mb-10 sm:text-4xl sm:ml-2 font-light'>
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
                </div>
        </div>
    );
};

export default Slider;