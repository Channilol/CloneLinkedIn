import './JobsPage2.css'
import DettagliLavoro from './DettagliLavoro/DettagliLavoro'

const JobsPage2 = () => {
    return (
        <>
        
        {/* header che compare a 640px */}

        <div className='jobsPageDue'>
            <div className='jobsPageDueLeft'>
                <h1>LEFT</h1>
            </div>
            <div className='jobsPageDueRight'>
                <DettagliLavoro />
            </div>
        </div>
        </> 
    )
}

export default JobsPage2