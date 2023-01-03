import './Button.css'

let Button = (props) => {
    let dynamicClass
    if (props.class) {
        dynamicClass = props.class + ' buttons'
    } else {
        dynamicClass = 'buttons'
    }
    return (
        <div className={dynamicClass} >
            <a href={props.link} target='_blank' >{props.text}</a>
        </div>
    )
}

export default Button