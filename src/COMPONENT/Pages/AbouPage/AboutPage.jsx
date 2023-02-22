import './AboutPage.css'
import '../../variable.css'
import HeadLine from '../../HeadLine/HeadLine';

const About = () => {
    return (
        <div id='about' className='about section'>
            <HeadLine text='About Me' />
            <div className='about-main'>
                <div>
                    <p>Hello! My name is Pratap and I enjoy creating things that live on the internet. My interest in web development started back in 2021 after compleeting my 12th then join Masai School that teach me alot about <span> HTML & CSS! javascript Node express mongodb</span> lotof thing</p>
                    <p>Currently I have a lot of knowledge in <span>backend</span> things worked with node express mongodb and also with <span>live group and individual project</span> where i learn lot of things apart from technical like managing people doing meetings working on progress taking desecions</p>
                    <p>I have also worked with lot of project which Currently used by people in real word </p>
                </div>
                <div >
                    <img className='home-img' src={require('../../Img/myImg.jpg')} alt='profile-pic' />
                </div>
            </div>
        </div>
    )
}

export default About