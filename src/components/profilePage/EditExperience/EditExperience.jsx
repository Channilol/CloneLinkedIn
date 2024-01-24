import './EditExperience.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserExperiencesAction } from '../../../redux/actions'

const EditExperience = ({experience, close}) => {
    const loggedUser = useSelector((state) => state.user.userFetch)
    const [experienceData, setExperienceData] = useState({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        area: ''
      })
    const dispatch = useDispatch()

    useEffect(() => {
        setExperienceData(experience)
        console.log(experience)
        console.log(loggedUser._id)
    },[])

    const handleEditExperience = async (data) => {
        try {
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/65ae3ed3600be100183a8698/experiences/${experience._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(res.ok) {
                alert('Profilo salvato con successo!')
                dispatch(getUserExperiencesAction('https://striveschool-api.herokuapp.com/api/profile/65ae3ed3600be100183a8698/experiences'))
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleEditExperience(experienceData)
        close()
    }

    return (
        <div className='editExperience'>
            <div>
                <h1>Modifica esperienza lavorativa</h1>
                <button onClick={close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0,0,0,0.7)" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>
            
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="role">Ruolo:</label>
                    <input type="text" name="role" id="role" value={experienceData.role || ''} onChange={(e) => setExperienceData({
                        ...experienceData, role: e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="company">Azienda:</label>
                    <input type="text" name="company" id="company" value={experienceData.company || ''} onChange={(e) => setExperienceData({
                        ...experienceData, company: e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="startDate">Data di inizio:</label>
                    <input type="date" name="startDate" id="startDate" value={experienceData.startDate || ''} onChange={(e) => setExperienceData({
                        ...experienceData, startDate: e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="endDate">Fino a:</label>
                    <input type="date" name="endDate" id="endDate" value={experienceData.endDate || ''} onChange={(e) => setExperienceData({
                        ...experienceData, endDate: e.target.value
                    })}/>
                </div>
                <div>
                   <label htmlFor="description">Descrizione:</label>
                    <input type="text" name="description" id="description" value={experienceData.description || ''} onChange={(e) => setExperienceData({
                        ...experienceData, description: e.target.value
                    })}/> 
                </div>
                <div>
                    <label htmlFor="area">Zona:</label>
                    <input type="text" name="area" id="area" value={experienceData.area || ''} onChange={(e) => setExperienceData({
                        ...experienceData, area: e.target.value
                    })}/>
                </div> 
                <button type='submit'>Invia</button>
            </form>
        </div>
    )
}

export default EditExperience