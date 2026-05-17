
type Props = {
    name:string
    callBack:() => void;
};
export const Button = ({name, callBack}: Props) => {
    const onClickHandler=()=>{
        callBack()
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};