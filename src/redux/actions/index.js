export const GET_USER_FETCH = 'GET_USER_FETCH' 

export const getUserFetchAction = (url, token) => {
    return async dispatch => {
        try {
            const res = await fetch(url, token)
            if (res.ok) {
                const data = await res.json()
                dispatch({
                    type: GET_USER_FETCH,
                    payload: data
                })
            } else {
                console.log('Errore nel caricamento dati')
            }
        } catch (err) {
            console.log('Errore:', err)
        }
    }
}