import * as types from '../types'
import Axios from 'axios'

export const fetchprofile = () => async dispatch => {
  const baseUrl = 'http://localhost:3001/userLogin'
  const profile = await Axios.get(baseUrl).then(response => {
    return response
  })

  dispatch({
    type: types.GET_PROFILE,
    payload: profile.data
  })
}

export const opencloseprofile = () => async dispatch => {
  dispatch({
    type: types.OPEN_PROFILE,
    payload: {}
  })
}
