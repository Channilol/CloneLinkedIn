import './ProfilePage.css'
import ProfiloTop from './ProfiloTop/ProfiloTop'
import { getUserFetchAction } from '../../redux/actions'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Lingua from './lingua/Lingua'
import PotrestiConoscere from './PotrestiConoscere/PotrestiConoscere'
import InLearning from './InLearning/InLearning'
import Risorse from './Risorse/Risorse'
import SectionAnalysis from './SectionAnalysis/SectionAnlysis'
import Experiences from './experiences/Experiences'
import ActivityComponent from './ActivityComponent/ActivityComponent'
import EducationComponent from './EducationComponent/EducationComponent'
import { getUserExperiencesAction } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import Footer from '../footer/Footer'

const ProfilePage = () => {
    const iduser = useParams();
    const loggedUser = useSelector((state) => state.user.userFetch)
    const apiUrl = `https://striveschool-api.herokuapp.com/api/profile/${iduser.user}`
    const token = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
          'Content-Type': 'application/json'
        },
      }
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserFetchAction(apiUrl, token))
    },[])

    useEffect(() => { 
        if (loggedUser && loggedUser._id) {
            dispatch(getUserExperiencesAction(`https://striveschool-api.herokuapp.com/api/profile/${loggedUser._id}/experiences`)) 
        }
    },[loggedUser])

    return (
        <>
        <div className='profilePage'>
            <div className='profilePageLeft'>
                <ProfiloTop />
                {iduser.user === 'me' ? (
                    <>
                    <Risorse/>
                    <SectionAnalysis/>
                    </>
                ) : ''}
                <Experiences/>
                <ActivityComponent/>
                <EducationComponent/>
            </div>
            <div className='profilePageRight'>
                {iduser.user === 'me' ? (<Lingua/>) : ''}        
                <PotrestiConoscere/>
                <InLearning/>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ProfilePage