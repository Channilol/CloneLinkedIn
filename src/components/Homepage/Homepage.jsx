import './Homepage.css'
import GruppiEventiHastag from './GruppiEventiHastag/GruppiEventiHastag'
import Minifooter from './MiniFooter/MiniFooter'
import Filler from './Filler'
import BigFooter from './BigFooter/BigFooter'
import { useState } from 'react'

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
                {/* LEFT */}
                 <GruppiEventiHastag /> 
            </div>
            <div className='homepageCenterAndRight'>
                <div className='homepageCenter'>
                    {/* CENTER */}
                     <Filler /> 
                    
                </div>
                <div className='homepageRight'>
                    {/* RIGHT */}
                    <Minifooter open={handleOpenFooter}/> 
                    
                </div>

            </div>
        </div>
        </>
    )
}

export default Homepage