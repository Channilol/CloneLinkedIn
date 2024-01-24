import ConsigliPerTe from './ConsigliPerte/ConsigliPerTe'
import './Homepage.css'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='homepageLeft'>
                {/* LEFT */}
            </div>
            <div className='homepageCenterAndRight'>
                <div className='homepageCenter'>
                    <ConsigliPerTe />
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