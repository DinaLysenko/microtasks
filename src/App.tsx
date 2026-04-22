import './App.css'
import {Site} from './site/Site.tsx';
import {Students} from './students/Students.tsx';
import {TopCars} from './topCars/TopCars.tsx';
import {Button} from './button/Button.tsx';
import {Counter} from './Counter.tsx';
import {Banknotes} from './banknotes/Banknotes.tsx';

function App() {
    const students = [
        {id: 1, name: 'James', age: 8},
        {id: 2, name: 'Robert', age: 18},
        {id: 3, name: 'John', age: 28},
        {id: 4, name: 'Michael', age: 38},
        {id: 5, name: 'William', age: 48},
        {id: 6, name: 'David', age: 58},
        {id: 7, name: 'Richard', age: 68},
        {id: 8, name: 'Joseph', age: 78},
        {id: 9, name: 'Thomas', age: 88},
        {id: 10, name: 'Charles', age: 98},
        {id: 11, name: 'Christopher', age: 100},
    ]
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ]
    const onClickHandler = (name: string) => {
        console.log(name)
    }
    const onClickHandlerThird = () => {
        console.log('third')
    }
    return (
        <>
            <Site/>
            <Students students={students}/>
            <TopCars topCars={topCars}/>
            <Button name={'first'} onClick={() => onClickHandler('first')}/>
            <Button name={'second'} onClick={() => onClickHandler('second')}/>
            <Button name={'third'} onClick={onClickHandlerThird}/>
            <Counter/>
            <Banknotes/>
        </>
    );

}

export default App
