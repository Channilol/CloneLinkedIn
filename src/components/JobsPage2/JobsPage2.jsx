import JobsHeader from "./JobsHeader/JobsHeader"
import './JobsPage2.css'

const JobsPage2 = () => {
    return (
        <>
            <JobsHeader />
            <div className='jobsPageDue'>
                <div className='jobsPageDueLeft'>
                    <h1>LEFT</h1>
                </div>
                <div className='jobsPageDueRight'>
                    <h1>Right</h1>
                </div>
            </div>
        </>
    )
}

export default JobsPage2