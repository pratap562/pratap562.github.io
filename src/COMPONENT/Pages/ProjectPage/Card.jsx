import './Card.css'
import '../../variable.css'
import Button from '../../Button/Button';
// import '../../Img'

let Card = (props) => {


    return (
        <div className='project-card'>
            <div className='project-image'>
                <img src={require(`../../Img/${props.img}`)} alt='Project-Img' />
            </div>
            <div >
                <div className='project-title'>{props.title}</div>
                <div className='project-description'>{props.description}</div>
                <div className='project-tech-stack'>{props.techStack}</div>
                <div>
                    <Button class='project-github-link' text='GithHub' link={props.gitHubLink} />
                    <Button class='project-deployed-link' text='Deployed' link={props.deployedLink} />
                </div>
            </div>
        </div>
    )
}

export default Card