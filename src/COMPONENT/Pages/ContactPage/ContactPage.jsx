import HeadLine from '../../HeadLine/HeadLine';

import './ContactPage.css'
import '../../variable.css'
let Contact = () => {
    return (
        <div id='contact'>
            <div>
                <HeadLine text='Contact' index='5' />
            </div>
            <div>
                <div>
                    <div>
                        <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
                    </div>
                    <div>
                        <div>
                            <input placeholder='Name' />
                            <input placeholder='Email' />
                        </div>
                        <div>
                            <input placeholder='Subject' />
                        </div>
                        <div>
                            <textarea placeholder='Message' />
                        </div>
                    </div>
                </div>
                <div className='contact-links' >
                    <div></div>
                    <div>
                        <a href='https://github.com/pratap562' target='_blank' rel="noreferrer" >
                            <div id='contact-github'>GithHub</div>
                        </a>
                        <a href='https://www.linkedin.com/in/pratap-686a1a214/' target='_blank' rel="noreferrer" >
                            <div id='contact-linkedin'>Linkedin</div>
                        </a>
                        <div id='contact-phone'>PhoneNo</div>

                        <div id='contact-email'>kumpratap562@gmail.com</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact