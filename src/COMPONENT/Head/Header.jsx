// import image from '../Img/portfolio_logo'
import './Header.css'
import '../variable.css'
import Button from '../Button/Button'
const Header = () => {
    return (
        <header>
            <nav id='nav-menu'>
                <div className="logo">
                    <img src={require("../Img/portfolio_logo4.png")} alt='logo' />
                </div>
                <div className="rightNav">
                    <ol className="pagesLink" >
                        <li className='nav-link home' >
                            <a href="/#home" >
                                Home
                            </a>
                        </li>
                        <li className='nav-link about'>
                            <a href="/#about" >
                                About
                            </a>
                        </li>
                        <li className='nav-link skills'>
                            <a href="/#skills" >
                                Skills
                            </a>
                        </li>
                        <li className='nav-link projects'>
                            <a href="/#project" >
                                Project
                            </a>
                        </li>
                        <li className='nav-link contact'>
                            <a href="/#contact" >
                                Contact
                            </a>
                        </li>
                    </ol>
                    <Button class='nav-link resume' text='Resume' link='./resume.pdf'></Button>
                </div>
            </nav>
        </header>
    )
}

export default Header