import './Header.css'
import '../variable.css'
import Button from '../Button/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    return (
        <div>
            <div id='nav-menu'>
                <div className="plus">
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
                    <div>
                        <Button anchorId="resume-link-1" btnId="resume-button-1" class='nav-link resume' text='Resume' link='./resume.pdf' download='Pratap_Resume'></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header