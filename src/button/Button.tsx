type Props = {
    name: string,
    onClick: () => void
}
export const Button = ({name, onClick}: Props) => {
    const onClickHandler = () => {
        onClick()
    }
    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}