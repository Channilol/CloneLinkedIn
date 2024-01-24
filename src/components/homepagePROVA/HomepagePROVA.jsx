import { useNavigate } from "react-router-dom"

const HomepagePROVA = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>Homepage di prova</h1>
        <button onClick={() => navigate('/profile/me')}>Profilo ME</button>
        <button onClick={() => navigate('/profile/65afa6e9faf4d000181510ff')}>Profilo altro user</button>
        </>
    )
}

export default HomepagePROVA