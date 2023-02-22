import './Project.css'
import '../../variable.css'
import Card from './Card';
import HeadLine from '../../HeadLine/HeadLine';

let Project = () => {
    let data = [
        {
            title: 'Pacifico Store',
            description: `Pacifico, an online fashion retail platform inspired by Myntra, used H&M API implemented auth and all basic crud operation Implemented user can purchase product add to cart add to wishlist data stored in json-serveradmin side as well`,
            techStack: 'HTML | CSS | JavaScript | Json-Server',
            gitHubLink: 'https://github.com/pratap562/pacific-clam-4161/',
            deployedLink: 'https://profound-chebakia-4a28d7.netlify.app/',
            img: 'project1.png'

        },
        {
            title: 'Travel Pro',
            description: `A hotel and flight booking website allows users to search and book accommodations and flights online. It typically has a search function, a booking process, and may offer additional features such as the ability to manage and modify bookings or earn.`,
            techStack: 'HTML | CSS | JavaScript | Node | Express  | Mongodb',
            gitHubLink: 'https://github.com/anujrawat22/-rare-animal-2569',
            deployedLink: 'https://enchanting-pegasus-5127db.netlify.app/index.html',
            img: 'project2.png'

        },
        {
            title: 'Pacifico Store',
            description: `Pacifico, an online fashion retail platform inspired by Myntra, used H&M API implemented auth and all basic crud operation Implemented user can purchase product add to cart add to wishlist data stored in json-serveradmin side as well`,
            techStack: 'HTML | CSS | JavaScript | Json-Server',
            gitHubLink: 'https://github.com/pratap562/pacific-clam-4161/',
            deployedLink: 'https://profound-chebakia-4a28d7.netlify.app/',
            img: 'project1.png'

        },
        {
            title: 'Travel Pro',
            description: `A hotel and flight booking website allows users to search and book accommodations and flights online. It typically has a search function, a booking process, and may offer additional features such as the ability to manage and modify bookings or earn.`,
            techStack: 'HTML | CSS | JavaScript | Node | Express  | Mongodb',
            gitHubLink: 'https://github.com/anujrawat22/-rare-animal-2569',
            deployedLink: 'https://enchanting-pegasus-5127db.netlify.app/index.html',
            img: 'project2.png'

        }
    ]
    return (
        <div id='projects'>
            <HeadLine text='projects' index='4' />
            {data.map((el) => (
                <Card title={el.title} description={el.description} techStack={el.techStack} gitHubLink={el.gitHubLink} deployedLink={el.deployedLink} img={el.img} ></Card>
            ))}
        </div>
    )
}
export default Project