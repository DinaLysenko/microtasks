import {type ChangeEvent, useState} from 'react';


type Props = {
    addMessage: (title: string) => void;
};
export const FullInput = ({addMessage}: Props) => {
    const [title, setTitle] = useState<string>('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }
    const onClickHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};