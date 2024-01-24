import "./Jobspage.css"
import MyOfferte from "./MyOfferte/MyOfferte";
import RicercheSuggerite from "./RicercheSuggerite/RicercheSuggerite";

const Jobspage = () => {
    return (
        <div className='jobspage'>
            <div className='jobspageLeft'>
                {/* LEFT */}
                <MyOfferte />
            </div>
            <div className='jobspageCenterAndRight'>
                <div className='jobspageCenter'>
                <RicercheSuggerite />
                    {/* CENTER */}
                </div>
                <div className='jobspageRight'>
                    {/* RIGHT */}
                </div>
            </div>
        </div>
    )
}

export default Jobspage;