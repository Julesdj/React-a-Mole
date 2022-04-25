import { useEffect } from 'react'
import moleImage from '../mole.png'

const Mole = (props) => {

    return (
        <div>
            <img  src={moleImage} onClick={props.handleClick} />
        </div>
    )
}

export default Mole