import './Experiences.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import NewExperience from '../NewExperience/NewExperience'
import { getUserExperiencesAction } from '../../../redux/actions'
import { useParams } from 'react-router-dom'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import EditExperience from '../EditExperience/EditExperience'

const Experiences = () => {
    const [experienceToShow, setExperienceToShow] = useState([])
    const [isNewExperienceOn, setIsNewExperienceOn] = useState(false)
    const [isEditExperienceOn, setIsEditExperienceOn] = useState(false)
    const experiences = useSelector(state => state.experiences.experiences)
    const loggedUser = useSelector((state) => state.user.userFetch)
    const dispatch = useDispatch()
    let iduser = useParams();
    if(iduser.user === 'me') {
        iduser.user = '65ae3ed3600be100183a8698'
    }
    const urlExperienceToShow = `https://striveschool-api.herokuapp.com/api/profile/${iduser.user}/experiences`

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

    const handleExperienceFetch = async (url) => {
        try {
            console.log(url)
            if(iduser) {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                  'Content-Type': 'application/json'
                },
              })
              if(res.ok) {
                const data = await res.json()
                console.log('Dati experiences caricati con successo')
                setExperienceToShow(data)
              } else {
                console.log('Errore nel caricamento dei dati')
              }
            }
            
        } catch(err) {
            console.log('ERRORE NEL TRY:', err)
        }
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

    useEffect(() => {
        console.log(urlExperienceToShow)
        handleExperienceFetch(urlExperienceToShow)
    },[iduser])

    useEffect(() => {
        console.log(experienceToShow)
    },[experienceToShow])
    
    return(
        <div className='experiences'>
            <h2>Experiences</h2>
            {iduser.user !== '65ae3ed3600be100183a8698' ? (
                experienceToShow && experienceToShow.length > 0 ? (
                    experienceToShow.map((experience) => {
                        return (
                            <div  key={experience._id}>
                                <ExperienceCard experienceData={experience} deleteFunc={() => deleteUserExperience(experience._id)} openEdit={handleOpenEditExperience} />
                                {isEditExperienceOn ? (<EditExperience experience={experience} close={handleCloseEditExperience} />) : ''}
                            </div>
                        )
                    })
                ) : (<p>Ancora vuoto</p>)
            ) : (
                experiences && experiences.length > 0 ? (
                    experiences.map((experience) => {
                        return (
                            <div  key={experience._id}>
                                <ExperienceCard experienceData={experience} deleteFunc={() => deleteUserExperience(experience._id)} openEdit={handleOpenEditExperience} />
                                {isEditExperienceOn ? (<EditExperience experience={experience} close={handleCloseEditExperience} />) : ''}
                            </div>
                        )
                    })
                ) : (<p>Ancora vuoto</p>)    
            )}
            {iduser.user === '65ae3ed3600be100183a8698' ? (<button onClick={() => handleOpenNewExperience()}>Nuova esperienza lavorativa</button>) : (<p>Non hai i permessi</p>)}
            {isNewExperienceOn ? (<NewExperience close={handleCloseNewExperience}/>) : ''}
        </div>
    )
}

export default Experiences