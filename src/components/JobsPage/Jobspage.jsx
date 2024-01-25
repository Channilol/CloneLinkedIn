import MyHeader from "../MyHeader/MyHeader";
import "./Jobspage.css"
import MyOfferte from "./MyOfferte/MyOfferte";
import SelezioneInCorso from "./SelezioneInCorso/SelezioneInCorso";
import RicercheSuggerite from "./RicercheSuggerite/RicercheSuggerite";
import { useState } from "react";
import Minifooter from "../Homepage/MiniFooter/MiniFooter";
import BigFooter from "../Homepage/BigFooter/BigFooter";


const Jobspage = () => {
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
        <div className='jobspage'>
            <div className='jobspageLeft'>
                {/* LEFT */}
                <MyOfferte />
            </div>
            <div className='jobspageCenterAndRight'>
                <div className='jobspageCenter'>
                <RicercheSuggerite />
                    {/* CENTER */}
                   <SelezioneInCorso />
                </div>
                    <div className='jobspageRight'>
                        <Minifooter open={handleOpenFooter}/> 
                        {/* RIGHT */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobspage;