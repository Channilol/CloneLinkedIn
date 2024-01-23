import './Experiences.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import NewExperience from '../NewExperience/NewExperience'
import { getUserExperiencesAction } from '../../../redux/actions'
import EditExperience from '../../EditExperience/EditExperience'
import { useParams } from 'react-router-dom'
import ExperienceCard from '../../ExperienceCard/ExperienceCard'

const Experiences = () => {
    const [isNewExperienceOn, setIsNewExperienceOn] = useState(false)
    const [isEditExperienceOn, setIsEditExperienceOn] = useState(false)
    const experiences = useSelector(state => state.experiences.experiences)
    const loggedUser = useSelector((state) => state.user.userFetch)
    const dispatch = useDispatch()
    const iduser = useParams();

    useEffect(() => {
        console.log(iduser.user)
    },[])

    const handleOpenNewExperience = () => {
        setIsNewExperienceOn(true)
    }

    const handleCloseNewExperience = () => {
        setIsNewExperienceOn(false) 
    }

    const handleOpenEditExperience = () => {
        setIsEditExperienceOn(true)
    }

    const handleCloseEditExperience = () => {
        setIsEditExperienceOn(false)
    }

    const deleteUserExperience = async (expId) => {
        try {
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${loggedUser._id}/experiences/${expId}` ,{
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                    'Content-Type': 'application/json'
                },
            })
            if(res.ok) {
                alert('Esperienza lavorativa eliminata con successo!')
                dispatch(getUserExperiencesAction(`https://striveschool-api.herokuapp.com/api/profile/${loggedUser._id}/experiences`))
            } else {
                console.log('Errore nel caricamento dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }
    
    return(
        <div className='experiences'>
            <h2>Experiences</h2>
            {experiences && experiences.length > 0 ? (
                experiences.map((experience) => {
                    return (
                        <div  key={experience._id}>
                            <ExperienceCard experienceData={experience} deleteFunc={() => deleteUserExperience(experience._id)} openEdit={handleOpenEditExperience} />
                            {isEditExperienceOn ? (<EditExperience experience={experience} close={handleCloseEditExperience} />) : ''}
                            {/* <div key={experience._id}>
                        <p>{experience.role} • {experience.company} | {iduser.user === 'me' ? (
                            <>
                            <button onClick={() => handleOpenEditExperience()}>Modifica</button> | 
                            <button onClick={() => deleteUserExperience(experience._id)}>Delete</button>
                            </>
                            ) : ''}</p>
                        {isEditExperienceOn ? (<EditExperience experience={experience} close={handleCloseEditExperience} />) : ''}
                        </div> */}
                        </div>
                    )
                })
            ) : (<p>Ancora vuoto</p>)}
            
            {iduser.user === 'me' ? (<button onClick={() => handleOpenNewExperience()}>Nuova esperienza lavorativa</button>) : (<p>Non hai i permessi</p>)}
            {isNewExperienceOn ? (<NewExperience close={handleCloseNewExperience}/>) : ''}
        </div>
    )
}

export default Experiences