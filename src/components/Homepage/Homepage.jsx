import './Homepage.css'
import FillerProva from './FillerProva'

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
                    <FillerProva/>
                </div>
            </div>
        </div>
    )
}

export default Homepage