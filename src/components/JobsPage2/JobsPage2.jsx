import JobsHeader from "./JobsHeader/JobsHeader"
import './JobsPage2.css'
import JobCard from './JobCard/JobCard'
import DettagliLavoro from './DettagliLavoro/DettagliLavoro'

const JobsPage2 = () => {
    return (
        <>
           <JobsHeader />
            <div className='jobsPageDue'>
                <div className='jobsPageDueLeft'>
                    <h1>LEFT</h1>
                    <JobCard/>
                </div>
                <div className='jobsPageDueRight'>
                    <DettagliLavoro />
                </div>
            </div>
        </>
    )
}

export default JobsPage2