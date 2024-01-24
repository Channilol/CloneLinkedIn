import ConsigliPerTe from './ConsigliPerte/ConsigliPerTe'
import './Homepage.css'
import GruppiEventiHastag from './GruppiEventiHastag/GruppiEventiHastag'
import Minifooter from './MiniFooter/MiniFooter'
import BigFooter from './BigFooter/BigFooter'
import { useState } from 'react'
import WelcomeMessage from './WelcomeMessage/WelcomeMessage'
import Notizie from './Notizie/Notizie'


const Homepage = () => {
    const [isFooterOn, setIsFooterOn] = useState(false)
    const handleOpenFooter = () => {
        setIsFooterOn(true)
    }
    const handleCloseFooter = () => {
        setIsFooterOn(false)
    }
    return (
<>
{isFooterOn ? (<BigFooter close={handleCloseFooter} />) : ""} 
        <div className='homepage'>      
            <div className='homepageLeft'>
                <GruppiEventiHastag /> 
                <WelcomeMessage/>
                {/* LEFT */}     
            </div>
            <div className='homepageCenterAndRight'>
                <div className='homepageCenter'>
                    <ConsigliPerTe />
                    {/* CENTER */}
                    
                </div>
                <div className='homepageRight'>
                    {/* RIGHT */}
                    <Minifooter open={handleOpenFooter}/> 
                    <Notizie />
                </div>

            </div>
        </div>
        </>
    )
}

export default Homepage