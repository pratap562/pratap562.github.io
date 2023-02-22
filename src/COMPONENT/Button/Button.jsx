import './Button.css'

let Button = (props) => {
    let dynamicClass
    if (props.class) {
        dynamicClass = props.class + ' buttons'
    } else {
        dynamicClass = 'buttons'
    }
    let download = props.download || ''
    let btnId = props.btnId || ''
    let anchorId = props.anchorId || ''
    return (
        <div className={dynamicClass} id={btnId}>
            <a href={props.link} onClick={() => window.open(props.link, '_blank')} id={anchorId} rel="noreferrer" download={download} >{props.text}</a>
        </div>
    )
}

export default Button

// resume-button-1