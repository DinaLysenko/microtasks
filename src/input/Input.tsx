import type {ChangeEvent} from 'react';

type Props = {
   title: string
   setTitle: (title: string) => void
};
export const Input = ({title, setTitle}: Props) => {
    const onChangeHandler=(event: ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }
    return (
        <input value={title} onChange={onChangeHandler}/>
    );
};