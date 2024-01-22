import './EditProfile.css'

const EditProfile = ({data, close}) => {
    return (
        <div className='editProfileModulePage'>
            <div>
                <h2>Modifica presentazione</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0,0,0,0.7)" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={close}>
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
            <form>
                <div className='inputsDiv'>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="surname">Cognome:</label>
                        <input type="text" name="surname" id="surname" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div>
                        <label htmlFor="bio">Bio:</label>
                        <input type="text" name="bio" id="bio" />
                    </div>
                    <div>
                        <label htmlFor="title">Titoli:</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div>
                        <label htmlFor="area">Zona:</label>
                        <input type="text" name="area" id="area" />
                    </div>
                </div> 
                <div className='editProfileButton'>
                    <button>Salva</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile