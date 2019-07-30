import React, { useState } from 'react';
import StyledConverter from './Converter.styled';
import {IValue} from "../../App";

interface IConverterProps{
    SelectValues: IValue[]

}

export default function Converter({SelectValues}: IConverterProps) {
    const [valueLeft, setValueLeft] = useState('');
    const [valueRight, setValueRight] = useState('');
    const [coefLeft, setCoefLeft] = useState(1);
    const [coefRight, setCoefRight] = useState(1);

    function handleInputChangeLeft(event: React.ChangeEvent<HTMLInputElement>){
        setValueRight(event.target.value);
        setValueLeft( String(Number(event.target.value) * coefLeft));
    }

    function handleInputChangeRight(event: React.ChangeEvent<HTMLInputElement>){
        setValueRight( String(Number(event.target.value) * coefRight));
        setValueLeft(event.target.value)
    }

    function handleSelectChangeLeft(event: React.ChangeEvent<HTMLSelectElement>){
        setCoefLeft(Number(event.target.value));
        console.log('Select value', event.target.value)
    }

    function handleSelectChangeRight(event: React.ChangeEvent<HTMLSelectElement>){
        setCoefRight(Number(event.target.value));
        console.log('Select value', event.target.value)
    }
    
    return (
        <StyledConverter>
            <p>Converter</p>
            <div className="converter__container">
                <input type="number" placeholder="Input your value here" value={valueLeft} onChange={handleInputChangeRight}/>
                <select name="FirstSelect" id="" onChange={handleSelectChangeLeft}>
                    {
                        SelectValues.map(({id, name, coef}) => (
                            <option
                                key={id}
                                value={coef}
                            >
                                {name}
                            </option>
                        ))
                    }
                </select>
                <div>=</div>
                <input type="number" placeholder="Input your value here" value={valueRight} onChange={handleInputChangeLeft}/>
                <select name="SecondSelect" id="" onChange={handleSelectChangeRight}>
                    {
                        SelectValues.map(({id, name, coef}) => (
                            <option
                                key={id}
                                value={coef}
                            >
                                {name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <p>COEF_LEFT: {coefLeft}</p>
            <p>COEF_RIGHT: {coefRight}</p>
        </StyledConverter>
    );
}
