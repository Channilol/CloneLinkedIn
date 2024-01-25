import JobCard from "../JobsPage2/JobCard/JobCard";
import "./Jobspage.css"
import MyOfferte from "./MyOfferte/MyOfferte";


const Jobspage = () => {
    return (
        <div className='jobspage'>
            <div className='jobspageLeft'>
                
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
    )
}

export default Jobspage;