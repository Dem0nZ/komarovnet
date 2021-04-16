import React, { useState } from 'react';
import CartItem from './CartItem';
import FrameGrid from './FrameGrid';

const Calc = (props) => {

    const [cart, setCart] = useState([]);

    const initialState = {
        width: '800',
        height: '1200',
        type: 'стандартное',
        fastering: 'Z-образное, пластик',
        color: 'белый',
        count: '1'
    };

    const [formState, setState] = useState( initialState );

    const initialContacts = {
        name: '',
        phone: ''
    };

    let totalSumm;

    const [contacts, setContacts] = useState( initialContacts )

    const onContactsChange = (stateField) => {
        return (e) => {
            const newContacts = Object.assign({}, contacts);
            newContacts[stateField] = e.target.value;
            setContacts(newContacts);
        };
    };

    const removeItemFromCart = (id) => {
        let currentCart = Object.assign([], cart);
        currentCart.splice(id, 1);
        setCart(currentCart);
    }

    const addToCart = () => {
        let newCart = Object.assign([], cart);
        const itemCart = Object.assign({}, formState);
        itemCart.cost = priceGrid;
        newCart.push(itemCart);
        setCart(newCart);
        setState( initialState )
    }

    const onChange = (stateField) => {
        return (e) => {
            const newState = Object.assign({}, formState);
            newState[stateField] = e.target.value;
            setState(newState);
        };
    }

    async function postMail ()  {
        try {
            let response = await fetch('http://localhost/test.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ cart, contacts })
            })
            if (response.status === 200) {
                props.doVisible('green', 'Ваша заявка отправлена', false);
                setContacts( initialContacts );
                setCart([] );
                setState( initialState );
            }
        } catch (e) {
            props.doVisible('red', 'Упс. Что-то пошло не так.', false);
        }
    }


    let square = (formState.width * formState.height / 1000000);
    if (square < 1) {
        square = 1;
    }

    let priceType;
    switch (formState.type) {
        case 'стандартное': {
            priceType = 1350;
            break;
        }
        case 'антимошка': {
            priceType = 1350;
            break;
        }
        case 'антикошка': {
            priceType = 1600;
            break;
        }
        case 'антипыль': {
            priceType = 1850;
            break;
        }
        case 'нано-фильтр CleanAir': {
            priceType = 1400;
            break;
        }
        default:
            priceType = 1000;
    }

    let priceFastering;
    switch (formState.fastering) {
        case 'Z-образное, пластик': {
            priceFastering = 0;
            break;
        }
        case 'Z-образное, металл': {
            priceFastering = 550;
            break;
        }
        case 'плунжерное': {
            priceFastering = 900;
            break;
        }
        default:
            priceFastering = 0;
    }

    let priceColor;
    switch (formState.color) {
        case 'белый': {
            priceColor = 450;
            break;
        }
        case 'коричневый': {
            priceColor = 1000;
            break;
        }
        case 'серый RAL7024': {
            priceColor = 2000;
            break;
        }
        case 'индивидуальный': {
            priceColor = 3000;
            break;
        }
        default:
            priceColor = 0;
    }


    const priceGrid = Math.ceil((square * priceType + priceFastering + priceColor) * formState.count);

    if (cart.length !== 0) {
       totalSumm = cart.reduce(function (prev, curr) {
            return prev + curr.cost
        }, 0);
    }
    const buttonCart = `Заказать за ${ totalSumm } \u20bd`;

    return (
        <div className='container mx-auto font-light text-lg'>
            <FrameGrid/>
            <h2 id='calc' className='bg-white text-2xl pt-4 pl-4'>
                Рассчитайте стоимость рамочных сеток и закажите их в два клика:
            </h2>
            <div className='flex shadow-lg py-8 bg-white divide-x divide-red-200 sm:flex-col'>
                <form className='w-2/5 flex flex-col px-4 sm:w-full'>
                    <div className='grid-calc gap-y-4 gap-x-5 items-baseline'>
                        <div>
                            <span>Размеры рамки:</span>
                        </div>
                        <div className='flex items-baseline'>
                            <input className='flex-grow w-20 border border-gray-200 focus:outline-none mr-1 text-right pr-2 h-2em sm:h-12'
                                   id='width'
                                   type='text'
                                   placeholder='Ширина'
                                   value={ formState.width }
                                   onChange={ onChange('width') }
                            />
                            <span className='mr-2'>мм</span>
                            <span>
                              &#215;
                            </span>
                            <input
                                className='flex-grow w-20 border border-gray-200 focus:outline-none ml-2 mr-1 text-right pr-2 h-2em sm:h-12'
                                id='height'
                                type='text'
                                placeholder='Высота'
                                value={ formState.height }
                                onChange={ onChange('height') }
                            />
                            <span>мм</span>
                        </div>

                        <div>
                            <label htmlFor='typeGrid'>Тип полотна:</label>
                        </div>
                        <div>
                            <select className='w-full focus:outline-none border border-gray-200 pl-2 h-2em  sm:h-12'
                                    name='typeGrid'
                                    id='typeGrid'
                                    value={ formState.type }
                                    onChange={ onChange('type') }>
                                <option value='стандартное'>стандартное</option>
                                <option value='антимошка'>антимошка</option>
                                <option value='антикошка'>антикошка</option>
                                <option value='антипыль'>антипыль</option>
                                <option value='нано-фильтр CleanAir'>нано-фильтр CleanAir</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor='fastering'>Крепление:</label>
                        </div>
                        <div>
                            <select className='w-full focus:outline-none border border-gray-200 pl-2 h-2em sm:h-12'
                                    id='fastering'
                                    value={ formState.fastering }
                                    onChange={ onChange('fastering') } >
                                <option value='Z-образное, пластик'>Z-образное, пластик</option>
                                <option value='Z-образное, металл'>Z-образное, металл</option>
                                <option value='плунжерное'>плунжерное</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor='colorFrame'>Цвет рамки:</label>
                        </div>
                        <div>
                            <select className='w-full focus:outline-none border border-gray-200 pl-2 h-2em sm:h-12'
                                    id='colorFrame'
                                    value={ formState.color }
                                    onChange={ onChange('color') }>

                                <option value='белый'>белый</option>
                                <option value='коричневый'>коричневый</option>
                                <option value='серый RAL7024'>серый RAL7024</option>
                                <option value='индивидуальный'>индивидуальный</option>
                            </select>

                        </div>
                        <div>
                            <span>Количество:</span>
                        </div>
                        <div>
                            <input className='w-12 border border-gray-200 focus:outline-none mr-1 text-right pr-2 h-2em sm:w-20 sm:h-12'
                                   id='count'
                                   type='text'
                                   value={ formState.count }
                                   onChange={ onChange('count') }
                            />
                            <label htmlFor='count'>шт</label>
                        </div>
                        <span>Цена:</span>
                        <h3 className='text-2xl font-normal'>{ priceGrid } &#8381;</h3>
                    </div>

                        <input
                            className='self-end focus:outline-none border border-red-600 bg-white hover:bg-red-200 text-red-600 px-3 py-2 mt-6 sm:w-full'
                            type='button'
                            value='Добавить в заказ'
                            onClick={ addToCart }
                        />
                </form>
                <div className='w-3/5 px-4 flex flex-col justify-between sm:w-full'>
                          <div hidden={ cart.length === 0 }>
                              <div className='flex mt-5 shadow-md p-4 sm:flex-col sm:mb-4'>
                                  <div className='flex w-full flex-col mr-4'>
                                      <label htmlFor='count'>Имя:</label>
                                      <input className='border border-gray-200 focus:outline-none text-left pl-1 h-2em  sm:h-12'
                                             id='name'
                                             type='text'
                                             value={ contacts.name }
                                             onChange={ onContactsChange('name') }
                                      />
                                  </div>
                                  <div className='flex w-full flex-col'>
                                      <label htmlFor='count'>Телефон или e-mail:</label>
                                      <input className='border border-gray-200 focus:outline-none text-left pl-1 h-2em sm:h-12'
                                             id='phone'
                                             type='text'
                                             value={ contacts.phone }
                                             onChange={ onContactsChange('phone') }
                                      />
                                  </div>
                              </div>
                          </div>
                    <div>
                        { (cart.length !== 0)
                            ? cart.map((item, index) => <CartItem
                                key={ index }
                                removeItemFromCart={ removeItemFromCart }
                                id={ index } { ...item }/>)
                            : <p className='sm:hidden'> Добавьте расчет рамки в заказ</p>   }

                        <input
                            className='focus:outline-none border border-red-600 bg-white hover:bg-red-200 text-red-600 px-3 py-2 sm:w-full'
                            type='button'
                            value={ buttonCart }
                            onClick={ postMail }
                            hidden={ cart.length === 0 }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calc;