import ConsigliPerTe from './ConsigliPerte/ConsigliPerTe'
import './Homepage.css'
import GruppiEventiHastag from './GruppiEventiHastag/GruppiEventiHastag'
import Minifooter from './MiniFooter/MiniFooter'
import BigFooter from './BigFooter/BigFooter'
import { useState } from 'react'
import WelcomeMessage from './WelcomeMessage/WelcomeMessage'
import Notizie from './Notizie/Notizie'
import MyHeader from '../MyHeader/MyHeader'
import CreateNewPost from './createNewPost/CreateNewPost'
import PostContainer from './PostContainer/PostContainer'



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
      <MyHeader />
       {isFooterOn ? (<BigFooter close={handleCloseFooter} />) : ""} 
        <div className='homepage'>      
            <div className='homepageLeft'>
                <WelcomeMessage/>
                <GruppiEventiHastag />               
                {/* LEFT */}     
            </div>
            <div className='homepageCenterAndRight'>
                <div className='homepageCenter'>
                    <CreateNewPost/>
                    <ConsigliPerTe />
                    <PostContainer />
                    {/* CENTER */}
                    
                </div>
                <div className='homepageRight'>
                    <Notizie />
                    <Minifooter open={handleOpenFooter}/> 
                    
                    {/* RIGHT */}
                </div>
            </div>
        </div>
     </>
    )
}

export default Homepage