import Header from './components/Header';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Calc from './components/Calc';
import Footer from './components/Footer';
import Conditions from './components/Conditions';
import Title from './components/Title';
import Grids from './components/Grids';
import Advice from './components/Advice';
import Snackbar from './components/Snackbar';
import React, { useState } from 'react';

function App() {
    const [snackState, setSnackState] = useState({
        color: 'green',
        message: '',
        hide: true
    });

    const doVisible = (color = 'green', message = '', hide = true) => {
        let currentState = {
            hide,
            message,
            color
        };
        setSnackState(currentState);
        setTimeout(()=>{
                setSnackState({ ...currentState, hide: true });
        },3000);
    }

    return (<div>
            <Snackbar {...snackState}/>
            <Header doVisible={ doVisible }/>
            <Nav doVisible={ doVisible }/>
            <Slider/>
            <Title title={ 'Рамочные москитные сетки' }/>
            <Calc doVisible={ doVisible }/>
            <Title id='grids' title={ 'Виды москитных сеток' }/>
            <Grids doVisible={ doVisible }/>
            <Title id='conditions' title={ 'Условия' }/>
            <Conditions/>
            <Title title={ 'Как ухаживать и хранить?' }/>
            <Advice/>
            <Footer/>
        </div>
    );
}

export default App;
