import './Homepage.css'
import WelcomeMessage from './WelcomeMessage/WelcomeMessage'
import Notizie from './Notizie/Notizie'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='homepageLeft'>
                {<WelcomeMessage/>}
                {/* LEFT */}     
            </div>
            <div className='homepageCenterAndRight'>
                <div className='homepageCenter'>
                    {/* CENTER */}
                </div>
                <div className='homepageRight'>
                    {/* RIGHT */}
                    <Notizie />
                </div>
            </div>
        </div>
    )
}

export default Homepage