import './HeadLine.css'
import '../variable.css'

let HeadLine = (props) => {
    return (
        <div className='headline'>
            <div>{props.text}</div>
        </div>
    )
}

export default HeadLine