import './GitHub.css'
import '../../variable.css'
// import GitHubCalendar from 'react-github-calendar';

let GitHub = () => {


    // setTimeout(() => {
    //     GitHubCalendar(".calendar", "pratap562");

    //     // or enable responsive functionality:
    //     GitHubCalendar(".calendar", "pratap562", { responsive: true });

    //     // Use a proxy
    //     GitHubCalendar(".calendar", "pratap562", {
    //         proxy(username) {
    //             return fetch(`https://your-proxy.com/github?user=pratap562`)
    //         }
    //     }).then(r => r.text())

    // }, 5000);


    return (
        <div className='github'>
            <div>
                <h1>GitHub Stats</h1>
            </div>
            <div>
                {/* <div>
                    <div class="react-activity-calendar">
                        Loading the data just for you.
                    </div>
                </div> */}
                <div>
                    <div>
                        <img id='github-top-langs' src='https://github-readme-stats.vercel.app/api/top-langs/?username=pratap562&theme=synthwave' />
                    </div>
                </div>

                <div>
                    <div>
                        <img id='github-streak-stats' src='https://github-readme-streak-stats.herokuapp.com?user=pratap562&theme=material' />
                    </div>
                    <div>
                        <img id='github-stats-card' src='https://github-readme-stats.vercel.app/api?username=pratap562&show_icons=true&theme=merko' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GitHub
// [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=pratap562&theme=material)](https://git.io/streak-stats) 