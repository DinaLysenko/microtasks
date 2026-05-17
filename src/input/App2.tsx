import {useState} from 'react';
/*import {FullInput} from './FullInput.tsx';*/
import {Input} from './Input.tsx';
import {Button} from './Button.tsx';

export function App2() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    const [title, setTitle] = useState<string>('');
    const addMessage = () => {
        setMessage([{message: title}, ...message])
        setTitle('')
    }
    return (
        <div className="App">
          {/* <FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}