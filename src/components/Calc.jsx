import React, { useState } from 'react';
import CartItem from './CartItem';
import FrameGrid from './FrameGrid';


//todo: 4. валидация полей
//      5. якоря в менюшках
//      6. Брейкпоинты на адаптив

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
            priceColor = 1000;
            break;
        }
        case 'индивидуальный': {
            priceColor = 1000;
            break;
        }
        default:
            priceColor = 0;
    }


    const priceGrid = Math.ceil((square * priceType + priceFastering + priceColor) * formState.count);

    return (
        <div className='container mx-auto font-light text-lg'>
            <FrameGrid/>
            <div className='flex shadow-lg p-8 bg-white divide-x divide-red-200'>
                <form className='w-2/3'>
                    <div className='grid-calc gap-y-4 gap-x-5'>
                        <div>
                            <span>Размеры рамки:</span>
                        </div>
                        <div>
                            <input className='w-20 border border-gray-400 focus:outline-none mr-1 text-right pr-0.5'
                                   id='width'
                                   type='text'
                                   placeholder='Ширина'
                                   value={ formState.width }
                                   onChange={ onChange('width') }
                            />
                            <span className=' mr-2'>мм</span>
                            &#215;
                            <input
                                className='w-20 border border-gray-400 focus:outline-none ml-2 mr-1 text-right pr-0.5'
                                id='height'
                                type='text'
                                placeholder='Высота'
                                value={ formState.height }
                                onChange={ onChange('height') }
                            />
                            <span className='mr-2'>мм</span>
                        </div>

                        <div>
                            <label htmlFor='typeGrid'>Тип полотна:</label>
                        </div>
                        <div>
                            <select className='focus:outline-none border border-gray-400'
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
                            <fieldset id='fastering'>
                                <input
                                    type='radio'
                                    name='fastening'
                                    id='zPlastic'
                                    value='Z-образное, пластик'
                                    checked={ formState.fastering === 'Z-образное, пластик' }
                                    onChange={ onChange('fastering') }
                                />
                                <label className='ml-2' htmlFor='zPlastic'>Z-образное, пластик</label>
                                <input className='ml-4'
                                       type='radio'
                                       name='fastening'
                                       id='zMetal'
                                       value='Z-образное, металл'
                                       checked={ formState.fastering === 'Z-образное, металл' }
                                       onChange={ onChange('fastering') }
                                />
                                <label className='ml-2' htmlFor='zMetal'>Z-образное, металл</label>
                                <input className='ml-4'
                                       type='radio'
                                       name='fastening'
                                       id='plunger'
                                       value='плунжерное'
                                       checked={ formState.fastering === 'плунжерное' }
                                       onChange={ onChange('fastering') }
                                />
                                <label className='ml-2' htmlFor='plunger'>плунжерное</label>
                            </fieldset>
                        </div>

                        <div>
                            <label htmlFor='colorFrame'>Цвет рамки:</label>
                        </div>
                        <div>
                            <fieldset id='colorFrame'>
                                <input type='radio'
                                       name='color'
                                       id='whiteFrame'
                                       value='белый'
                                       checked={ formState.color === 'белый' }
                                       onChange={ onChange('color') }
                                />
                                <label className='ml-2' htmlFor='whiteFrame'>белый</label>
                                <input className='ml-4'
                                       type='radio'
                                       name='color'
                                       id='brownFrame'
                                       value='коричневый'
                                       checked={ formState.color === 'коричневый' }
                                       onChange={ onChange('color') }
                                />
                                <label className='ml-2' htmlFor='brownFrame'>коричневый</label>
                                <input className='ml-4'
                                       type='radio'
                                       name='color'
                                       id='grayFrame'
                                       value='серый RAL7024'
                                       checked={ formState.color === 'серый RAL7024' }
                                       onChange={ onChange('color') }
                                />
                                <label className='ml-2' htmlFor='grayFrame'>серый Ral7024</label>
                                <input className='ml-4'
                                       type='radio'
                                       name='color'
                                       id='ralFrame'
                                       value='индивидуальный'
                                       checked={ formState.color === 'индивидуальный' }
                                       onChange={ onChange('color') }
                                />
                                <label className='ml-2' htmlFor='ralFrame'>индивидуальный</label>
                            </fieldset>
                        </div>

                        <div>
                            <span>Количество:</span>
                        </div>
                        <div>
                            <input className='w-12 border border-gray-400 focus:outline-none mr-1 text-right pr-0.5'
                                   id='count'
                                   type='text'
                                   value={ formState.count }
                                   onChange={ onChange('count') }
                            />
                            <label htmlFor='count'>шт</label>
                        </div>
                    </div>
                    <div className='flex justify-end items-end'>
                        <div className='flex items-end'>
                            <span>Цена:</span>
                            <h3 className='text-2xl font-normal mx-1'>{ priceGrid } &#8381;</h3>
                        </div>
                        <input
                            className='focus:outline-none border border-red-600 bg-white hover:bg-red-200 text-red-600 px-5 py-2 mt-6 mx-10'
                            type='button'
                            value='Добавить в заказ'
                            onClick={ addToCart }
                        />
                    </div>
                </form>
                <div className='w-1/3 p-5 flex flex-col justify-between'>
                    <div>
                        { (cart.length !== 0) ? cart.map((item, index) => <CartItem
                            key={ index }
                            removeItemFromCart={ removeItemFromCart }
                            id={ index } { ...item }/>) : '' }
                    </div>
                    <div hidden={ cart.length === 0 }>
                        <div className='grid-calc gap-3 mt-5'>
                            <div>
                                <label htmlFor='count'>Ваше имя:</label>
                            </div>
                            <div>
                                <input className='border border-gray-400 focus:outline-none text-left pl-1'
                                       id='name'
                                       type='text'
                                       value={ contacts.name }
                                       onChange={ onContactsChange('name') }
                                />
                            </div>
                            <div>
                                <label htmlFor='count'>Ваш телефон:</label>
                            </div>
                            <div>
                                <input className='border border-gray-400 focus:outline-none text-left pl-1'
                                       id='phone'
                                       type='text'
                                       value={ contacts.phone }
                                       onChange={ onContactsChange('phone') }
                                />
                            </div>
                        </div>
                        <input
                            className='focus:outline-none border border-red-600 bg-white hover:bg-red-200 text-red-600 px-5 py-2 mt-6 mx-10'
                            type='button'
                            value='Заказать'
                            onClick={ postMail }
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Calc;