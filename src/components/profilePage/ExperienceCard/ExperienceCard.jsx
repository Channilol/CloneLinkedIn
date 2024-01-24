import './ExperienceCard.css'
import { useParams } from 'react-router-dom'

const ExperienceCard = ({experienceData, openEdit, deleteFunc}) => {
    const iduser = useParams();
    const dataISO = experienceData.startDate;
    const data = new Date(dataISO);

    const giorno = data.getDate();
    const mese = data.getMonth() + 1; // I mesi in JavaScript sono zero-based, quindi aggiungi 1
    const anno = data.getFullYear();

    const dataFormattata = `${giorno}-${mese}-${anno}`;

    return (
        <div className='experienceCard'>
            <div className='experienceCardLeft'>
                {experienceData.image ? (<img src={experienceData.image} alt='experienceImg' />) : (<p>Img not found</p>)}
            </div>
            <div className='experienceCardRight'>
                <h2>{experienceData.role}</h2>
                <p>{experienceData.company}, dal {dataFormattata} {experienceData.endDate ? ' al ' + experienceData.endDate : 'ad oggi.'}</p>
                <p>{experienceData.area}</p>
            </div>
            {iduser.user === '65ae3ed3600be100183a8698' ? (
            <div className='editAndDeleteBtns'>
                <button onClick={openEdit}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                </button> 
                <button onClick={deleteFunc}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg>
                </button>
            </div>
            ) : ''}
        </div>
    )
}

{/* <div  key={experience._id}>
<ExperienceCard experienceData={experience} deleteFunc={deleteUserExperience(experience._id)} openEdit={handleOpenEditExperience} />
{isEditExperienceOn ? (<EditExperience experience={experience} close={handleCloseEditExperience} />) : ''}
</div>   */}

export default ExperienceCard