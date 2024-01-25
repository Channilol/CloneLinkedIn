import './PostContainer.css'
import PostCard from '../PostCard/PostCard'
import { useState, useEffect } from 'react'

const PostContainer = () => {
    const [post1to5, setPost1to5] = useState([])
    const [post6to10, setPost6to10] = useState([])

    const fetchPosts = async (url) => {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                  'Content-Type': 'application/json',
                }
            })
            if(res.ok) {
                const data = await res.json()
                const dataReversedSort = data.reverse()
                setPost1to5(dataReversedSort.slice(0,5))
                setPost6to10(dataReversedSort.slice(5,10))
            }
        } catch(err) {
            console.log('ERRORE:', err)
        }
    }

    useEffect(() => {
        fetchPosts('https://striveschool-api.herokuapp.com/api/posts/')
    },[])

    return(
        <div className='postCardContainer'>
            {post1to5 ? (
                post1to5.map((post) => {
                    return <PostCard key={post._id} datiPost={post} />
                })
            ) : (<p>Loading...</p>)}
        </div>
    )
}

export default PostContainer