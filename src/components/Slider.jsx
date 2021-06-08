import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { slides } from '../models';
import { useTransition, animated } from '@react-spring/web'


const Slider = () => {
    const [index, setIndex] = useState(0)
    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 500 },
    })
    useEffect(()=>{
        const timer = setInterval(()=>{
            setIndex(state => (state + 1) % slides.length)
        }, 2000)
        return () => clearInterval(timer)
    },[])

    return (
        <div className='relative bg-white mb-20'>
            {transitions((style, i) => (
                <animated.img
                    className='absolute h-full w-full object-cover'
                    style={{
                        ...style
                    }}
                    src={ slides[index] }
                />
            ))}
            <div className='relative container  mx-auto py-20 sm:pb-0 flex sm:block'>
                <div className='text-6xl mb-10 sm:text-3xl sm:self-center sm:text-center'>
                    <h1>
                        Производство и установка
                    </h1>
                    <h1>
                        москитных систем
                    </h1>
                    <h1>
                        в СПб и Лен области
                    </h1>
                </div>
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