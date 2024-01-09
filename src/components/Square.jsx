import {useState} from "react";

const Square = ({}) => {

    const [value, setValue] = useState(null)

    const squareClickHandler = () => {
        // console.log('Clicked')
        setValue("X")
    }

    return (
        <button className="square" onClick={squareClickHandler}>{value}</button>
    )
}

export default Square;