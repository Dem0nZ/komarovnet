import frameGrids from '../src/assets/grids/frameGrids.jpg';
import slidingGrids from '../src/assets/grids/slidingGrids.jpg';
import mosqitoDoors from '../src/assets/grids/mosqitoDoors.jpg';
import slidingSystems from '../src/assets/grids/slidingSystems.jpg';
import rollGrids from '../src/assets/grids/rollGrids.jpg';
import simplePlisse from '../src/assets/grids/simplePliss.jpeg';
import bigPlisse from '../src/assets/grids/bigPlisse.jpg';
import rollBlinds from '../src/assets/grids/rollerBlinds.jpg';
import React from 'react';
import PaymentIco from './components/icons/PaymentIco';
import DeliveryIco from './components/icons/DeliveryIco';
import VerifiedIco from './components/icons/VerifiedIco';
import slide1 from './assets/slides/1.jpg'
import slide2 from './assets/slides/2.jpg'
import slide3 from './assets/slides/3.jpg'


export const mainInfo = {
    mail: 'info@komarovnetu.ru',
    phone: '+7 (812) 679-29-23',
    whatsApp: '79111234465',
    addressOffice: 'Санкт-Петербург, площадь Конституции, дом 2',
    addressProm: 'Санкт-Петербург, Ленинский проспект, дом 139',
    mapOffice: {
        lat: 59.853690,
        lon: 30.303121
    },
    mapProm: {
        lat: 59.851333,
        lon: 30.283505
    },
    schedule: {
        work: 'Пн-Пт с 9:00 до 21:00',
        weekend: 'Сб-Вс с 10:00 до 19:00'
    }
}

export const slides = [
    slide1,
    slide2,
    slide3
]
export const slidesText = [
    {
        1: 'Cкидка 10%',
        2: 'пенсионерам',
    },
    {
        1: 'Дачникам установка',
        2: 'каждой второй сетки',
        3: 'бесплатно'
    },

    {
        1: '% от заказа',
        2: 'организаторам',
        3: 'коллективных заявок'
    },
]

export const navItems = [
    {
        name: 'Москитные сетки',
        link: 'grids'
    },
    {
        name: 'Калькулятор стоимости',
        link: 'calc'
    },
    {
        name: 'Гарантия и оплата',
        link: 'conditions'
    },
    {
        name: 'Контакты',
        link: 'footer'
    },
    {
        name: 'Партнерам',
        link: '#'
    }
]

export const grids = [
    {
        name: 'Рамочные москитные сетки',
        description: `Это самый бюджетный и\u00a0распространенный вариант антимоскитных систем. В\u00a0данном варианте можно использовать несколько типов полотен: стандарт, антимошка, антикошка, антиптица, антипыль, ультра-вью, нано-фильтр`,
        price: 800,
        image: frameGrids,
        buttonTag: 'Рассчитать стоимость'
    },
    {
        name: 'Раздвижные сетки Provedal',
        description: `Эти сетки предназначены для\u00a0раздвижных окон системы "Provedal". Комплектуется сетка направляющими, специальным профилем, щеточкой (для\u00a0избежания щелей) и\u00a0сеткой (Стандарт, антипыль, антимошка)`,
        price: 1500,
        image: slidingGrids,
        buttonTag: 'Заказать расчет'
    },
    {
        name: 'Москитные сетки для дверей',
        description: `Отличный способ защиты дверных балконных проемов от\u00a0нежелательных насекомых`,
        price: 3200,
        image: mosqitoDoors,
        buttonTag: 'Заказать расчет'
    },
    {
        name: 'Раздвижные москитные сетки для больших проемов',
        description: `Устанавливается на\u00a0большие проемы к\u00a0примеру, порталы. Москитная сетка, натянутая на\u00a0усиленный профиль, с\u00a0легкостью двигается по\u00a0направляющим. Лекго демонтировать на\u00a0зиму`,
        price: 7000,
        image: slidingSystems,
        buttonTag: 'Заказать расчет'
    },
    {
        name: 'Рулонные москитные сетки',
        description: `Руллонные москитные сетки отличаются своей эстетичностью. Москитная сетка убирается в\u00a0не\u00a0большой короб и\u00a0не\u00a0мешает виду из\u00a0окна`,
        price: 3650,
        image: rollGrids,
        buttonTag: 'Заказать расчет'
    },
    {
        name: 'Москитные сетки плиссе',
        description: `Сетки плиссе можно устанавливать на\u00a0окна, балконные, входные двери, порталы практически любых размеров. Сетка убирается в\u00a0"гармошку", возможно открывание как\u00a0в\u00a0бок так\u00a0и\u00a0вверх. А\u00a0за\u00a0счет того\u00a0что\u00a0комплектующие производятся позволяет сделать плиссе доступным`,
        price: 4800,
        image: simplePlisse,
        buttonTag: 'Заказать расчет'
    },
    {
        name: 'Москитные сетки плиссе для больших проемов',
        description: `На\u00a0большие дверные и\u00a0порталы используется специальный профиль, усиленный. Сетка имеет противоветровые усиления. Производство Италия`,
        price: 9000,
        image: bigPlisse,
        buttonTag: 'Заказать расчет'
    },
    {
        name: 'Рулонные шторы',
        description: `Наша компания также занимается изготовлением и\u00a0монтажом рулонных штор, штор плиссе, римских штор и\u00a0жалюзи. Наши специалисты помогут вам подобрать материалы под\u00a0ваш интерьер прямо у\u00a0вас дома`,
        price: 1000,
        image: rollBlinds,
        buttonTag: 'Заказать расчет'
    }
]

export const conditions = [
    {
        title: 'Оплата',
        text: [ 'Работаем без\u00a0предоплаты', 'Оплата по\u00a0факту получения изделия' ],
        icon: <PaymentIco className='h-12 text-red-600'/>
    },
    {
        title: 'Доставка',
        text: [ 'Доставка осуществляется нашим собственным транспортом', 'Стоимость доставки в\u00a0пределах КАД и\u00a0Мурино, Янино, Шушары 400\u00a0\u20BD' ],
        icon: <DeliveryIco className='h-12 text-red-600'/>
    },
    {
        title: 'Гарантия',
        text: [ 'На\u00a0работы по\u00a0монтажу противомоскитных систем\u00a0–\u00a01\u00a0год', 'На\u00a0сами изделия: москитные сетки и\u00a0их конструкции –\u00a01\u00a0год' ],
        icon: <VerifiedIco className='h-12 text-red-600'/>
    }
]
