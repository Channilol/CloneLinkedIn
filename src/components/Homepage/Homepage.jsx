import './Homepage.css'
import WelcomeMessage from './WelcomeMessage/WelcomeMessage'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='homepageLeft'>
                {<WelcomeMessage/>}
            </div>
            <div className='homepageCenterAndRight'>
                <div className='homepageCenter'>
                    {/* CENTER */}
                </div>
                <div className='homepageRight'>
                    {/* RIGHT */}
                </div>
            </div>
        </div>
    )
}

export default Homepage