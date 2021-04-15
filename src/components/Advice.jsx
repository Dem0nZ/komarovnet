import React from 'react';

const Advice = () => {
    return (
        <div className='container mx-auto font-light text-xl text-indent pb-20'>
            <p>
                Уход за москитными сетками достаточно прост, но это позволит продлить срок службы ваших сеток.
            </p>
            <ul className='list-square px-10 text-red-600'>
                <li>
                   <span className='text-black'>
                       рамочные и раздвижные москитные сетки необходимо снимать перед началом мытья
                   </span>
                </li>
                <li>
                   <span className='text-black'>
                       рулонные, дверные и сетки плиссе являются стационарными, поэтому уход за данными системами необходим на месте установки
                   </span>
                </li>
                <li>
                   <span className='text-black'>
                     используйте для мытья сеток небольшое количество мыла или порошка. Споласкивайте водой комнатной температуры. Нельзя применять горячую воду!
                   </span>
                </li>
                <li>
                   <span className='text-black'>
                       мы рекомендуем пользоваться мягкой губкой или тряпочкой. Не давите сильно на полотно
                   </span>
                </li>
                <li>
                   <span className='text-black'>
                       для чистки стационарных сеток можно использовать пылесос с небольшой мощностью всасывания
                   </span>
                </li>
                <li>
                   <span className='text-black'>
                       для продления использования рамочной москитной сетки необходимо снимать ее к началу заморозок
                   </span>
                </li>
                <li>
                   <span className='text-black'>
                       хранить рамочную москитную сетку необходимо в вертикальном положении по ширине или высоте
                   </span>
                </li>
                <li>
                   <span className='text-black'>
                       уход за вашими москитными сетками увеличивает их службу
                   </span>
                </li>
            </ul>
        </div>
    );
};

export default Advice;