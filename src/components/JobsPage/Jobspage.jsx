import MyHeader from "../MyHeader/MyHeader";
import "./Jobspage.css"
import MyOfferte from "./MyOfferte/MyOfferte";
<<<<<<< HEAD
import RicercheSuggerite from "./RicercheSuggerite/RicercheSuggerite";
=======
import SelezioneInCorso from "./SelezioneInCorso/SelezioneInCorso";
import RicercheSuggerite from "./RicercheSuggerite/RicercheSuggerite";

>>>>>>> ed73269c9f5d7d5c4a5534258e9eebeffc2f347a

const Jobspage = () => {
    return (
        <>
      <MyHeader />
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
                        {/* RIGHT */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobspage;