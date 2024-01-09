
const Square = ({value}) => {


    return (
        <button className="square" onClick={squareClickHandler}>{value}</button>
    )
}

export default Square;