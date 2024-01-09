const Square = ({value}) => {

    const squareClickHandler = () => {
        console.log('Clicked')
    }

    return (
        <button className="square" onClick={squareClickHandler}>{value}</button>
    )
}

export default Square;