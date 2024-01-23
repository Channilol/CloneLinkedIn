export const GET_USER_FETCH = 'GET_USER_FETCH' 
export const EDIT_USER_INFO = 'EDIT_USER_INFO'

export const getUserFetchAction = (url, token) => {
    return async dispatch => {
        try {
            const res = await fetch(url, token)
            if (res.ok) {
                console.log('dati fetchati con successo')
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

export const editUserInfoAction = (userInfo) => {
    return {
        type: EDIT_USER_INFO,
        payload: userInfo
    }
}