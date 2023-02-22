import './Skill.css'
import '../../variable.css'
import { ReactComponent as HtmlSvg } from '../../Img/html5.svg';
import { ReactComponent as CssSvg } from '../../Img/css.svg';
import { ReactComponent as ExpSvg } from '../../Img/express.svg';
import { ReactComponent as GitSvg } from '../../Img/git.svg';
import { ReactComponent as GHSvg } from '../../Img/github.svg';
import { ReactComponent as NodeSvg } from '../../Img/node.svg';
import { ReactComponent as JSSvg } from '../../Img/javascript.svg';
import { ReactComponent as MongodbSvg } from '../../Img/mongodb.svg';
import { ReactComponent as MysqlSvg } from '../../Img/mysql.svg';
import { ReactComponent as RctSvg } from '../../Img/react.svg';
import { ReactComponent as TsSvg } from '../../Img/typescript.svg';
import { ReactComponent as VsSvg } from '../../Img/vscode.svg';
import HeadLine from '../../HeadLine/HeadLine';



let Skill = () => {
    return (
        <div id='skills'>
            <div>
                <HeadLine text='Skills' index='3' />
            </div>
            <div>

                <div className='skills-card'>
                    <HtmlSvg className='skills-card-img'></HtmlSvg>
                    <div>
                        <div className='skills-card-name'>HTML</div>
                    </div>
                </div>
                <div className='skills-card'>
                    <CssSvg className='skills-card-img'></CssSvg>
                    <div>
                        <div className='skills-card-name'>Css</div>
                    </div>
                </div>
                <div className='skills-card'>
                    <JSSvg className='skills-card-img'></JSSvg>
                    <div>
                        <div className='skills-card-name'>JavaScript</div>
                    </div>
                </div>
                <div className='skills-card'>
                    <NodeSvg className='skills-card-img'></NodeSvg>
                    <div>
                        <div className='skills-card-name'>Node</div>
                    </div>
                </div>
                <div className='skills-card'>
                    <ExpSvg className='skills-card-img'></ExpSvg>
                    <div>
                        <div className='skills-card-name'>Express</div>
                    </div>
                </div>
                <div className='skills-card'>
                    <MongodbSvg className='skills-card-img'></MongodbSvg>
                    <div>
                        <div className='skills-card-name'>Mongodb</div>
                    </div>
                </div>
                <div className='skills-card'>
                    <RctSvg className='skills-card-img'></RctSvg>
                    <div>
                        <div className='skills-card-name'>ReactJs</div>
                    </div>
                </div>
                <div className='skills-card'>
                    <TsSvg className='skills-card-img'></TsSvg>
                    <div>
                        <div className='skills-card-name'>TypeScript</div>
                    </div>
                </div>
                <div className='skills-card'>
                    <MysqlSvg className='skills-card-img'></ MysqlSvg>
                    <div>
                        <div className='skills-card-name'>MySql</div>
                    </div>

                </div>
                <div className='skills-card'>
                    <GitSvg className='skills-card-img'></GitSvg>
                    <div>
                        <div className='skills-card-name'>Git</div>
                    </div>
                </div>
                <div className='skills-card'>
                    <GHSvg className='skills-card-img'></GHSvg>
                    <div>
                        <div className='skills-card-name'>GithHub</div>
                    </div>
                </div>
                <div className='skills-card'>
                    <VsSvg className='skills-card-img'></VsSvg>
                    <div>
                        <div className='skills-card-name'>Vs Code</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill