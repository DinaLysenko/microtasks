import {Button} from './button/Button.tsx';
import {useState} from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(1);
    const increment = () => {
        console.log(counter);
        setCounter(counter+1);
    }
    const decrement = () => {
        console.log(counter);
        setCounter(0);
    }
    return (
        <>
            <div>{counter}</div>
            <Button name={'+'} onClick={increment}/>
            <Button name={'0'} onClick={decrement}/>
        </>

    )
}