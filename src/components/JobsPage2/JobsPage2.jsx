import './JobsPage2.css'
import JobCard from './JobCard/JobCard'

const JobsPage2 = () => {
    return (
        <>
        
        {/* header che compare a 640px */}

        <div className='jobsPageDue'>
            <div className='jobsPageDueLeft'>
                {<JobCard/>}
            </div>
            <div className='jobsPageDueRight'>
                <h1>Right</h1>
            </div>
        </div>
        </> 
    )
}

export default JobsPage2