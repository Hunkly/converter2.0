import React, { useState } from 'react';
import StyledConverter from './Converter.styled';

interface IConverterProps{
    firstSelectValue1: string;
    firstSelectValue2: string;
    firstSelectValue3: string;

    secondSelectValue1: string;
    secondSelectValue2: string;
    secondSelectValue3: string;
}

export default function Converter() {
    const [valueLeft, setValueLeft] = useState('');
    const [valueRight, setValueRight] = useState('');

    function handleChangeLeft(event: React.ChangeEvent<HTMLInputElement>){
        setValueRight(event.target.value);
        setValueLeft(event.target.value)
    }

    function handleChangeRight(event: React.ChangeEvent<HTMLInputElement>){
        setValueRight(event.target.value);
        setValueLeft(event.target.value)
    }

    return (
        <StyledConverter>
            <p>Converter</p>
            <div className="converter__container">
                <input type="number" placeholder="Input your value here" value={valueLeft} onChange={handleChangeRight}/>
                <select name="FirstSelect" id="">
                    <option value="">metres</option>
                    <option value="">yards</option>
                    <option value="">miles</option>
                </select>
                <div>=</div>
                <input type="number" placeholder="Input your value here" value={valueRight} onChange={handleChangeLeft}/>
                <select name="SecondSelect" id="">
                    <option value="">metres</option>
                    <option value="">yards</option>
                    <option value="">miles</option>
                </select>
            </div>
        </StyledConverter>
    );
}
