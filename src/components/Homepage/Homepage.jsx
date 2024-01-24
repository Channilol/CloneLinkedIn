import './Homepage.css'
import Notizie from './Notizie/Notizie'


const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='homepageLeft'>
                {/* LEFT */}
                <FillerProva/>
            </div>
            <div className='homepageCenterAndRight'>
                <div className='homepageCenter'>
                    {/* CENTER */}
                    <FillerProva/>
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