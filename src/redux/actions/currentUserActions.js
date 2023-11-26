

export const getCurrentUser = async (dispatch) => {
  try {
    const res = await fetch('http://localhost:4000/auth/currentUser', { credentials: 'include'})
    const { currentUser } = await res.json()

    if(!currentUser) {
      dispatch({ type: 'SET_USER', payload: null })
    } else {
      dispatch({ type: 'SET_USER', payload: currentUser })
    }
  } catch (error) {
    console.log(error)
  }
}