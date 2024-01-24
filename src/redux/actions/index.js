export const GET_USER_FETCH = 'GET_USER_FETCH' 
export const GET_USER_EXPERIENCES = 'GET_USER_EXPERIENCES'

export const getUserExperiencesAction = (url) => {
    return async dispatch => {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2VkMzYwMGJlMTAwMTgzYTg2OTgiLCJpYXQiOjE3MDU5MTgxNjMsImV4cCI6MTcwNzEyNzc2M30.7DYncSKPLwIy7aJwIhh6w0OhrQZ4E4_M74Hg7oUY_DE',
                  'Content-Type': 'application/json'
                },
              })
            if (res.ok) {
                console.log('experiences loggedUser fetchate con successo')
                const data = await res.json()
                dispatch({
                    type: GET_USER_EXPERIENCES,
                    payload: data
                })
            } else {
                console.log('Errore nel caricamento dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }
}

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