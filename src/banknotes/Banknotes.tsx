import {useState} from 'react';
import {NewComponent} from './NewComponent.tsx';

type ButtonName = 'All' | 'RUBLS' | 'Dollars'
export const Banknotes = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [buttonName, setButtonName] = useState<ButtonName>('All')

    const onClickHandler = (name: ButtonName) => {
        setButtonName(name)
    }
    let currentMoney = money

    if (buttonName === 'RUBLS') {
        console.log(currentMoney)
        currentMoney = money.filter(m => m.banknots === 'RUBLS')
        console.log(currentMoney)
    }
    if (buttonName === 'Dollars') {
        currentMoney = money.filter(m => m.banknots === 'Dollars')

    }
    return (
        <>
            <NewComponent currentMoney={currentMoney} onClick={onClickHandler} />
        </>

    )
}