import MyHeader from "../MyHeader/MyHeader";
import "./Jobspage.css"
import MyOfferte from "./MyOfferte/MyOfferte";
import RicercheSuggerite from "./RicercheSuggerite/RicercheSuggerite";
import ReccommendedForYou from "./RecommendedForYou/RecommendedForYou";

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
                <ReccommendedForYou />
                    {/* CENTER */}
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