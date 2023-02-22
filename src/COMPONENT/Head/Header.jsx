// import image from '../Img/portfolio_logo'
import './Header.css'
import '../variable.css'
import Button from '../Button/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from 'react'

const Header = () => {
    let style = { transform: "translate(300px)" }
    // setTimeout(() => {
    //     console.log('hi');
    // }, 50000);
    const openSidebar = () => {
        document.getElementsByClassName('responsive-nav')[0].style.transform = 'translate(0px)'
    }
    const closeSidebar = () => {
        document.getElementsByClassName('responsive-nav')[0].style.transform = 'translate(300px)'
    }
    // const { style, setNav } = useState({ visibility: 'visibile', color: 'red', fontSize: '40px' })
    return (
        <header>
            <nav id='nav-menu'>
                <div className="logo">
                    <img src={require("../Img/portfolio_logo4.png")} alt='logo' />
                </div>
                <div className="rightNav">
                    <ol className="pagesLink" >
                        <li className='nav-link home' >
                            <AnchorLink offset='100' href="#home" >
                                Home
                            </AnchorLink>
                        </li>
                        <li className='nav-link about'>
                            <AnchorLink offset='100' href="#about" >
                                About
                            </AnchorLink>
                        </li>
                        <li className='nav-link skills'>
                            <AnchorLink offset='100' href="#skills" >
                                Skills
                            </AnchorLink>
                        </li>
                        <li className='nav-link projects'>
                            <AnchorLink offset='100' href="#projects" >
                                Project
                            </AnchorLink>
                        </li>
                        <li className='nav-link contact'>
                            <AnchorLink offset='100' href="#contact" >
                                Contact
                            </AnchorLink>
                        </li>
                    </ol>
                    <Button anchorId="resume-link-1" btnId="resume-button-1" class='nav-link resume' text='Resume' link='./resume.pdf' download='Pratap_Resume'></Button>
                    <div className='hamberger-logo' onClick={openSidebar}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='responsive-nav' style={style}>
                    <div className='nav-menu'>
                        <div className="plus" onClick={closeSidebar}>
                            X
                        </div>
                        <div className="menu">
                            <div>
                                <AnchorLink offset='100' href="#home" >
                                    Home
                                </AnchorLink>
                            </div>
                            <div>
                                <AnchorLink offset='100' href="#about" >
                                    About
                                </AnchorLink>
                            </div>
                            <div>
                                <AnchorLink offset='100' href="#skills" >
                                    Skills
                                </AnchorLink>

                            </div>
                            <div>
                                <AnchorLink offset='100' href="#projects" >
                                    Project
                                </AnchorLink>
                            </div>
                            <div>
                                <AnchorLink offset='100' href="#contact" >
                                    Contact
                                </AnchorLink>
                            </div>
                            <Button anchorId="resume-link-1" btnId="resume-button-1" class='nav-link resume mod' text='Resume' link='./resume.pdf' download='Pratap_Resume'></Button>
                            {/* <div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header