import MyHeader from "../MyHeader/MyHeader";
import "./Jobspage.css"
import MyOfferte from "./MyOfferte/MyOfferte";
import RicercheSuggerite from "./RicercheSuggerite/RicercheSuggerite";

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