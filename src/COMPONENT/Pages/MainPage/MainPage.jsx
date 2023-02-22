import './MainPage.css'
import '../../variable.css'
import Button from '../../Button/Button'

let Main = () => {
    return (
        <div className='main' id='home'>
            <section>
                <div>
                    <h1> Hi, my name is</h1>
                </div>
                <div className='name' id="user-detail-name">
                    <h2 className='bigger'>Pratap<span class="material-symbols-outlined">
                        code
                    </span></h2>
                </div>
                <div>
                    <h3 className='bigger'>I build things for the web.</h3>
                </div>
                <div id="user-detail-intro">
                    <p>
                        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused
                        building accessible, human-centered products at Upstatement.
                    </p>
                </div>
                <div></div>
                <Button text='Download Resume' anchorId="resume-link-2" btnId="resume-button-2" link='./resume.pdf' download='Pratap_Resume.pdf'></Button>
            </section>
            {/* <Button text='tikTok' ></Button> */}
            {/* <Button text='Hello' ></Button> */}
        </div>
    )
}


export default Main