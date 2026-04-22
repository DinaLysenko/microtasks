import {Button} from '../button/Button.tsx';

type Props = {
    currentMoney: Money[],
    onClick: (name: string) => void
}
type Money = {
    banknots: string,
    value: number,
    number: string
}
export const NewComponent = ({currentMoney, onClick}: Props) => {
    return (
        <>
            <ul>
                {currentMoney.map((m, index) => {

                    return (
                        <li key={index}>
                            <span>{m.banknots} </span>
                            <span>{m.value} </span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <Button name={'All'} onClick={() => onClick('All')}/>
            <Button name={'Rubles'} onClick={() => onClick('RUBLS')}/>
            <Button name={'Dollars'} onClick={() => onClick('Dollars')}/>
        </>

    )
}