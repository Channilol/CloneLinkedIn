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

const ProfilePage = () => {
    const loggedUser = useSelector((state) => state.user.userFetch)
    const apiUrl = 'https://striveschool-api.herokuapp.com/api/profile/me'
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
    }, [])

    useEffect(() => {
        console.log(loggedUser)
    },[loggedUser])

    return (
        <div className='profilePage'>
            <div className='profilePageLeft'>
                <ProfiloTop />
                <Risorse/>
                <SectionAnalysis/>
            </div>
            <div className='profilePageRight'>
                <Lingua/>
                <PotrestiConoscere/>
                <InLearning/>
            </div>
        </div>
    )
}

export default ProfilePage