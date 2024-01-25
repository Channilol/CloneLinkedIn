import MyHeader from "../MyHeader/MyHeader";
import "./Jobspage.css"
import MyOfferte from "./MyOfferte/MyOfferte";

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